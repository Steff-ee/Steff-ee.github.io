import React, { useMemo } from 'react'
import { useLocation } from 'react-router'
import { HorizontalIconNav } from '../../components/iconNav/horizontalIconNav'
import { NavOrientation } from '../../components/iconNav/iconNav.types'
import { getPrimaryRoute } from '../../shared/helpers/routes'
import {
	useBackCommand,
	useFirstCommand,
	useLatestCommand,
	useMenuCommand,
	useNextCommand,
	useReturnToTopCommand,
} from '../../shared/presentational/components/navBarCommands'

export interface IClassicRightNavProps {
	scrollRef: React.RefObject<HTMLDivElement>
	positionRef: React.RefObject<HTMLDivElement>
	orientation: NavOrientation
	firstClick?: () => void
	backClick?: () => void
	nextClick?: () => void
	latestClick?: () => void
}

export const ClassicPostsNav: React.FunctionComponent<IClassicRightNavProps> = (props) => {
	const { firstClick, backClick, nextClick, latestClick, scrollRef, positionRef, orientation } =
		props
	const location = useLocation()
	const primaryRoute = getPrimaryRoute(location.pathname)
	console.log('yo primaryRoute', primaryRoute)
	const backCommand = useBackCommand(backClick, primaryRoute)
	const nextCommand = useNextCommand(nextClick, primaryRoute)
	const menuCommand = useMenuCommand()
	const firstCommand = useFirstCommand(firstClick, primaryRoute)
	const latestCommand = useLatestCommand(latestClick, primaryRoute)

	const navItems = useMemo(() => {
		return [firstCommand, backCommand, menuCommand, nextCommand, latestCommand]
	}, [firstCommand, backCommand, nextCommand, latestCommand])

	return (
		<HorizontalIconNav
			selectedId={primaryRoute}
			navItems={navItems}
			orientation={orientation}
		/>
	)
}
