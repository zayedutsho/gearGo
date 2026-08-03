import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { PaymentStatus } from "@/types/order";

type Props = {
  status: PaymentStatus;
};

const variants: Record<PaymentStatus, string> = {
  PAID: "bg-green-100 text-green-700 border-green-200",
  PENDING: "bg-yellow-100 text-yellow-700 border-yellow-200",
  FAILED: "bg-red-100 text-red-700 border-red-200",
};

export default function PaymentStatusBadge({ status }: Props) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "rounded-full px-3 py-1 text-xs font-medium",
        variants[status],
      )}
    >
      {status.charAt(0) + status.slice(1).toLowerCase()}
    </Badge>
  );
}
