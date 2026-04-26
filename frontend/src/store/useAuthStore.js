import { create } from 'zustand';
import axios from 'axios';

const useAuthStore = create((set) => ({
    user: JSON.parse(localStorage.getItem('userInfo')) || null,
    loading: false,
    error: null,

    login: async (email, password) => {
        set({ loading: true, error: null });
        try {
            const { data } = await axios.post('/api/users/login', { email, password });
            set({ user: data, loading: false });
            localStorage.setItem('userInfo', JSON.stringify(data));
        } catch (error) {
            set({ error: error.response?.data?.message || error.message, loading: false });
        }
    },

    register: async (name, email, password, role = 'user', extraData = {}) => {
        set({ loading: true, error: null });
        try {
            const { data } = await axios.post('/api/users', { name, email, password, role, ...extraData });
            set({ user: data, loading: false });
            localStorage.setItem('userInfo', JSON.stringify(data));
        } catch (error) {
            set({ error: error.response?.data?.message || error.message, loading: false });
        }
    },

    logout: () => {
        set({ user: null });
        localStorage.removeItem('userInfo');
        localStorage.removeItem('cartItems'); // Clear the trolley on logout
        window.location.reload(); // Force a reload to reset all store states
    },

    updateUserInfo: (userData) => {
        set({ user: userData });
        localStorage.setItem('userInfo', JSON.stringify(userData));
    }
}));

export default useAuthStore;
