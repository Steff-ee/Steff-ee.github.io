import { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getPath, PageRoutes, redirectTo, usePageParams } from '../helpers/routes'
import { OpenPostsContext } from './openPosts'
import { IPost, PivotRoutes } from './post.types'
import { getFirstPost, getLatestPost, getNextPost, getPostFromId, getPrevPost } from './posts'

export interface IUsePostsNavReturns {
	currentPost: IPost
	redirectPath?: string
	firstClick?: () => void
	backClick?: () => void
	nextClick?: () => void
	latestClick?: () => void
}

const getPostFromRoute = (postIdFromRoute: string | undefined, page: string): IPost | undefined => {
	if (postIdFromRoute) {
		const postId = parseInt(postIdFromRoute, 10)
		const postFromRoute = getPostFromId(postId)
		if (postFromRoute && page !== postFromRoute.route && page !== PageRoutes.Posts) {
			return undefined
		}

		return postFromRoute
	}

	return undefined
}

/**
 * Precondition: @param page is a valid page; TODO test this assumption!
 */
export const usePostsNav = (
	page: PageRoutes,
	skip = false
): IUsePostsNavReturns => {
	const { postId: postIdFromRoute } = usePageParams()
	const location = useLocation()
	const { getLastOpenPost, setLastOpenPost } = useContext(OpenPostsContext)
	const firstPost = getFirstPost(page)
	const latestPost = getLatestPost(page)
	const postFromRoute = getPostFromRoute(postIdFromRoute, page)

	const currentPost: IPost = postFromRoute || getLastOpenPost(page) || latestPost

	useEffect(() => {
		// if the new route was valid, store it in the last-open-posts provider
		if (!!postFromRoute) {
			setLastOpenPost(page, currentPost)
		}
	}, [location.pathname])

	if (skip) {
		return { currentPost }
	}

	if (!postFromRoute && currentPost) {
		return { currentPost, redirectPath: getPath(page, currentPost.id) }
	}

	const prevPost = getPrevPost(currentPost, page)
	const nextPost = getNextPost(currentPost, page)

	let backClick
	if (prevPost) {
		backClick = (): void => redirectTo(getPath(page, prevPost.id))
	}

	let nextClick
	if (nextPost) {
		nextClick = (): void => redirectTo(getPath(page, nextPost.id))
	}

	// if we're already at the first or second post, no need to show "<<"
	let firstClick
	if (prevPost && getNextPost(firstPost, page)!.id !== currentPost.id) {
		firstClick = (): void => redirectTo(getPath(page, firstPost.id))
	}

	// if we're already at the latest or next-to-latest post, no need to show ">>"
	let latestClick
	if (nextPost && getPrevPost(latestPost, page)!.id !== currentPost.id) {
		latestClick = (): void => redirectTo(getPath(page, latestPost.id))
	}

	return {
		currentPost,
		backClick,
		nextClick,
		firstClick,
		latestClick,
	}
}
