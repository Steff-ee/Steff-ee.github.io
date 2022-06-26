import { IPivotTitlePhrases } from '../../shared/presentational/hooks/usePivots.types'

export const storiesTitle = 'stories'

export enum StoryPivots {
	Posts = 'posts',
	Stories = 'stories',
	Links = 'links',
}

export const storyPivotTitlePhrases: IPivotTitlePhrases = [
	// stories that I've written
	[StoryPivots.Stories, `that I've`, 'written'],
	// list of posts on stories
	['list of', StoryPivots.Posts, 'on stories'],
	// some interesting links
	['some', 'interesting', StoryPivots.Links],
]
