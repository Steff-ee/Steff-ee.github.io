import React from 'react'

export interface IMenuProps {
    rootStyle?: React.CSSProperties
    items: IMenuItem[]
}

export interface IMenuItem {
    id: string,
    label: string,
}
