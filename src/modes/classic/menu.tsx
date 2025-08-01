import React from 'react'
import { IMenuItem, IMenuProps } from './menu.types'
import { Colors } from '../../shared/helpers/constants'
import { aboutPath, catsPath, postsPath, redirectTo } from '../../shared/helpers/routes'

export const Menu: React.FunctionComponent<IMenuProps> = (props) => {
    const { rootStyle, show, items } =
        props

    const transformStyle: (index: number) => React.CSSProperties = (index: number) => ({
        opacity: show ? 1 : 0,
        transform: `translateY(${show ? '0' : '10px'})`,
        transition: `opacity 0.4s ease, transform 0.4s ease`,
        transitionDelay: `calc(${index + 1} * 200ms)`,
    })

    // the empty div on !showPages is to keep the space-between working
    return (
        <div style={{
            display: 'block',
            position: 'sticky',
            left: 0,
            right: 0,
            bottom: show ? 0 : undefined,
            height: show ? undefined : 0,
            top: 64,
            zIndex: show ? 2 : -99,
            marginBottom: show ? 'calc(-100vh - 256px)' : undefined,
        }}>
            <div>
                {items.map((item: IMenuItem, itemIndex: number): JSX.Element => {
                    return (
                        <MenuItem
                            {...item}
                            rootStyle={transformStyle(itemIndex)}
                            key={`menu-${itemIndex}`}
                            id={item.id}
                        />
                    )
                })}
                <div style={{ left: 0, right: 0, height: '100vh', backgroundColor: 'black', ...transformStyle(items.length) }}></div>
            </div>
        </div>
    )
}

export const MenuItem: React.FunctionComponent<IMenuItem> = (props) => {
    const { rootStyle, id, label, onClick } = props
    return <div
        key={id}
        aria-label={label}
        onClick={onClick}
        style={{
            color: Colors.LightSand,
            backgroundColor: 'black',
            position: 'relative',
            height: 64,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            ...rootStyle,
        }}>{label}</div>
}

export const menuItems: IMenuItem[] = [
    {
        id: 'about',
        label: 'About',
        onClick: () => redirectTo(aboutPath),
    },
    {
        id: 'new-posts',
        label: 'Newest Posts',
        onClick: () => window.open('https://ramblingafter.substack.com/', '_blank'),
    },
    {
        id: 'old-posts',
        label: 'Old Posts',
        onClick: () => redirectTo(postsPath),
    },
    {
        id: 'cats',
        label: 'Cats',
        onClick: () => redirectTo(catsPath),
    },
]
