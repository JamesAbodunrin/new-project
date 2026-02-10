import { SubmissionConfirmationScreen } from "@/components/screens/SubmissionConfirmationScreen";

type SubmissionConfirmationPageProps = {
  params: Promise<{
    submissionId: string;
  }>;
};

export default async function SubmissionConfirmationPage({
  params,
}: SubmissionConfirmationPageProps) {
  const { submissionId } = await params;

  return <SubmissionConfirmationScreen submissionId={submissionId} />;
}

