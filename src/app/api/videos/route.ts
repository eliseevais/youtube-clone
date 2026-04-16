type OembedVideoInfo = {
  title: string;
  author_name: string;
  author_url: string;
  type: string;
  height: number;
  width: number;
  version: string;
  provider_name: string;
  provider_url: string;
  thumbnail_height: number;
  thumbnail_width: number;
  thumbnail_url: string;
  html: string;
};

const videosData = new Set<string>([
  "8hQQtm75BCk",
  "TcHYEWzxvjo",
  "C8EF2VUTuj8",
  "ABZYfx5v1lU",
  "v4tl9bD8tQI",
  "O6nlnDjXzRs",
  "Hg9W0Td6sUc",
  "YtZZ-hxz9TI",
  "6ASD8gHrDeE",
  "zo86Zk7T_-k",
]);

export async function GET() {
  try {
    const promises = [...videosData].map(async (videoId) => {
      const rawResult = await fetch(
        `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`
      );
      const videoInfo = (await rawResult.json()) as OembedVideoInfo;

      return {
        videoId,
        title: videoInfo.title,
        authorName: videoInfo.author_name,
        authorUrl: videoInfo.author_url,
      };
    });

    const result = await Promise.all(promises);

    return Response.json({ ok: true, data: result });
  } catch (error) {
    console.log("error:", error);
    return Response.json({ ok: true, data: [] }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const data = await request.json();

  if (videosData.has(data.videoId)) {
    return Response.json({ ok: false, error: "Video has been added earlier" }, { status: 400 });
  }
  videosData.add(data.videoId);

  return Response.json({ ok: true });
}
