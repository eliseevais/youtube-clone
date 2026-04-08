type ProfileIdPageProps = {
  params: Promise<{ profileId: string }>;
};

export default async function ProfileIdPage({ params }: ProfileIdPageProps) {
  const data = await params;
  const profileId = data.profileId;

  return <div>ProfileIdPage: {profileId}</div>;
}
