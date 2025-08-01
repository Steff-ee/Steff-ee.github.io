import React from 'react'
import { IMenuItem, IMenuProps } from './menu.types'
import { Colors } from '../../shared/helpers/constants'
import { aboutPath, catsPath, postsPath, redirectTo } from '../../shared/helpers/routes'

export const Menu: React.FunctionComponent<IMenuProps> = (props) => {
    const { rootStyle, items } =
        props

    // the empty div on !showPages is to keep the space-between working
    return (
        <div style={{
            display: 'block',
            position: 'sticky',
            left: 0,
            right: 0,
            bottom: 0,
            top: 64,
            zIndex: 2,
        }}>
            {items.map((item: IMenuItem, itemIndex: number): JSX.Element => {
                return (
                    <MenuItem
                        {...item}
                        key={`menu-${itemIndex}`}
                        id={item.id}
                    />
                )
            })}
            <div style={{ left: 0, right: 0, height: '100vh', backgroundColor: 'black' }}></div>
        </div>
    )
}

export const MenuItem: React.FunctionComponent<IMenuItem> = (props) => {
    const { id, label, onClick } = props
    return <div
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
