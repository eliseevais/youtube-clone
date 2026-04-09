const videosData = new Set<string>();

export async function GET() {
  videosData.add("8hQQtm75BCk");
  videosData.add("TcHYEWzxvjo");
  videosData.add("C8EF2VUTuj8");
  videosData.add("ABZYfx5v1lU");
  videosData.add("LVy5k8lI2LM");
  videosData.add("Ph7iu3xlpFY&t");
  videosData.add("Hg9W0Td6sUc");
  videosData.add("YtZZ-hxz9TI");
  videosData.add("6ASD8gHrDeE");
  videosData.add("zo86Zk7T_-k");

  return Response.json({ ok: true, data: Array.from(videosData) });
}

export async function POST(request: Request) {
  const data = await request.json();

  if (videosData.has(data.videoId)) {
    return Response.json({ ok: false, error: "Video has been added earlier" }, { status: 400 });
  }
  videosData.add(data.videoId);

  return Response.json({ ok: true });
}
