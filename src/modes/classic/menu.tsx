import React from 'react'
import { IMenuItem, IMenuProps } from './menu.types'
import { Colors } from '../../shared/helpers/constants'

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
    const { id, label } = props
    return <div style={{
        color: Colors.LightSand,
        backgroundColor: 'black',
        position: 'relative',
        height: 64,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}>{label}</div>
}

export const menuItems: IMenuItem[] = [
    {
        id: 'about',
        label: 'About'
    },
    {
        id: 'new-posts',
        label: 'Newest Posts'
    },
    {
        id: 'old-posts',
        label: 'Old Posts'
    },
    {
        id: 'cats',
        label: 'Cats'
    },
]
