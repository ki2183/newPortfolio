import { create } from 'zustand';
import { SliceType } from '../types/store';

type ResizeState = {
  width: number;
  height: number;
};

type ResizeAction = {
  setSize: (width: number, height: number) => void;
};

type ResizeSlice = SliceType<ResizeState, ResizeAction>;

export const useResizeStore = create<ResizeSlice>((set) => ({
  state: {
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  },
  action: {
    setSize: (width, height) => {
      set((prev) => ({
        state: { ...prev.state, width, height },
        action: prev.action,
      }));
    },
  },
}));
