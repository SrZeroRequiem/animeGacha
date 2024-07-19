import {create} from 'zustand';
import {User} from '../types';

interface UserState{
    user: User;
    auth: boolean;
    login: (user: User) => void;
    register: (user: User) => void;
    logout: () => void;
}

async function login(user: User){
    await fetch('https://gacha-api.vercel.app/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
}
async function register(user: User){
    await fetch('https://gacha-api.vercel.app/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
}

export const useUserStore = create<UserState>((set) => ({
    user: {} as User,
    auth: false,
    login: async (user) => {
        await login(user);
        set({user});
        set({auth: true});
    },
    register: async (user) => {
        await register(user);
        set({user});
        set({auth: true});
    },
    logout: () => {set({user: {} as User}); set({auth: false})}
}));