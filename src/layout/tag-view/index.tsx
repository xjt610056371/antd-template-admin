import styles from './index.module.scss'
import { RouteItem } from '@/router'
import useSystemStore from '@/store/modules/system.ts'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import classNames from 'classnames'
import { theme, Tag } from 'antd'

interface Props {
    route: RouteItem
}

export default function Tags(props: Props) {
    const systemStore = useSystemStore()
    const location = useLocation()
    const navigate = useNavigate()

    const { token: tColor } = theme.useToken()

    useEffect(() => {
        if (props.route.meta?.name) {
            systemStore.setTagView({
                path: location.pathname,
                title: props.route.meta?.name,
                notDelTag: props.route.meta.notDelTag
            })
        }
    }, [location.pathname])

    // 处理移除标签
    const handleRemoveTag = (path: string) => {
        systemStore.removeTagView(path)
        if (systemStore.tagView.length <= 1) {
            navigate('/')
        } else if (location.pathname === path) {
            const tagView = systemStore.tagView.filter((_) => _.path !== path)
            navigate(tagView[0].path)
        }
    }

    const handleGoToPage = (path: string) => {
        navigate(path)
    }

    const baseStyle = { borderColor: tColor.colorBorder, color: tColor.colorTextLabel }

    return (
        <div className={styles.container} style={{ borderColor: tColor.colorBorder }}>
            {systemStore.tagView.map((tag) => (
                <Tag
                    className={classNames([styles.tag, location.pathname === tag.path ? styles.active : ''])}
                    style={
                        location.pathname === tag.path
                            ? {
                                  ...baseStyle,
                                  backgroundColor: tColor.colorBgBase,
                                  borderBottom: `1px solid ${tColor.colorBgBase}`
                              }
                            : baseStyle
                    }
                    key={tag.path}
                    onClick={() => handleGoToPage(tag.path)}
                    closable={!tag.notDelTag}
                    onClose={() => handleRemoveTag(tag.path)}
                >
                    {tag.title}
                </Tag>
                // <span
                //     className={classNames([styles.tag, location.pathname === tag.path ? styles.active : ''])}
                //     style={
                //         location.pathname === tag.path
                //             ? {
                //                   borderColor: tColor.colorBorder
                //               }
                //             : {
                //                   color: tColor.colorTextLabel,
                //                   borderColor: tColor.colorBorder
                //               }
                //     }
                //     key={tag.path}
                //     onClick={() => handleGoToPage(tag.path)}
                // >
                //     {tag.title}
                //     {!tag.notDelTag && (
                //         <SvgIcon
                //             name="ant-design:close-outlined"
                //             onClick={(ev) => {
                //                 ev.stopPropagation()
                //                 handleRemoveTag(tag.path)
                //             }}
                //         />
                //     )}
                // </span>
            ))}
        </div>
    )
}
