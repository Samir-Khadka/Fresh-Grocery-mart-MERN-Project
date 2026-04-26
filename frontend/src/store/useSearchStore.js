import { create } from 'zustand';

const useSearchStore = create((set) => ({
    query: '',
    setQuery: (q) => set({ query: q }),
    clearQuery: () => set({ query: '' })
}));

export default useSearchStore;
