import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Status =
  | "PENDING"
  | "CONFIRMED"
  | "ACTIVE"
  | "COMPLETED"
  | "CANCELLED"
  | "PAID"
  | "UNPAID";

type Props = {
  status: Status;
};

const statusStyles: Record<Status, string> = {
  PENDING:
    "bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-100",
  CONFIRMED: "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-100",
  ACTIVE: "bg-green-100 text-green-800 border-green-200 hover:bg-green-100",
  COMPLETED: "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-100",
  CANCELLED: "bg-red-100 text-red-800 border-red-200 hover:bg-red-100",
  PAID: "bg-emerald-100 text-emerald-800 border-emerald-200 hover:bg-emerald-100",
  UNPAID: "bg-rose-100 text-rose-800 border-rose-200 hover:bg-rose-100",
};

export default function StatusBadge({ status }: Props) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "rounded-full px-3 py-1 text-xs font-medium",
        statusStyles[status],
      )}
    >
      {status.charAt(0) + status.slice(1).toLowerCase()}
    </Badge>
  );
}
