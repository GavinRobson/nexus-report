import { auth } from "@/auth";
import { LinkRiotAccount } from "@/components/settings/link-riot-account";
import { redirect } from "next/navigation";

const LinkPage = async () => {
  const session = await auth();

  if (!session) {
    redirect('/auth/login');
  }

  return (
    <LinkRiotAccount session={session} />
  )
};

export default LinkPage;
