import React, { useMemo } from 'react'
import { HorizontalIconNav } from '../../components/iconNav/horizontalIconNav'
import { NavOrientation } from '../../components/iconNav/iconNav.types'
import { useCategoryMenu } from '../../shared/presentational/components/categoryMenu'
import {
	CatsNavItem,
	SubscribeNavItem,
	useChangeThemeNavItem,
} from '../../shared/presentational/components/navBarCommands'

export interface IClassicPageNavProps {
	suppressLabels: boolean,
	orientation: NavOrientation
}

export const ClassicPageNav: React.FunctionComponent<IClassicPageNavProps> = (props) => {
	const { suppressLabels, orientation } = props
	const changeThemeNavItem = useChangeThemeNavItem()
	const { categoryButtonProps, CategoryList, isOpen } = useCategoryMenu({})

	const navItems = useMemo(() => {
		const items = [categoryButtonProps, CatsNavItem, SubscribeNavItem, changeThemeNavItem]

		return items
	}, [categoryButtonProps, changeThemeNavItem, SubscribeNavItem])

	return (
		<>
			<HorizontalIconNav
				suppressLabels={suppressLabels}
				navItems={navItems}
				orientation={orientation}
				defaultActiveItemIndex={isOpen ? 0 : undefined}
			/>
			<div style={{ marginTop: '64px', position: 'absolute' }}>{CategoryList}</div>
		</>
	)
}
