import React from 'react'
import { PageRoutes, redirectTo, usePageParams } from '../../shared/helpers/routes'
import { Post } from '../../shared/posts/post'
import { PostList } from '../../shared/posts/postList'
import { usePostsNav } from '../../shared/posts/usePostsNav'
import { SeasonalPageTemplate } from './seasonalPageTemplate'

export const PostsPage: React.FunctionComponent = (): JSX.Element => {
	const { postId } = usePageParams()

	const {
		currentPost,
		firstClick,
		backClick,
		nextClick,
		latestClick,
		redirectPath,
	} = usePostsNav(PageRoutes.Posts, !postId)

	console.log('postId', postId)
	console.log('firstClick', firstClick)

	if (redirectPath) {
		redirectTo(redirectPath)

		return <></>
	}

	let Content = <></>
	if (!!postId) {
		Content = <Post post={currentPost} />
	} else {
		Content = <PostList page={PageRoutes.Posts} />
	}

	const templateProps = {
		firstClick,
		backClick,
		nextClick,
		latestClick,
		Content,
		showPostsNav: !!postId,
	}

	return <SeasonalPageTemplate {...templateProps} />
}
