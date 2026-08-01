import GearDetails from "@/components/features/gear-details/GearDetails";
import { getSingleGear } from "@/services/gear/getSingleGear";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function GearDetailsPage({ params }: Props) {
  const { id } = await params;

  const gear = await getSingleGear(id);

  return <GearDetails gear={gear.data} />;
}
