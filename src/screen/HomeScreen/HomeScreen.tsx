"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
            <Link key={videoId} href={`/video/${videoId}`}>
              <Image
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                alt={"preview"}
                width={200}
                height={150}
              />
            </Link>
          );
        })
      ) : (
        <div>No data</div>
      )}
    </div>
  );
};
