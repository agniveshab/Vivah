
import { create } from 'zustand';

interface User {
    id: string;
    name: string;
    email: string;
    role: 'USER' | 'VENDOR';
}

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    login: (email: string, role: 'USER' | 'VENDOR') => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isAuthenticated: false,
    login: (email, role) => set({
        user: { id: '1', name: 'Aditi Sharma', email, role },
        isAuthenticated: true
    }),
    logout: () => set({ user: null, isAuthenticated: false }),
}));
