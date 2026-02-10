import { TrainingDetailScreen } from "@/components/screens/TrainingDetailScreen";
import type { Metadata } from "next";

type TrainingDetailPageProps = {
  params: Promise<{
    trainingId: string;
  }>;
};

export async function generateMetadata(
  props: TrainingDetailPageProps,
): Promise<Metadata> {
  const { trainingId } = await props.params;

  return {
    title: `Training ${trainingId} · NeonFibre`,
  };
}

export default async function TrainingDetailPage(
  props: TrainingDetailPageProps,
) {
  const { trainingId } = await props.params;

  return <TrainingDetailScreen trainingId={trainingId} />;
}

