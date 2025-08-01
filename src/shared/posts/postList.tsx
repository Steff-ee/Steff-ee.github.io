import React, { useContext } from 'react'
import { MediaContext, MediaSize } from '../../components/mediaProvider'
import { PageRoutes } from '../helpers/routes'
import { IPost, PivotRoutes } from './post.types'
import { allPosts, getPageList } from './posts'
import { PostSummary } from './postSummary'

export interface IPostProps {
	page: PageRoutes
}

export const PostList: React.FunctionComponent<IPostProps> = (props) => {
	const { page } = props
	const posts: IPost[] = allPosts
	const reversedPosts = [...posts]
	reversedPosts.reverse()
	const isSmall = useContext(MediaContext) === MediaSize.Small

	let padding = '0px 0px 44px 0px'
	if (isSmall) {
		padding = '0px 0px 30px 0px'
	}

	return (
		<div>
			{reversedPosts.map((post, idx) => (
				<div key={`postSummary-${post.id}`}>
					<PostSummary
						rootStyle={{ padding }}
						post={post}
						page={page}
						displayLarge={idx === 0}
					/>
				</div>
			))}
		</div>
	)
}
