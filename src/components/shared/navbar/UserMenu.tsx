import { getMe } from "@/services/getMe";
import LoggedInMenu from "./LoggedInMenu";
import LoggedOutMenu from "./LoggedOutMenu";

export default async function UserMenu() {
  const me = await getMe();

  if (!me?.success || !me.data?.profile) {
    return <LoggedOutMenu />;
  }

  return <LoggedInMenu user={me.data.profile} />;
}
