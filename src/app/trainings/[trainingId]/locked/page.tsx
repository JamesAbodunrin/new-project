import { LockedTrainingScreen } from "@/components/screens/LockedTrainingScreen";

type LockedTrainingPageProps = {
  params: Promise<{
    trainingId: string;
  }>;
};

export default async function LockedTrainingPage({
  params,
}: LockedTrainingPageProps) {
  const { trainingId } = await params;

  return <LockedTrainingScreen trainingId={trainingId} />;
}

