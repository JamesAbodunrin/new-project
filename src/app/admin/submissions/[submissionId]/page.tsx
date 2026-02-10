import { SubmissionReviewScreen } from "@/components/screens/SubmissionReviewScreen";

type AdminSubmissionReviewPageProps = {
  params: Promise<{
    submissionId: string;
  }>;
};

export default async function AdminSubmissionReviewPage({
  params,
}: AdminSubmissionReviewPageProps) {
  const { submissionId } = await params;

  return <SubmissionReviewScreen submissionId={submissionId} />;
}

