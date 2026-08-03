import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { OrderStatus } from "@/types/order";

type Props = {
  status: OrderStatus;
};

const variants: Record<OrderStatus, string> = {
  PLACED: "bg-slate-100 text-slate-700 border-slate-200",
  CONFIRMED: "bg-blue-100 text-blue-700 border-blue-200",
  PICKED_UP: "bg-green-100 text-green-700 border-green-200",
  RETURNED: "bg-purple-100 text-purple-700 border-purple-200",
  CANCELLED: "bg-red-100 text-red-700 border-red-200",
};

export default function RentalStatusBadge({ status }: Props) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "rounded-full px-3 py-1 text-xs font-medium",
        variants[status],
      )}
    >
      {status
        .replace(/_/g, " ")
        .toLowerCase()
        .replace(/\b\w/g, (char) => char.toUpperCase())}
    </Badge>
  );
}
