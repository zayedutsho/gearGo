import {
  Bike,
  Mountain,
  PersonStanding,
  Snowflake,
  Tent,
  Waves,
} from "lucide-react";

export const categories = [
  {
    id: 1,
    name: "Camping",
    image: "/images/categories/camping.jpg",
    totalGear: 120,
    icon: Tent,
    slug: "camping",
  },
  {
    id: 2,
    name: "Hiking",
    image: "/images/categories/hiking.jpg",
    totalGear: 95,
    icon: PersonStanding,
    slug: "hiking",
  },
  {
    id: 3,
    name: "Cycling",
    image: "/images/categories/cycling.jpg",
    totalGear: 80,
    icon: Bike,
    slug: "cycling",
  },
  {
    id: 4,
    name: "Climbing",
    image: "/images/categories/climbing.jpg",
    totalGear: 60,
    icon: Mountain,
    slug: "climbing",
  },
  {
    id: 5,
    name: "Winter Sports",
    image: "/images/categories/winter.jpg",
    totalGear: 70,
    icon: Snowflake,
    slug: "winter",
  },
  {
    id: 6,
    name: "Water Sports",
    image: "/images/categories/water.jpg",
    totalGear: 50,
    icon: Waves,
    slug: "water",
  },
];
