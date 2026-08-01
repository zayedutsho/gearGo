import { getMe } from "@/services/getMe";
import LoggedInMenu from "./LoggedInMenu";
import LoggedOutMenu from "./LoggedOutMenu";

// type GetMeResponse = {
//   success: boolean;
//   data: {
//     profile: {
//       id: string;
//       name: string;
//       email: string;
//       phone: string | null;
//       role: "ADMIN" | "PROVIDER" | "CUSTOMER";
//       image?: string;
//     };
//   };
// };

export default async function UserMenu() {
  const me = await getMe();

  if (!me?.success || !me.data?.profile) {
    return <LoggedOutMenu />;
  }

  return <LoggedInMenu user={me.data.profile} />;
}
