import { create } from "zustand";

type State = {
  selectedRecipe: string | null;
  setSelectedRecipe: (id: string) => void;
};

export const useStore = create<State>((set) => ({
  selectedRecipe: null,
  setSelectedRecipe: (id: string) => set({ selectedRecipe: id }),
}));
