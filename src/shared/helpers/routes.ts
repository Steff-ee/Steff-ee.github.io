import React from 'react'
import { useParams } from 'react-router-dom'
import { PivotRoutes } from '../posts/post.types'

export const catsPath = '#/cats'
export const aboutPath = '#/home/about'
export const postsPath = '#/home/posts'
export const linksPath = '#/home/links'

export enum PageRoutes {
	Home = 'home',
	Stories = 'stories',
	Games = 'games',
	Conjecture = 'conjecture',
	Cats = 'cats',
}

export interface IRouteParams {
	page?: PageRoutes
	pivot?: PivotRoutes
	postId?: string
}

export const getPrimaryRoute = (pathName: string): string => {
	const subroutes = pathName.split('/')

	if (subroutes.length < 2) {
		return PageRoutes.Home
	}

	return subroutes[1]
}

export const usePageParams = (): IRouteParams => {
	return useParams()
}

export interface IRouteContext {
	prevPivots: { [page: string]: PivotRoutes | undefined }
	setPrevPivot: (page: string, pivot: PivotRoutes) => void
}

export const RouteContext = React.createContext<IRouteContext>({
	prevPivots: {},
	setPrevPivot: (): void => {
		return
	},
})

export const getPath = (
	page: string,
	pivot: string | undefined,
	postId?: string | number
): string => {
	if (postId !== undefined) {
		return `/#/${page}/${pivot}/${postId}`
	}

	return `/#/${page}/${pivot}`
}

export const redirectTo = (path: string): void => {
	if (window.location.href !== path) {
		window.location.href = path
	}
}
