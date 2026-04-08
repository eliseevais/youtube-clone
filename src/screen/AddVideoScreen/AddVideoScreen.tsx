"use client";
// https://www.youtube.com/watch?v=mc1Z16DzObQ&t

import { useState } from "react";
import { parseYouTube } from "../../shared/libs";

export const AddVideoScreen = () => {
  const [videoId, setVideoId] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const anyE = e as any;
          const url = anyE.target.elements[0].value;

          if (!url) return;

          let finalUrl: URL | null = null;

          try {
            finalUrl = new URL(url);
          } catch (error) {
            console.error("error", error);
          }

          if (!finalUrl) return;

          const data = parseYouTube(finalUrl);
          if (!data) return;

          console.log("e", data);

          setVideoId(data);
        }}
      >
        <input type={"text"} placeholder={"Insert link on YpuTube"} />
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
