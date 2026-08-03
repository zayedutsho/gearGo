import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function HeroContent() {
  return (
    <div className="space-y-10">
      <div className="space-y-6">
        <h1 className="max-w-xl text-5xl font-extrabold leading-tight tracking-tight lg:text-7xl">
          Gear Up.
          <br />
          <span className="text-[#123524]">Adventure Out.</span>
        </h1>

        <p className="max-w-lg text-lg leading-8 text-muted-foreground">
          Rent premium outdoor equipment for your next adventure. Lightweight on
          you, heavy on experience.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button
            size="lg"
            className="h-14 rounded-2xl bg-[#123524] px-8 hover:bg-[#184A35]"
          >
            <Link href="/gears">
              Browse Gear
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          <Button variant="outline" size="lg" className="h-14 rounded-2xl px-8">
            <Link href="/categories">Explore Categories</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
