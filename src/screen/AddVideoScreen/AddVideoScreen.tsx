"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { isAllowedHost, parseYouTube, YOUTUBE_DOMAINS } from "@/shared/libs";

// https://www.youtube.com/watch?v=mc1Z16DzObQ&t

type Inputs = {
  videoUrl: string;
};

const schema = z.object({
  videoUrl: z
    .string()
    .min(1, { message: "Required video url" })
    .superRefine((url, ctx) => {
      let parsedUrl: URL;
      try {
        parsedUrl = new URL(url);
      } catch {
        ctx.addIssue({
          code: "custom",
          message: `Field have to be a link.`,
          input: url,
        });
        return;
      }
      if (!isAllowedHost(parsedUrl.host, YOUTUBE_DOMAINS)) {
        ctx.addIssue({
          code: "custom",
          message: `Link have to be on YouTube.`,
          input: url,
        });
      }
    }),
});

export const AddVideoScreen = () => {
  const [videoId, setVideoId] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: Inputs) => {
    const url = new URL(data.videoUrl);

    const videoId = parseYouTube(url);

    if (!videoId) return;

    setVideoId(videoId);

    await fetch("/api/videos", {
      method: "POST",
      body: JSON.stringify({ videoId }),
    });

    const dataFromServer = await fetch("/api/videos");
    const response = await dataFromServer.json();
    console.log("dataFromServer", response);
  };

  const hasVideoInputUrlError = Boolean(errors.videoUrl?.message);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <input type={"text"} placeholder={"Insert link on YpuTube"} {...register("videoUrl")} />

          {hasVideoInputUrlError && <p style={{ color: "red" }}>{errors.videoUrl?.message}</p>}
        </label>
        <button>load</button>
      </form>

      {videoId && (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};
