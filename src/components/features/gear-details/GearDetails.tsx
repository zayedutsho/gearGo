import { Gear } from "@/types/gear";
import GearDescription from "./GearDescription";
import GearGallery from "./GearGallery";
import GearInfo from "./GearInfo";
import GearSpecifications from "./GearSpecifications";
import RelatedGear from "./RelatedGear";
import RentalCard from "./RentalCard";

type Props = {
  gear: Gear;
};

export default function GearDetails({ gear }: Props) {
  return (
    <main className="bg-muted/30 py-12">
      <div className="mx-auto max-w-[1440px] space-y-12 px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <GearGallery gear={gear} />

          <div className="space-y-8">
            <GearInfo gear={gear} />

            <RentalCard gear={gear} />
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <GearDescription gear={gear} />

          <GearSpecifications gear={gear} />
        </div>
      </div>
      <RelatedGear gear={gear} />
    </main>
  );
}
