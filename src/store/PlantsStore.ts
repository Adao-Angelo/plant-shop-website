import { create } from "zustand";

type PlantType = {
  image: string;
  type: string;
  price: number;
};

type PlantsStore = {
  Plants: PlantType[];
  addPlant: (plant: PlantType) => void;
};

const InitialPlants: PlantType[] = [
  {
    image: "/alexandra-gor-unsplash.jpg",
    type: "Natural Plants",
    price: 2999.99,
  },
  {
    image: "/robert-santa-unsplash.jpg",
    type: "Artificial Plants",
    price: 9766.99,
  },
  {
    image: "/non-unsplash.jpg",
    type: "Artificial Plants",
    price: 1599.99,
  },
];

export const UsePlantsStore = create<PlantsStore>((set) => ({
  Plants: InitialPlants,
  addPlant: (plant) =>
    set((state) => ({
      Plants: [...state.Plants, plant],
    })),
}));
