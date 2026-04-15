"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import s from "./HomeScreen.module.css";

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
    <div className={s.container}>
      {data && data?.length > 0 ? (
        data?.map((videoId) => (
          <div key={videoId} className={s.videoBlock}>
            <Link href={`/video/${videoId}`} className={s.videoPreview}>
              <Image
                className={s.videoImg}
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                alt={"preview"}
                fill
              />
            </Link>

            <div className={s.videoInfoContainer}>
              <Link href={"/2"} className={s.channelImg}>
                <div className={s.hiddenText}>Название канала</div>
              </Link>

              <div className={s.videoInfo}>
                <Link href={`/video/${videoId}`} className={s.videoTitleLink}>
                  Название ролика
                </Link>
                <Link href={"/2"} className={s.channelNameLink}>
                  Название канала
                </Link>
              </div>
            </div>

            <Link href={`/video/${videoId}`} className={s.link} />
          </div>
        ))
      ) : (
        <div>No data</div>
      )}
    </div>
  );
};
