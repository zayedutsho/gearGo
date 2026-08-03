import { format } from "date-fns";

import { TableCell, TableRow } from "@/components/ui/table";

import { User } from "@/types/user";

import UserDetailsDialog from "./UserDetailsDialog";
import UserStatusBadge from "./UserStatusBadge";

type Props = {
  user: User;
};

export default function UserTableRow({ user }: Props) {
  return (
    <TableRow className="transition-colors hover:bg-muted/30">
      {/* User */}
      <TableCell className="py-5">
        <div className="space-y-1">
          <p className="font-semibold">{user.name}</p>

          <p className="text-xs text-muted-foreground">{user.email}</p>
        </div>
      </TableCell>

      {/* Role */}
      <TableCell>
        <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium">
          {user.role}
        </span>
      </TableCell>

      {/* Status */}
      <TableCell>
        <UserStatusBadge status={user.status} />
      </TableCell>

      {/* Joined */}
      <TableCell>{format(new Date(user.createdAt), "dd MMM yyyy")}</TableCell>

      {/* Actions */}
      <TableCell className="text-right">
        <UserDetailsDialog user={user} />
      </TableCell>
    </TableRow>
  );
}
