import { IPivotTitlePhrases } from '../../shared/presentational/hooks/usePivots.types'

export const homeTitle = 'home'

export enum HomePivots {
	About = 'about',
	Posts = 'posts',
	Resume = 'resume',
	Links = 'links',
}

export const homePivots: string[] = [
	HomePivots.About,
	HomePivots.Posts,
	HomePivots.Resume,
	HomePivots.Links,
]

export const homePivotTitlePhrases: IPivotTitlePhrases = [
	// about the author
	[HomePivots.About, 'the', 'author'],
	// list all posts by date
	['list all', HomePivots.Posts, 'by date'],
	// some interesting links
	['some', 'interesting', HomePivots.Links],
]
