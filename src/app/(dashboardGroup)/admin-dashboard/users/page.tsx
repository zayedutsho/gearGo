import { getUsers } from "@/services/admin/getUsers";

import UsersTable from "./_components/UsersTable";

export default async function UsersPage() {
  const result = await getUsers();

  const users = result.data ?? [];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Users</h1>

        <p className="text-muted-foreground">Manage customers and providers.</p>
      </div>

      <UsersTable users={users} />
    </div>
  );
}
