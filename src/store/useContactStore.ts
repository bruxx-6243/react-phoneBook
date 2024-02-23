import { ContactProps } from "@/types";
import { create } from "zustand";

type State = {
  contacts: ContactProps[];
};

type Actions = {
  addContact: (args: { contact: ContactProps }) => void;
};

export const useContactStore = create<State & Actions>((set) => ({
  contacts: [],
  addContact: ({ contact }) => {
    set((state) => ({
      contacts: [...state.contacts, contact].sort((a, b) =>
        a.lastName.localeCompare(b.lastName)
      ),
    }));
  },
}));
