import { FaAngleDoubleLeft } from '@react-icons/all-files/fa/FaAngleDoubleLeft'
import { FaAngleDoubleRight } from '@react-icons/all-files/fa/FaAngleDoubleRight'
import { FaAngleLeft } from '@react-icons/all-files/fa/FaAngleLeft'
import { FaAngleRight } from '@react-icons/all-files/fa/FaAngleRight'
import { FaChessKnight } from '@react-icons/all-files/fa/FaChessKnight'
import { FaChevronUp } from '@react-icons/all-files/fa/FaChevronUp'
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope'
import { FaFeatherAlt } from '@react-icons/all-files/fa/FaFeatherAlt'
import { FaGlobe } from '@react-icons/all-files/fa/FaGlobe'
import { FaGlobeAmericas } from '@react-icons/all-files/fa/FaGlobeAmericas'
import { FaHome } from '@react-icons/all-files/fa/FaHome'
import { FaList } from '@react-icons/all-files/fa/FaList'
import { FaPaw } from '@react-icons/all-files/fa/FaPaw'
import { FaPoll } from '@react-icons/all-files/fa/FaPoll'
import { FaSyncAlt } from '@react-icons/all-files/fa/FaSyncAlt'
import React, { useContext, useEffect, useState } from 'react'
import { INavItem } from '../../../components/iconNav/iconNav.types'
import { SeasonsContext } from '../../../modes/seasons/seasons'
import { Seasons } from '../../../modes/seasons/seasonsHelpers'
import { catsTitle } from '../../../pages/cats/cats.types'
import { conjectureTitle } from '../../../pages/conjectures/conjectures.types'
import { gamesTitle } from '../../../pages/games/games.types'
import { storiesTitle } from '../../../pages/stories/stories.types'
import {
	getConjecturePath,
	getGamesPath,
	getHomePath,
	getStoriesPath,
} from '../../helpers/navigation'
import {
	aboutPath,
	catsPath,
	linksPath,
	PageRoutes,
	postsPath,
	redirectTo,
	RouteContext,
	usePageParams,
} from '../../helpers/routes'
import { useIsTest } from '../../helpers/url'
import { getScrollPosition } from '../../helpers/useScroll'
import { OpenPostsContext } from '../../posts/openPosts'

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
			icon: <FaGlobeAmericas />,
			id: PageRoutes.Home,
			label: 'all',
			onClick: (): void => redirectTo(homePath),
		},
		{
			icon: <FaFeatherAlt />,
			id: PageRoutes.Stories,
			label: storiesTitle,
			onClick: (): void => redirectTo(storiesPath),
		},
		{
			icon: <FaChessKnight />,
			id: PageRoutes.Games,
			label: gamesTitle,
			onClick: (): void => redirectTo(gamesPath),
		},
		{
			icon: <FaPoll />,
			id: PageRoutes.Conjecture,
			label: conjectureTitle,
			onClick: (): void => redirectTo(conjecturePath),
		},
	]

	return navLinks
}

export const useChangeThemeNavItem = (): INavItem => {
	const { setSeason } = useContext(SeasonsContext)
	const isTest = useIsTest()

	return {
		icon: <FaSyncAlt size={'28px'} />,
		id: undefined,
		label: 'change theme',
		onClick: (): void => setSeason((season) => getNextSeason(season, isTest)),
	}
}

export const CatsNavItem: INavItem = {
	icon: <FaPaw />,
	id: PageRoutes.Cats,
	label: catsTitle,
	onClick: (): void => redirectTo(catsPath),
}

export const AboutNavItem: INavItem = {
	icon: <FaHome />,
	id: 'all-about',
	label: 'about',
	onClick: (): void => redirectTo(aboutPath),
}

export const AllPostsNavItem: INavItem = {
	icon: <FaList />,
	id: 'all-posts',
	label: 'posts',
	onClick: (): void => redirectTo(postsPath),
}

export const AllLinksNavItem: INavItem = {
	icon: <FaGlobe />,
	id: 'all-links',
	label: 'links',
	onClick: (): void => redirectTo(linksPath),
}

export const SubscribeNavItem: INavItem = {
	icon: <FaEnvelope />,
	id: 'subscribe',
	label: 'subscribe',
	onClick: () => window.open('https://ramblingafter.substack.com/', '_blank'),
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
		icon: <FaAngleLeft />,
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
		icon: <FaAngleRight />,
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
		icon: <FaAngleDoubleLeft />,
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
		icon: <FaAngleDoubleRight />,
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
		icon: <FaChevronUp />,
		id: 'ReturnToTopCommand',
		label: `Return to top`,
		onClick: () => {
			setEnabled(false)
			scrollRef.current?.scrollTo?.(0, 0)
		},
		disabled: !enabled,
	}
}
