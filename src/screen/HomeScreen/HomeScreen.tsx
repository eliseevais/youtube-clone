"use client";

import { useEffect, useState } from "react";

export const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<string[] | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const dataFromServer = await fetch("/api/videos");
        const response = await dataFromServer.json();
        setData(response.data);
      } catch {
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) {
    return <div>Loading videos...</div>;
  }

  return (
    <div>
      {data && data?.length > 0 ? (
        data?.map((videoId) => {
          return (
            <iframe
              key={videoId}
              width="150"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          );
        })
      ) : (
        <div>No data</div>
      )}
    </div>
  );
};
