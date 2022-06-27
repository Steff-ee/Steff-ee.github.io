import React, { useContext, useMemo } from 'react'
import { useLocation } from 'react-router'
import { HorizontalIconNav } from '../../components/iconNav/horizontalIconNav'
import { NavOrientation } from '../../components/iconNav/iconNav.types'
import { MediaContext, MediaSize } from '../../components/mediaProvider'
import { getPrimaryRoute } from '../../shared/helpers/routes'
import {
	CatsNavItem,
	useCategoryNavItems,
	useChangeThemeNavItem,
} from '../../shared/presentational/components/navBarCommands'

export interface IClassicPageNavProps {
	orientation: NavOrientation
}

export const ClassicPageNav: React.FunctionComponent<IClassicPageNavProps> = (props) => {
	const { orientation } = props
	const location = useLocation()
	const categoryNavItems = useCategoryNavItems()
	const changeThemeNavItem = useChangeThemeNavItem()
	const mediaSize = useContext(MediaContext)

	const navItems = useMemo(() => {
		const items = [...categoryNavItems]
		items.push(CatsNavItem)
		if (mediaSize !== MediaSize.Small) {
			items.push(changeThemeNavItem)
		}

		return items
	}, [categoryNavItems, changeThemeNavItem, mediaSize])

	return (
		<HorizontalIconNav
			selectedId={getPrimaryRoute(location.pathname)}
			navItems={navItems}
			orientation={orientation}
		/>
	)
}
