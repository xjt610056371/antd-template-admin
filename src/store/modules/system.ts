import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import globalSettings from '@/settings.ts'
import type { ThemeConfig } from 'antd'

interface TagViewType {
    path: string
    title: string
    notDelTag?: boolean
}

interface IStore {
    themeOption: ThemeConfig['token']
    width: number
    appTitle: string
    hasHeader: boolean
    hasLogo: boolean
    showHeader: boolean
    gbLoadPage: boolean
    headerFixed: boolean
    enableDynamicTitle: boolean
    changeLoadPage: (status?: boolean) => void
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
        (set) => ({
            themeOption: {
                colorPrimary: '#00a7e6'
            },
            width: 0,
            showHeader: true,
            collapsMenu: false,
            gbLoadPage: false,
            tagView: [{ path: '/dashboard', title: '主页', notDelTag: true }],
            appTitle: globalSettings.app.appTitle,
            hasLogo: globalSettings.header.hasLogo,
            headerFixed: globalSettings.header.fixed,
            hasHeader: globalSettings.header.hasHeader,
            hasTagView: globalSettings.header.hasTagView,
            enableDynamicTitle: globalSettings.app.enableDynamicTitle,

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
            changeLoadPage: (status) =>
                set((state) => {
                    if (status !== void 0) {
                        return { gbLoadPage: status }
                    }
                    return { gbLoadPage: !state.gbLoadPage }
                })
        }),
        {
            name: 'sysSeting'
        }
    )
)

export default useSystemStore
