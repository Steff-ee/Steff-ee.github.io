import React, { useContext, useMemo } from 'react'
import { HorizontalIconNav } from '../../components/iconNav/horizontalIconNav'
import { NavOrientation } from '../../components/iconNav/iconNav.types'
import { MediaContext, MediaSize } from '../../components/mediaProvider'
import { useCategoryMenu } from '../../shared/presentational/components/categoryMenu'
import {
	CatsNavItem,
	useChangeThemeNavItem,
} from '../../shared/presentational/components/navBarCommands'

export interface IClassicPageNavProps {
	orientation: NavOrientation
}

export const ClassicPageNav: React.FunctionComponent<IClassicPageNavProps> = (props) => {
	const { orientation } = props
	const changeThemeNavItem = useChangeThemeNavItem()
	const mediaSize = useContext(MediaContext)
	const { categoryButtonProps, CategoryList } = useCategoryMenu({})

	// todo: Why are INavItem and INavItemProps different?
	const navItems = useMemo(() => {
		const items = [categoryButtonProps, CatsNavItem]
		if (mediaSize !== MediaSize.Small) {
			items.push(changeThemeNavItem)
		}

		return items
	}, [categoryButtonProps, changeThemeNavItem, mediaSize])

	return (
		<>
			<HorizontalIconNav navItems={navItems} orientation={orientation} />
			<div style={{ marginTop: '64px' }}>{CategoryList}</div>
		</>
	)
}
