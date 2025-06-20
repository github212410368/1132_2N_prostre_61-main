import { Metadata } from "next";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import ProfileForm_61 from "./profile-from_61";
export const metadata: Metadata = {
  title: "Customer Profile",
};

const ProfilePage_61 = async () => {
  const session = await auth();
  if (!session) {
    return null;
  }

  return (
    <SessionProvider session={session}>
      <div className="max-w-md mx-auto space-y-4">
        <h1 className="h2-bold">Profile</h1>
        <ProfileForm_61 />
      </div>
    </SessionProvider>
  );
};

export default ProfilePage_61
