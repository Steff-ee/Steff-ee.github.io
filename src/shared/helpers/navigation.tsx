import { ConjecturePivots } from '../../pages/conjectures/conjectures.types'
import { GamePivots } from '../../pages/games/games.types'
import { HomePivots } from '../../pages/home/home.types'
import { StoryPivots } from '../../pages/stories/stories.types'
import { IOpenPostsContext } from '../posts/openPosts'
import { PivotRoutes } from '../posts/post.types'
import { doesItemExistInIterable } from './genericHelpers'
import { IRouteContext, PageRoutes } from './routes'

export const getPostsPath = (): string => {
	return `/#/${PageRoutes.Posts}`
}

export const getHomePath = (
	getLastOpenPost: IOpenPostsContext['getLastOpenPost'],
	prevPivots?: IRouteContext['prevPivots'],
	pivot?: PivotRoutes
): string => {
	if (!doesItemExistInIterable(pivot, HomePivots)) {
		pivot = undefined
	}

	// (TODO) handle default pivots and posts elsewhere in a common area
	const homePivot = pivot || (prevPivots && (prevPivots[PageRoutes.Home] as HomePivots))

	return `/#/${PageRoutes.Home}/${homePivot}`

	// if (!showPostsListForHome(homePivot)) {
	// 	return `/#/${PageRoutes.Home}/${homePivot}`
	// }

	// const currentPost =
	// 	getLastOpenPost(PageRoutes.Home, homePivot) || getLatestPost(PageRoutes.Home, homePivot)

	// return `/#/${PageRoutes.Home}/${homePivot}/${currentPost.id}`
}

export const getStoriesPath = (
	getLastOpenPost: IOpenPostsContext['getLastOpenPost'],
	prevPivots?: IRouteContext['prevPivots'],
	pivot?: PivotRoutes
): string => {
	if (!doesItemExistInIterable(pivot, StoryPivots)) {
		pivot = undefined
	}

	const storiesPivot = pivot || (prevPivots && (prevPivots[PageRoutes.Stories] as StoryPivots))

	return `/#/${PageRoutes.Stories}/${storiesPivot}`

	// if (!showPostsListForStories(storiesPivot)) {
	// 	return `/#/${PageRoutes.Stories}/${storiesPivot}`
	// }

	// const currentPost =
	// 	getLastOpenPost(PageRoutes.Stories, storiesPivot) ||
	// 	getLatestPost(PageRoutes.Stories, storiesPivot)

	// return `/#/${PageRoutes.Stories}/${storiesPivot}/${currentPost.id}`
}

export const getAnyPagePath = (
	page: string,
	getLastOpenPost: IOpenPostsContext['getLastOpenPost'],
	prevPivots?: IRouteContext['prevPivots'],
	pivot?: PivotRoutes
): string => {
	switch (page) {
		case PageRoutes.Posts:
			return getPostsPath()
		case PageRoutes.Stories:
			return getStoriesPath(getLastOpenPost, prevPivots, pivot)
		case PageRoutes.Home:
		default:
			return getHomePath(getLastOpenPost, prevPivots, pivot)
	}
}
