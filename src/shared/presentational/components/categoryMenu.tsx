import { useLocation } from 'react-router'
import { NavOrientation } from '../../../components/iconNav/iconNav.types'
import { useVerticalIconNav } from '../../../components/iconNav/verticalIconNav'
import { getPrimaryRoute } from '../../helpers/routes'
import { useCategoryNavItems } from './navBarCommands'

export interface ICategoryMenuProps {
	skip?: boolean
}

export const useCategoryMenu = (props: ICategoryMenuProps) => {
	const { skip } = props
	const navItems = useCategoryNavItems()
	const location = useLocation()
	const selectedId = getPrimaryRoute(location.pathname)
	const selectedNavItem = navItems.find((item) => item.id === selectedId) ?? navItems[0]
	const { onClick, ...selectedNavItemProps } = selectedNavItem
	const inputMenuButtonProps = {
		...selectedNavItemProps,
		label: 'choose category',
		tabIndex: 1,
	}

	const { menuButtonProps, MenuList, isOpen } = useVerticalIconNav({
		skip,
		navItems,
		showIconLabels: true,
		selectedId,
		orientation: NavOrientation.Left,
		menuButtonProps: inputMenuButtonProps,
		tabIndex: 2,
	})

	return { categoryButtonProps: menuButtonProps, CategoryList: MenuList, isOpen }
}
