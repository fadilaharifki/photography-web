import { create } from 'zustand';

interface LayoutState {
  showFooter: boolean;
  setFooterVisibility: (visible: boolean) => void;
}

export const useLayoutStore = create<LayoutState>((set) => ({
  showFooter: true, 
  setFooterVisibility: (visible) => set({ showFooter: visible }),
}));