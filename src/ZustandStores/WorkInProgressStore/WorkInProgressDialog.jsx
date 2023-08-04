import { create } from "zustand";

export const useStoreWIP = create((set) => ({
  isWIPDialogOpen: false,
  openWIP: () => set({ isWIPDialogOpen: true }),
  closeWIP: () => set({ isWIPDialogOpen: false }),
}));
