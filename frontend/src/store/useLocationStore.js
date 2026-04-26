import { create } from 'zustand';

const useLocationStore = create((set) => ({
    postcode: localStorage.getItem('postcode') || null,
    isValidated: !!localStorage.getItem('postcode'),
    isOpen: false, // Don't open automatically

    setPostcode: (code) => {
        set({ postcode: code, isValidated: true, isOpen: false });
        localStorage.setItem('postcode', code);
    },

    toggleModal: (val) => set((state) => ({ 
        isOpen: typeof val === 'boolean' ? val : !state.isOpen 
    })),

    clearLocation: () => {
        set({ postcode: null, isValidated: false, isOpen: true });
        localStorage.removeItem('postcode');
    }
}));

export default useLocationStore;
