"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { parseYouTube } from "@/shared/libs";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// https://www.youtube.com/watch?v=mc1Z16DzObQ&t

type Inputs = {
  videoUrl: string;
};

const schema = z.object({
  videoUrl: z.string().min(1, { message: "Required video url" }),
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

  const onSubmit = (data: Inputs) => {
    const url = data.videoUrl;

    if (!url) return;

    let finalUrl: URL | null = null;

    try {
      finalUrl = new URL(url);
    } catch (error) {
      console.error("error", error);
    }

    if (!finalUrl) return;

    const videoId = parseYouTube(finalUrl);
    if (!videoId) return;
    setVideoId(videoId);
  };

  console.log("errors", errors);

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
