import React from 'react'

export interface IMenuProps {
    show: boolean,
    rootStyle?: React.CSSProperties
    items: IMenuItem[]
}

export interface IMenuItem {
    rootStyle?: React.CSSProperties
    id: string,
    label: string,
    onClick: () => void,
}
