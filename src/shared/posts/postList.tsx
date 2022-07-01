import React from 'react'
import { PageRoutes } from '../helpers/routes'
import { IPost, PivotRoutes } from './post.types'
import { getPageList } from './posts'
import { PostSummary } from './postSummary'

export interface IPostProps {
	page: PageRoutes
	pivot: PivotRoutes | undefined
}

export const PostList: React.FunctionComponent<IPostProps> = (props) => {
	const { page, pivot } = props
	const posts: IPost[] = getPageList(page, pivot)
	const reversedPosts = [...posts]
	reversedPosts.reverse()

	return (
		<div>
			{reversedPosts.map((post) => (
				<div key={`postSummary-${post.id}`} style={{ paddingBottom: 60 }}>
					<PostSummary post={post} page={page} pivot={pivot} />
				</div>
			))}
		</div>
	)
}
