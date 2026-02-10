import { ResetPasswordScreen } from "@/components/screens/ResetPasswordScreen";

type ResetPasswordPageProps = {
  searchParams: Promise<{
    token?: string;
  }>;
};

export default async function ResetPasswordPage({
  searchParams,
}: ResetPasswordPageProps) {
  const { token } = await searchParams;

  return <ResetPasswordScreen token={token} />;
}

