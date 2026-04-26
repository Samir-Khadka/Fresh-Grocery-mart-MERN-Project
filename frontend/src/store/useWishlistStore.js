import { create } from 'zustand';

const useWishlistStore = create((set) => ({
    wishlistItems: JSON.parse(localStorage.getItem('wishlistItems')) || [],

    addToWishlist: (product) => {
        set((state) => {
            const exists = state.wishlistItems.find((x) => x._id === product._id);
            if (exists) return state; // Don't add duplicates
            
            const newItems = [...state.wishlistItems, product];
            localStorage.setItem('wishlistItems', JSON.stringify(newItems));
            return { wishlistItems: newItems };
        });
    },

    removeFromWishlist: (id) => {
        set((state) => {
            const newItems = state.wishlistItems.filter((x) => x._id !== id);
            localStorage.setItem('wishlistItems', JSON.stringify(newItems));
            return { wishlistItems: newItems };
        });
    },

    toggleWishlist: (product) => {
        set((state) => {
            const exists = state.wishlistItems.find((x) => x._id === product._id);
            let newItems;
            if (exists) {
                newItems = state.wishlistItems.filter((x) => x._id !== product._id);
            } else {
                newItems = [...state.wishlistItems, product];
            }
            localStorage.setItem('wishlistItems', JSON.stringify(newItems));
            return { wishlistItems: newItems };
        });
    }
}));

export default useWishlistStore;
