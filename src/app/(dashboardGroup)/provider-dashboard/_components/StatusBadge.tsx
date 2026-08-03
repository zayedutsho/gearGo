import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { OrderStatus, PaymentStatus } from "@/types/order";

type Status = OrderStatus | PaymentStatus;

type Props = {
  status: Status;
};

const statusStyles: Record<Status, string> = {
  PLACED: "bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-100",

  CONFIRMED: "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-100",

  PICKED_UP:
    "bg-emerald-100 text-emerald-800 border-emerald-200 hover:bg-emerald-100",

  RETURNED: "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-100",

  CANCELLED: "bg-red-100 text-red-800 border-red-200 hover:bg-red-100",

  PENDING:
    "bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-100",

  PAID: "bg-green-100 text-green-800 border-green-200 hover:bg-green-100",

  FAILED: "bg-red-100 text-red-800 border-red-200 hover:bg-red-100",
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
      {status
        .replace(/_/g, " ")
        .toLowerCase()
        .replace(/\b\w/g, (char) => char.toUpperCase())}
    </Badge>
  );
}
