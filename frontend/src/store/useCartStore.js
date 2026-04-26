import { create } from 'zustand';

const useCartStore = create((set, get) => ({
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
    
    addItem: (product, qty) => {
        const item = {
            product: product._id,
            name: product.name,
            image: product.image,
            price: product.price,
            stock: product.stock,
            qty
        };

        const existItem = get().cartItems.find((x) => x.product === item.product);

        if (existItem) {
            const newItems = get().cartItems.map((x) =>
                x.product === existItem.product ? item : x
            );
            set({ cartItems: newItems });
        } else {
            set({ cartItems: [...get().cartItems, item] });
        }
        localStorage.setItem('cartItems', JSON.stringify(get().cartItems));
    },

    removeItem: (id) => {
        const newItems = get().cartItems.filter((x) => x.product !== id);
        set({ cartItems: newItems });
        localStorage.setItem('cartItems', JSON.stringify(newItems));
    },

    clearCart: () => {
        set({ cartItems: [] });
        localStorage.removeItem('cartItems');
    }
}));

export default useCartStore;
