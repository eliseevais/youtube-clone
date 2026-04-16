export type VideoDTO = {
  videoId: string;
  title: string;
  authorName: string;
  authorUrl: string;
};

export type AllVideosDTO = {
  ok: boolean;
  data: VideoDTO[];
};
