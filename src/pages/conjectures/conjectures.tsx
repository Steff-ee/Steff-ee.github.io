import bookshelfImg from 'Assets/images/bookshelf_lightbulbs.jpg'
import React, { useContext, useEffect } from 'react'
import { classicColors } from '../../modes/classic/classicConstants'
import { SeasonsContext } from '../../modes/seasons/seasons'
import { getNextSeason } from '../../modes/seasons/seasonsHelpers'
import { PageRoutes } from '../../shared/helpers/routes'
import { Post } from '../../shared/posts/post'
import { PivotRoutes } from '../../shared/posts/post.types'
import { usePostsNav } from '../../shared/posts/usePostsNav'
import { useChangeModeCommand } from '../../shared/presentational/components/navBarCommands'
import { makeTitleMap, usePivots } from '../../shared/presentational/hooks/usePivots'
import { Page } from '../page'
import { ConjectureLinks } from './conjectureLinks'
import { ConjecturePivots, conjecturePivotTitlePhrases, conjectureTitle } from './conjectures.types'

const titleMap = makeTitleMap(conjecturePivotTitlePhrases)

export const Conjecture: React.FunctionComponent = (): JSX.Element => {
	const { selectedPivotTitle, setPivot, pivotsItems, redirectTo: redirectTo1 } = usePivots(
		conjecturePivotTitlePhrases,
		ConjecturePivots.Posts,
		titleMap
	)
	const { setSeason } = useContext(SeasonsContext)
	const changeModeCommand = useChangeModeCommand(classicColors.secondary)
	const showPostsNav = selectedPivotTitle === ConjecturePivots.Posts
	const {
		currentPost,
		firstClick,
		backClick,
		nextClick,
		latestClick,
		redirectTo: redirectTo2,
	} = usePostsNav(
		PageRoutes.Conjecture,
		selectedPivotTitle as PivotRoutes, // (TODO) remove cast
		!showPostsNav
	)

	useEffect(() => {
		setSeason(getNextSeason(3))
	}, [])

	const redirectTo = redirectTo1 || redirectTo2
	if (redirectTo) {
		return redirectTo
	}

	let pageContent
	switch (selectedPivotTitle) {
		case ConjecturePivots.Posts:
			pageContent = <Post post={currentPost} />
			break
		case ConjecturePivots.Links:
		default:
			pageContent = <ConjectureLinks />
	}

	return (
		<Page
			headerBackgroundImage={bookshelfImg}
			titleText={conjectureTitle}
			selectedPivotTitle={selectedPivotTitle}
			setPivot={setPivot}
			pivotsItems={pivotsItems}
			Content={pageContent}
			showPostsNav={showPostsNav}
			firstClick={firstClick}
			backClick={backClick}
			nextClick={nextClick}
			latestClick={latestClick}
		/>
	)
}
