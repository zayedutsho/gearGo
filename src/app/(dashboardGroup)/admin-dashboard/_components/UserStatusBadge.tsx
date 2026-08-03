import { Badge } from "@/components/ui/badge";

import { UserStatus } from "@/types/user";

type Props = {
  status: UserStatus;
};

export default function UserStatusBadge({ status }: Props) {
  const variants = {
    ACTIVE: "bg-green-100 text-green-700 border-green-200",
    BLOCKED: "bg-gray-100 text-gray-700 border-gray-200",
  };

  return (
    <Badge variant="outline" className={variants[status]}>
      {status}
    </Badge>
  );
}
