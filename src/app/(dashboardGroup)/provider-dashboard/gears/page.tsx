import Loading from "@/components/shared/loading/Loading";
import { useProviderGears } from "@/hooks/useProviderGears";
import AddGearButton from "../_components/AddGearDialog";
import GearTable from "../_components/GearTable";

export default function ProviderGearsPage() {
  const { data, isLoading } = useProviderGears();

  if (isLoading) return <Loading />;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Gear Listings</h1>

        <AddGearButton />
      </div>

      <GearTable gears={data.data} />
    </div>
  );
}
