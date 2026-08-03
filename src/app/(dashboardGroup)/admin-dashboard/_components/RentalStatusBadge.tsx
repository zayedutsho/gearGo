import { Badge } from "@/components/ui/badge";
import { OrderStatus } from "@/types/order";

type Props = {
  status: OrderStatus;
};

export default function RentalStatusBadge({ status }: Props) {
  const variants: Record<OrderStatus, string> = {
    PLACED: "bg-slate-100 text-slate-700 border-slate-200",
    CONFIRMED: "bg-blue-100 text-blue-700 border-blue-200",
    ACTIVE: "bg-green-100 text-green-700 border-green-200",
    RETURNED: "bg-purple-100 text-purple-700 border-purple-200",
    CANCELLED: "bg-red-100 text-red-700 border-red-200",
  };

  return (
    <Badge variant="outline" className={variants[status]}>
      {status}
    </Badge>
  );
}
