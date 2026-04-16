"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import s from "./HomeScreen.module.css";
import { AllVideosDTO } from "@/shared/types/typesFromBackend";

export const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<AllVideosDTO["data"] | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const dataFromServer = await fetch("/api/videos");
        const response = (await dataFromServer.json()) as AllVideosDTO;
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
        data?.map((videoInfo) => (
          <div key={videoInfo.videoId} className={s.videoBlock}>
            <Link href={`/video/${videoInfo.videoId}`} className={s.videoPreview}>
              <Image
                className={s.videoImg}
                src={`https://img.youtube.com/vi/${videoInfo.videoId}/hqdefault.jpg`}
                alt={"preview"}
                fill
              />
            </Link>

            <div className={s.videoInfoContainer}>
              <Link href={`/profile/${videoInfo.authorUrl}`} className={s.channelImg}>
                <div className={s.hiddenText}>{videoInfo.authorName}</div>
              </Link>

              <div className={s.videoInfo}>
                <Link href={`/video/${videoInfo.videoId}`} className={s.videoTitleLink}>
                  <b>{videoInfo.title}</b>
                </Link>
                <Link href={`/profile/${videoInfo.authorUrl}`} className={s.channelNameLink}>
                  {videoInfo.authorName}
                </Link>
              </div>
            </div>

            <Link href={`/video/${videoInfo.videoId}`} className={s.link} />
          </div>
        ))
      ) : (
        <div>No data</div>
      )}
    </div>
  );
};
