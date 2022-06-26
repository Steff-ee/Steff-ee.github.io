import React from 'react'
import {
	getConjecturePageContent,
	getConjectureUsePivotsProps,
	showPostsListForConjecture,
} from '../../pages/conjectures/conjecture.helpers'
import {
	getGamePageContent,
	getGameUsePivotsProps,
	showPostsListForGame,
} from '../../pages/games/game.helpers'
import {
	getHomePageContent,
	getHomeUsePivotsProps,
	showPostsListForHome,
} from '../../pages/home/home.helpers'
import {
	getStoriesPageContent,
	getStoriesUsePivotsProps,
	showPostsListForStories,
} from '../../pages/stories/stories.helpers'
import { PageRoutes, redirectTo, usePageParams } from '../../shared/helpers/routes'
import { Post } from '../../shared/posts/post'
import { PivotRoutes } from '../../shared/posts/post.types'
import { PostList } from '../../shared/posts/postList'
import { usePostsNav } from '../../shared/posts/usePostsNav'
import { usePivots } from '../../shared/presentational/hooks/usePivots'
import { IUsePivotProps } from '../../shared/presentational/hooks/usePivots.types'
import { SeasonalPageTemplate } from './seasonalPageTemplate'

const getUsePivotProps = (page: string | undefined): IUsePivotProps => {
	switch (page) {
		case PageRoutes.Stories:
			return getStoriesUsePivotsProps()

		case PageRoutes.Games:
			return getGameUsePivotsProps()

		case PageRoutes.Conjecture:
			return getConjectureUsePivotsProps()

		case PageRoutes.Home:
		default:
			return getHomeUsePivotsProps()
	}
}

const getShowPostsList = (page: string | undefined, pivot: PivotRoutes | undefined): boolean => {
	switch (page) {
		case PageRoutes.Stories:
			return showPostsListForStories(pivot)

		case PageRoutes.Games:
			return showPostsListForGame(pivot)

		case PageRoutes.Conjecture:
			return showPostsListForConjecture(pivot)

		case PageRoutes.Home:
		default:
			return showPostsListForHome(pivot)
	}
}

const getPageContent = (
	page: string | undefined,
	pivot: PivotRoutes | undefined
): JSX.Element | undefined => {
	switch (page) {
		case PageRoutes.Stories:
			return getStoriesPageContent(pivot)

		case PageRoutes.Games:
			return getGamePageContent(pivot)

		case PageRoutes.Conjecture:
			return getConjecturePageContent(pivot)

		case PageRoutes.Home:
		default:
			return getHomePageContent(pivot)
	}
}

export const ClassicPageContainer: React.FunctionComponent = (): JSX.Element => {
	const { page, postId } = usePageParams()

	const {
		selectedPivotTitle,
		setPivot,
		pivotsItems,
		redirectPath: redirectPath1,
	} = usePivots(getUsePivotProps(page))

	const showPostsList: boolean = getShowPostsList(page, selectedPivotTitle)
	const showPost = !!postId && (!selectedPivotTitle || showPostsList)

	const {
		currentPost,
		firstClick,
		backClick,
		nextClick,
		latestClick,
		redirectPath: redirectPath2,
	} = usePostsNav(page as PageRoutes, selectedPivotTitle, !showPost)

	const redirectPath = redirectPath2 || redirectPath1
	if (redirectPath) {
		redirectTo(redirectPath)

		return <></>
	}

	let Content = <></>
	if (showPost) {
		Content = <Post post={currentPost} />
	} else if (showPostsList) {
		Content = <PostList page={page as PageRoutes} pivot={selectedPivotTitle} />
	} else {
		Content = getPageContent(page, selectedPivotTitle) as JSX.Element
	}

	const templateProps = {
		firstClick,
		backClick,
		nextClick,
		latestClick,
		Content,
		showPostsNav: showPost,
		selectedPivotTitle,
		setPivot,
		pivotsItems,
	}

	return <SeasonalPageTemplate {...templateProps} />
}
