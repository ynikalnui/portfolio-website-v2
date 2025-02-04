import { create } from 'zustand'

type TUseProjectModalStore = {
  isOpened: boolean
  documentId: string | null
  toggleProjectModal: () => void
  setDocumentId: (id: string) => void
}

const useProjectModalStore = create<TUseProjectModalStore>((set) => ({
  isOpened: false,
  documentId: null,
  toggleProjectModal: () => set((state) => ({ isOpened: !state.isOpened })),
  setDocumentId: (id) => set({ documentId: id })
}))

export default useProjectModalStore
