import React from 'react'
import { IPageTemplateBackgroundsProps } from '../../modes/classic/pageTemplate.types'
import { Seasons } from '../../modes/seasons/seasonsHelpers'
import {
	autumnBackgrounds,
	classicBackgrounds,
	IPicture,
	springBackgrounds,
	summerBackgrounds,
	winterBackgrounds,
} from '../../shared/helpers/artists'
import { PivotRoutes } from '../../shared/posts/post.types'
import { makeTitleMap } from '../../shared/presentational/hooks/usePivots.helpers'
import { IUsePivotProps } from '../../shared/presentational/hooks/usePivots.types'
import { ConjectureLinks } from '../conjectures/conjectureLinks'
import { AboutPage } from './about'
import { HomePivots, homePivots, homePivotTitlePhrases } from './home.types'
import { Resume } from './resume'

// (TODO)
// const { setSeason } = useContext(SeasonsContext)
// useEffect(() => {
// 	setSeason(getNextSeason(0))
// }, [])

const titleMap = makeTitleMap(homePivotTitlePhrases)

export const getHomeUsePivotsProps = (): IUsePivotProps => {
	return {
		titlePhrases: homePivotTitlePhrases,
		defaultTitle: HomePivots.Posts,
		allTitles: homePivots,
		titleMap,
	}
}

export const showPostsListForHome = (pivot: PivotRoutes | undefined): boolean => {
	return pivot === HomePivots.Posts
}

export const getHomePageContent = (
	selectedPivotTitle: PivotRoutes | undefined
): JSX.Element | undefined => {
	switch (selectedPivotTitle) {
		case HomePivots.About:
			return <AboutPage />

		case HomePivots.Resume:
			return <Resume />

		case HomePivots.Links:
			return <ConjectureLinks />
	}

	return undefined
}

export const getHomePageBackground = (
	season: Seasons
): Omit<IPageTemplateBackgroundsProps, 'backgroundStyle'> => {
	let headerPicture: IPicture
	switch (season) {
		case Seasons.Winter:
			headerPicture = winterBackgrounds.home
			break
		case Seasons.Spring:
			headerPicture = springBackgrounds.home
			break
		case Seasons.Summer:
			headerPicture = summerBackgrounds.home
			break
		case Seasons.Autumn:
			headerPicture = autumnBackgrounds.home
			break
		case Seasons.None:
		default:
			headerPicture = classicBackgrounds.home
	}

	const { src: headerBackgroundImage, ...artistProps } = headerPicture

	return {
		...artistProps,
		headerBackgroundImage,
	}
}
