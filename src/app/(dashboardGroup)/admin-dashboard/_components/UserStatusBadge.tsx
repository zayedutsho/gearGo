import { Badge } from "@/components/ui/badge";

import { UserStatus } from "@/types/user";

type Props = {
  status: UserStatus;
};

export default function UserStatusBadge({ status }: Props) {
  const variants = {
    ACTIVE: "bg-green-100 text-green-700 border-green-200",
    INACTIVE: "bg-gray-100 text-gray-700 border-gray-200",
    SUSPENDED: "bg-red-100 text-red-700 border-red-200",
  };

  return (
    <Badge variant="outline" className={variants[status]}>
      {status}
    </Badge>
  );
}
