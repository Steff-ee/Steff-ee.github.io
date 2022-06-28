import { useMemo } from 'react'
import { NavOrientation } from '../../../components/iconNav/iconNav.types'
import { useVerticalIconNav } from '../../../components/iconNav/verticalIconNav'
import { AboutNavItem, AllLinksNavItem, AllPostsNavItem, CatsNavItem } from './navBarCommands'

export interface IMobileMenuProps {
	skip?: boolean
}

export const useMobileMenu = (props: IMobileMenuProps) => {
	const { skip } = props
	const navItems = useMemo(() => {
		return [AboutNavItem, AllPostsNavItem, AllLinksNavItem, CatsNavItem]
	}, [])

	return useVerticalIconNav({
		skip,
		navItems,
		showIconLabels: true,
		selectedId: '',
		orientation: NavOrientation.Left,
	})
}
