import { create } from 'zustand';

interface ICacheState {
    data: Record<string, any> | null;
    setData: (csvPath: string, data: any) => void;
    getData: (csvPath: string) => any | null;
}

export const useCacheStore = create<ICacheState>((set, get) => ({
    data: null,
    setData: (csvPath, data) => set((state) => ({
        data: {
            ...state.data,
            [csvPath]: data
        }
    })),
    getData: (csvPath) => {
        const state = get();
        return state.data ? state.data[csvPath] : null;
    }
}));
