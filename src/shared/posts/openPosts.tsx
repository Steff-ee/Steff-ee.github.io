import React, { useState } from 'react'
import { PageRoutes } from '../helpers/routes'
import { IPost } from './post.types'

export interface IOpenPostsContext {
	getLastOpenPost: (page: PageRoutes) => IPost | undefined
	setLastOpenPost: (page: PageRoutes, post: IPost) => void
}

export const OpenPostsContext = React.createContext<IOpenPostsContext>({
	getLastOpenPost: (): IPost | undefined => undefined,
	setLastOpenPost: (): void => {
		return
	},
})

export const OpenPostsProvider: React.FunctionComponent<React.PropsWithChildren> = (props) => {
	const [dictionary, setDictionary] = useState<{
		[pageRoute: string]: { [pivotRoute: string]: IPost }
	}>({
		[PageRoutes.Posts]: {},
		[PageRoutes.Stories]: {},
	})

	return (
		<OpenPostsContext.Provider
			value={{
				getLastOpenPost: (
					page: PageRoutes
				): IPost | undefined => {
					return dictionary[page]['1']
				},
				setLastOpenPost: (page: PageRoutes, post: IPost): void => {
					// (TODO) more efficient way?
					const newDictionary = { ...dictionary }
					newDictionary[page]['1'] = post
					setDictionary(newDictionary)
				},
			}}
		>
			{props.children}
		</OpenPostsContext.Provider>
	)
}
