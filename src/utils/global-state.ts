import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export type Image = {
  name: string;
  url: string;
};

export const imagesAtom = atomWithStorage<Image[]>("images", []);
export const searchQueryAtom = atom<string>("");
