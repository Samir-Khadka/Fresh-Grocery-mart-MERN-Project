import { describe, it, expect, beforeEach } from 'vitest';
import useCartStore from '../store/useCartStore';

describe('useCartStore', () => {
  beforeEach(() => {
    // Clear local storage and reset store state before each test
    localStorage.clear();
    useCartStore.setState({ cartItems: [] });
  });

  it('should initialize with an empty cart', () => {
    const { cartItems } = useCartStore.getState();
    expect(cartItems).toEqual([]);
  });

  it('should add an item to the cart', () => {
    const mockProduct = {
      _id: 'p1',
      name: 'Apple',
      image: 'apple.jpg',
      price: 1.5,
      stock: 10
    };

    useCartStore.getState().addItem(mockProduct, 2);

    const { cartItems } = useCartStore.getState();
    expect(cartItems).toHaveLength(1);
    expect(cartItems[0]).toEqual({
      product: 'p1',
      name: 'Apple',
      image: 'apple.jpg',
      price: 1.5,
      stock: 10,
      qty: 2
    });
    expect(JSON.parse(localStorage.getItem('cartItems'))).toHaveLength(1);
  });

  it('should remove an item from the cart', () => {
    const mockProduct = {
      _id: 'p1',
      name: 'Apple',
      image: 'apple.jpg',
      price: 1.5,
      stock: 10
    };

    useCartStore.getState().addItem(mockProduct, 2);
    useCartStore.getState().removeItem('p1');

    const { cartItems } = useCartStore.getState();
    expect(cartItems).toHaveLength(0);
    expect(JSON.parse(localStorage.getItem('cartItems'))).toHaveLength(0);
  });

  it('should clear the cart', () => {
    const mockProduct = {
      _id: 'p1',
      name: 'Apple',
      image: 'apple.jpg',
      price: 1.5,
      stock: 10
    };

    useCartStore.getState().addItem(mockProduct, 2);
    useCartStore.getState().clearCart();

    const { cartItems } = useCartStore.getState();
    expect(cartItems).toHaveLength(0);
    expect(localStorage.getItem('cartItems')).toBeNull();
  });
});
