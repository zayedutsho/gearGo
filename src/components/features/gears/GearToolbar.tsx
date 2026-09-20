import GearSearch from "./GearSearch";
import GearSort from "./GearSort";

export default function GearToolbar() {
  return (
    <div className="mb-8 flex flex-col gap-4 rounded-2xl border bg-card p-4 sm:flex-row sm:items-end">
      <GearSearch />
      <GearSort />
    </div>
  );
}
