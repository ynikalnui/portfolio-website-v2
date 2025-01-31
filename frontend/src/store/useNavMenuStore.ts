import { create } from 'zustand'

type TNavMenuStore = {
    isOpened: boolean; 
    toggleMenu: () => void; 
}

const useNavMenuStore = create<TNavMenuStore>((set) => ({
    isOpened: false,
    toggleMenu: () => set(state => ({ isOpened: !state.isOpened }))
}));

export default useNavMenuStore;
