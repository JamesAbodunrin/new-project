import { FeedbackViewScreen } from "@/components/screens/FeedbackViewScreen";

type TrainingFeedbackPageProps = {
  params: Promise<{
    trainingId: string;
  }>;
};

export default async function TrainingFeedbackPage({
  params,
}: TrainingFeedbackPageProps) {
  const { trainingId } = await params;

  return <FeedbackViewScreen trainingId={trainingId} />;
}

