import { StoryPivots } from '../../pages/stories/stories.types'
import { PageRoutes } from '../helpers/routes'
import { IPost } from './post.types'
import { POST_00100 } from './store/POST_00100'
import { POST_00102 } from './store/POST_00102'
import { POST_00103 } from './store/POST_00103'
import { POST_00104 } from './store/POST_00104'
import { POST_00106 } from './store/POST_00106'
import { POST_00108 } from './store/POST_00108'
import { POST_00110 } from './store/POST_00110'
import { POST_00112 } from './store/POST_00112'
import { POST_00114 } from './store/POST_00114'
import { POST_00116 } from './store/POST_00116'
import { POST_00118 } from './store/POST_00118'
import { POST_00120 } from './store/POST_00120'
import { POST_00122 } from './store/POST_00122'
import { POST_00124 } from './store/POST_00124'
import { POST_00126 } from './store/POST_00126'
import { POST_00128 } from './store/POST_00128'
import { POST_00130 } from './store/POST_00130'
import { POST_00134 } from './store/POST_00134'

/* ALL POSTS */

// ordered in ascending order, from oldest to most recent
export const allPosts: IPost[] = [
	POST_00100,
	POST_00102,
	POST_00103,
	POST_00104,
	POST_00106,
	POST_00108,
	POST_00110,
	POST_00112,
	POST_00114,
	POST_00116,
	POST_00118,
	POST_00120,
	POST_00122,
	POST_00124,
	POST_00126,
	POST_00128,
	POST_00130,
	POST_00134,
]

export const allPostsByPage: { [page: string]: IPost[] } = {}

Object.keys(PageRoutes).forEach((key: string) => {
	const pageKey = key as keyof typeof PageRoutes
	allPostsByPage[PageRoutes[pageKey]] = []
})

const allPostsDictionary: { [id: number]: number } = {}
allPosts.forEach((post, index) => {
	allPostsDictionary[post.id] = index
	allPostsByPage[post.route].push(post)
})

/* STORIES */

const allStoryPosts = allPostsByPage[PageRoutes.Stories]
export const postsAboutStories: IPost[] = allStoryPosts.filter(
	(post) => post.pivot === StoryPivots.Posts
)
export const stories: IPost[] = allStoryPosts.filter((post) => post.pivot === StoryPivots.Stories)

const postsAboutStoriesDictionary: { [id: number]: number } = {}
postsAboutStories.forEach((post, index) => {
	postsAboutStoriesDictionary[post.id] = index
})

const storiesDictionary: { [id: number]: number } = {}
stories.forEach((post, index) => {
	storiesDictionary[post.id] = index
})

/* NAVIGATION */

export const getPageList = (page: PageRoutes): IPost[] => {
	switch (page) {
		case PageRoutes.Posts:
			return allPosts
		case PageRoutes.Stories:
			return postsAboutStories
	}

	return []
}

const getPageListIndexOfPost = (
	postId: number,
	page: PageRoutes,
): number => {
	switch (page) {
		case PageRoutes.Posts:
			return allPostsDictionary[postId]
		case PageRoutes.Stories:
			return postsAboutStoriesDictionary[postId]
	}

	return -1
}

export const getPostFromId = (postId: number): IPost | undefined => {
	const pageListIndex = allPostsDictionary[postId]

	return allPosts[pageListIndex]
}

export const getNextPost = (
	post: IPost,
	page: PageRoutes
): IPost | undefined => {
	const index = getPageListIndexOfPost(post.id, page) + 1
	const pageList = getPageList(page)

	if (pageList.length > index) {
		return pageList[index]
	}

	return undefined
}

export const getPrevPost = (
	post: IPost,
	page: PageRoutes
): IPost | undefined => {
	const index = getPageListIndexOfPost(post.id, page) - 1
	const pageList = getPageList(page)

	if (index >= 0) {
		return pageList[index]
	}

	return undefined
}

export const getFirstPost = (page: PageRoutes): IPost => {
	switch (page) {
		case PageRoutes.Stories:
			return postsAboutStories[0]
		case PageRoutes.Posts:
		default:
			return allPosts[0]
	}
}

export const getLatestPost = (page: PageRoutes): IPost => {
	switch (page) {
		case PageRoutes.Stories:
			return postsAboutStories[postsAboutStories.length - 1]
		case PageRoutes.Posts:
		default:
			return allPosts[allPosts.length - 1]
	}
}
