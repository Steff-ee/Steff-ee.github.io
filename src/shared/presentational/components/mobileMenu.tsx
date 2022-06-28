import React, { useMemo } from 'react'
import { NavOrientation } from '../../../components/iconNav/iconNav.types'
import { VerticalIconNav } from '../../../components/iconNav/verticalIconNav'
import { AboutNavItem, AllLinksNavItem, AllPostsNavItem, CatsNavItem } from './navBarCommands'

export interface IMobileMenuProps {}

export const MobileMenu: React.FunctionComponent<IMobileMenuProps> = () => {
	const navItems = useMemo(() => {
		return [AboutNavItem, AllPostsNavItem, AllLinksNavItem, CatsNavItem]
	}, [])

	return (
		<VerticalIconNav
			navItems={navItems}
			showIconLabels={true}
			selectedId={''}
			orientation={NavOrientation.Left}
		/>
	)
}
