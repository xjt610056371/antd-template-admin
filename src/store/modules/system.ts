import { create } from 'zustand'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'

interface TagViewType {
    path: string
    title: string
}

interface IStore {
    width: number
    hasHeader: boolean
    showHeader: boolean
    gbLoadPage: boolean
    changeLoadPage: () => void
    tagView: TagViewType[]
    hasTagView: boolean
    setWidth: (width: number) => void
    collapsMenu: boolean
    toggleCollapsMenu: () => void
    setTagView: (tag: TagViewType) => void
    removeTagView: (path: string) => void
}

const useSystemStore = create<IStore>()(
    devtools(
        persist(
            (set) => ({
                width: 0,
                hasHeader: true,
                showHeader: true,
                collapsMenu: false,
                gbLoadPage: false,
                tagView: [],
                hasTagView: true,

                setWidth: (width) =>
                    set(() => {
                        let collapsMenu = false,
                            showHeader = true
                        if (width <= 500) {
                            showHeader = false
                            collapsMenu = true
                        } else if (width <= 1000) {
                            collapsMenu = true
                        }
                        return { width, collapsMenu, showHeader }
                    }),
                toggleCollapsMenu: () => set((state) => ({ collapsMenu: !state.collapsMenu })),
                setTagView: (tag) =>
                    set((state) => {
                        if (state.tagView.some((_) => _.path === tag.path)) {
                            return {}
                        }
                        return {
                            tagView: state.tagView.concat([tag])
                        }
                    }),
                removeTagView: (path) =>
                    set((state) => {
                        if (path) {
                            return {
                                tagView: state.tagView.filter((_) => _.path !== path)
                            }
                        }
                        return {}
                    }),
                changeLoadPage: () => set((state) => ({ gbLoadPage: !state.gbLoadPage }))
            }),
            {
                name: 'sysSeting',
                storage: createJSONStorage(() => localStorage)
            }
        ),
        {
            name: 'sysSeting'
        }
    )
)

export default useSystemStore
