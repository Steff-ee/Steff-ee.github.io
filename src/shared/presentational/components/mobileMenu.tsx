import { useMemo } from 'react'
import { NavOrientation } from '../../../components/iconNav/iconNav.types'
import { useVerticalIconNav } from '../../../components/iconNav/verticalIconNav'
import {
	AboutNavItem,
	AllLinksNavItem,
	AllPostsNavItem,
	CatsNavItem,
	useChangeThemeNavItem,
} from './navBarCommands'

export interface IMobileMenuProps {
	skip?: boolean
}

export const useMobileMenu = (props: IMobileMenuProps) => {
	const { skip } = props
	const ChangeThemeNavItem = useChangeThemeNavItem()
	const navItems = useMemo(() => {
		return [AboutNavItem, AllPostsNavItem, AllLinksNavItem, CatsNavItem, ChangeThemeNavItem]
	}, [])

	return useVerticalIconNav({
		skip,
		navItems,
		showIconLabels: true,
		selectedId: '',
		orientation: NavOrientation.Left,
	})
}
