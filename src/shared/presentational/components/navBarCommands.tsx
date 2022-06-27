import {
	faAngleDoubleLeft,
	faAngleDoubleRight,
	faAngleLeft,
	faAngleRight,
	faChessKnight,
	faChevronUp,
	faFeatherAlt,
	faGlobeAmericas,
	faPaw,
	faPoll,
	faSyncAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { INavItem } from '../../../components/iconNav/iconNav.types'
import { SeasonsContext } from '../../../modes/seasons/seasons'
import { Seasons } from '../../../modes/seasons/seasonsHelpers'
import { catsPath, catsTitle } from '../../../pages/cats/cats.types'
import { conjectureTitle } from '../../../pages/conjectures/conjectures.types'
import { gamesTitle } from '../../../pages/games/games.types'
import { homeTitle } from '../../../pages/home/home.types'
import { storiesTitle } from '../../../pages/stories/stories.types'
import {
	getConjecturePath,
	getGamesPath,
	getHomePath,
	getStoriesPath,
} from '../../helpers/navigation'
import { PageRoutes, redirectTo, RouteContext, usePageParams } from '../../helpers/routes'
import { useIsTest } from '../../helpers/url'
import { getScrollPosition } from '../../helpers/useScroll'
import { OpenPostsContext } from '../../posts/openPosts'

export const commonIconProps = { size: '2x' as const, fixedWidth: true }

const getNextSeason = (season: Seasons, isTest: boolean): Seasons => {
	switch (season) {
		case Seasons.None:
			return Seasons.Winter
		case Seasons.Winter:
			return Seasons.Spring
		case Seasons.Spring:
			if (isTest) {
				// (TODO) enable other seasons
				return Seasons.Summer
			}

			return Seasons.None
		case Seasons.Summer:
			return Seasons.Autumn
		case Seasons.Autumn:
		default:
			return Seasons.None
	}
}

export const useCategoryNavItems = (): INavItem[] => {
	const { prevPivots } = useContext(RouteContext)
	const { getLastOpenPost } = useContext(OpenPostsContext)
	const { pivot: currentPivot } = usePageParams()

	const homePath = getHomePath(getLastOpenPost, prevPivots, currentPivot)
	const storiesPath = getStoriesPath(getLastOpenPost, prevPivots, currentPivot)
	const gamesPath = getGamesPath(getLastOpenPost, prevPivots, currentPivot)
	const conjecturePath = getConjecturePath(getLastOpenPost, prevPivots, currentPivot)

	const navLinks: INavItem[] = [
		{
			icon: <FontAwesomeIcon icon={faGlobeAmericas} {...commonIconProps} />,
			id: PageRoutes.Home,
			label: homeTitle,
			onClick: (): void => redirectTo(homePath),
		},
		{
			icon: <FontAwesomeIcon icon={faFeatherAlt} {...commonIconProps} />,
			id: PageRoutes.Stories,
			label: storiesTitle,
			onClick: (): void => redirectTo(storiesPath),
		},
		{
			icon: <FontAwesomeIcon icon={faChessKnight} {...commonIconProps} />,
			id: PageRoutes.Games,
			label: gamesTitle,
			onClick: (): void => redirectTo(gamesPath),
		},
		{
			icon: <FontAwesomeIcon icon={faPoll} {...commonIconProps} />,
			id: PageRoutes.Conjecture,
			label: conjectureTitle,
			onClick: (): void => redirectTo(conjecturePath),
		},
	]

	return navLinks
}

export const useChangeThemeNavItem = (): INavItem => {
	const { season, setSeason } = useContext(SeasonsContext)
	const isTest = useIsTest()

	return {
		icon: <FontAwesomeIcon icon={faSyncAlt} {...commonIconProps} size={'lg' as const} />,
		id: undefined,
		label: 'change theme',
		onClick: (): void => setSeason(getNextSeason(season, isTest)),
	}
}

export const CatsNavItem: INavItem = {
	icon: <FontAwesomeIcon icon={faPaw} {...commonIconProps} />,
	id: PageRoutes.Cats,
	label: catsTitle,
	onClick: (): void => redirectTo(catsPath),
}

const postCategoryToString = (postCategory: string): string => {
	if (postCategory === 'home') {
		return ''
	}

	return `${postCategory} `
}

export const useBackCommand = (
	onClick: (() => void) | undefined,
	postCategory: string
): INavItem => {
	return {
		icon: <FontAwesomeIcon icon={faAngleLeft} {...commonIconProps} />,
		id: 'BackCommand',
		label: `Previous ${postCategoryToString(postCategory)} post`,
		onClick,
		disabled: onClick === undefined,
	}
}

export const useNextCommand = (
	onClick: (() => void) | undefined,
	postCategory: string
): INavItem => {
	return {
		icon: <FontAwesomeIcon icon={faAngleRight} {...commonIconProps} />,
		id: 'NextCommand',
		label: `Next ${postCategoryToString(postCategory)} post`,
		onClick,
		disabled: onClick === undefined,
	}
}

export const useFirstCommand = (
	onClick: (() => void) | undefined,
	postCategory: string
): INavItem => {
	return {
		icon: <FontAwesomeIcon icon={faAngleDoubleLeft} {...commonIconProps} />,
		id: 'FirstCommand',
		label: `First ${postCategoryToString(postCategory)} post`,
		onClick,
		disabled: onClick === undefined,
	}
}

export const useLatestCommand = (
	onClick: (() => void) | undefined,
	postCategory: string
): INavItem => {
	return {
		icon: <FontAwesomeIcon icon={faAngleDoubleRight} {...commonIconProps} />,
		id: 'LatestCommand',
		label: `Latest ${postCategoryToString(postCategory)} post`,
		onClick,
		disabled: onClick === undefined,
	}
}

export const useReturnToTopCommand = (
	scrollRef: React.RefObject<HTMLDivElement>,
	positionRef: React.RefObject<HTMLDivElement>
): INavItem => {
	const [enabled, setEnabled] = useState(false)

	useEffect(() => {
		if (!enabled && !!positionRef.current && getScrollPosition(positionRef).y < 0) {
			setEnabled(true)
		}
	})

	return {
		icon: <FontAwesomeIcon icon={faChevronUp} {...commonIconProps} />,
		id: 'ReturnToTopCommand',
		label: `Return to top`,
		onClick: () => {
			setEnabled(false)
			scrollRef.current?.scrollTo?.(0, 0)
		},
		disabled: !enabled,
	}
}
