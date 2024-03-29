import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MediaContext, MediaSize } from '../../../components/mediaProvider'
import { IPivotItem, IPivotsProps } from '../../../components/pivots/pivots.types'
import { getAnyPagePath } from '../../helpers/navigation'
import {
	getPath,
	getPrimaryRoute,
	redirectTo,
	RouteContext,
	usePageParams,
} from '../../helpers/routes'
import { OpenPostsContext } from '../../posts/openPosts'
import { PivotRoutes } from '../../posts/post.types'
import { IUsePivotKeyReturns, IUsePivotProps } from './usePivots.types'
import { useTextMorph } from './useTextMorph'

// (TODO) do an efficiency pass (use memoization)
// (TODO) add documentation

export const usePivots = (props: IUsePivotProps): IUsePivotKeyReturns => {
	let { allTitles, titlePhrases, titleMap, defaultTitle, skip } = props
	const params = usePageParams()
	let selectedPivotTitle = params.pivot
	const location = useLocation()
	const pageRoute = getPrimaryRoute(location.pathname)
	const [hoverPivotTitle, setHoverPivotTitle] = useState<string | undefined>(undefined)
	const mediaSize = useContext(MediaContext)
	const { prevPivots, setPrevPivot } = useContext(RouteContext)
	const { getLastOpenPost } = useContext(OpenPostsContext)
	const prevPivot = prevPivots[pageRoute]
	const skipMorph = skip || mediaSize === MediaSize.Small

	// keep previously selected pivot up to date
	useEffect(() => {
		if (!skip && selectedPivotTitle && selectedPivotTitle !== prevPivot) {
			setPrevPivot(pageRoute, selectedPivotTitle)
		}
	}, [selectedPivotTitle])

	const setPivot = (item?: IPivotItem): void => {
		const newSelectedKey = item && item.key
		if (newSelectedKey) {
			redirectTo(
				getAnyPagePath(pageRoute, getLastOpenPost, undefined, newSelectedKey as PivotRoutes)
			)
		}
	}

	const onMouseEnter = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
		const target = event.target as HTMLDivElement
		const newHoverKey = target.innerText
		setHoverPivotTitle(newHoverKey)
	}

	const onMouseLeave = (): void => {
		setHoverPivotTitle(undefined)
	}

	const baseTitles = titlePhrases.map((phrase, index) => phrase[index])
	allTitles = allTitles ?? baseTitles
	let titles = baseTitles
	if (hoverPivotTitle !== undefined) {
		const titlePhraseIndex = titleMap[hoverPivotTitle]
		if (titlePhraseIndex !== undefined) {
			titles = titlePhrases[titlePhraseIndex]
		}
	}

	const bypassIfNoHover = !hoverPivotTitle
	const { morphedTexts: morphedTitles } = useTextMorph(
		baseTitles,
		titles,
		bypassIfNoHover,
		skipMorph
	)

	let pivotsItems: IPivotsProps['pivotItems'] = baseTitles.map((baseTitle, index) => ({
		text: morphedTitles[index],
		key: baseTitle,
		onMouseEnter,
		onMouseLeave,
	}))

	let redirectPath
	const isValidTitle = allTitles.indexOf(selectedPivotTitle || '') > -1
	if (!isValidTitle) {
		selectedPivotTitle = prevPivot || defaultTitle
		redirectPath = getPath(pageRoute, selectedPivotTitle)
	}

	if (mediaSize === MediaSize.Small) {
		pivotsItems = pivotsItems.filter((pivotItem) => pivotItem.key !== selectedPivotTitle)
	}

	return { selectedPivotTitle, setPivot, pivotsItems, redirectPath }
}
