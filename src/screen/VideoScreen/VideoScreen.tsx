import s from "./VideoScreen.module.css";
import Link from "next/link";

type VideoPageProps = {
  videoId: string;
};

export const VideoScreen = ({ videoId }: VideoPageProps) => {
  return (
    <div className={s.container}>
      <iframe
        className={s.iframe}
        key={videoId}
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />

      <b className={s.videoTitle}>Название ролика</b>

      <div className={s.videoInfoContainer}>
        <Link href={"/2"} className={s.channelImg}>
          <div className={s.hiddenText}>Название канала</div>
        </Link>

        <Link href={"/2"} className={s.channelNameLink}>
          Название канала
        </Link>
      </div>
    </div>
  );
};
