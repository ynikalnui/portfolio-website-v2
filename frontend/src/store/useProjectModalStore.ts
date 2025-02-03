import { create } from 'zustand'

type TUseProjectModalStore = {
  isOpened: boolean
  toggleProjectModal: () => void
}

const useProjectModalStore = create<TUseProjectModalStore>((set) => ({
  isOpened: false,
  toggleProjectModal: () => set((state) => ({ isOpened: !state.isOpened }))
}))

export default useProjectModalStore
