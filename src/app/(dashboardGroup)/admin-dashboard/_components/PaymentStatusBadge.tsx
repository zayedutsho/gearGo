import { Badge } from "@/components/ui/badge";
import { PaymentStatus } from "@/types/order";

type Props = {
  status: PaymentStatus;
};

export default function PaymentStatusBadge({ status }: Props) {
  const variants: Record<PaymentStatus, string> = {
    PAID: "bg-green-100 text-green-700 border-green-200",
    PENDING: "bg-yellow-100 text-yellow-700 border-yellow-200",
  };

  return (
    <Badge variant="outline" className={variants[status]}>
      {status}
    </Badge>
  );
}
