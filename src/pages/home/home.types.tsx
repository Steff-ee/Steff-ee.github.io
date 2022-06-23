import { IPivotTitlePhrases } from '../../shared/presentational/hooks/usePivots.types'

export const homeTitle = 'home'

export enum HomePivots {
	About = 'about',
	Posts = 'posts',
	Resume = 'resume',
	Cats = 'cats',
}

export const homePivots: string[] = [
	HomePivots.About,
	HomePivots.Posts,
	HomePivots.Resume,
	HomePivots.Cats,
]

export const homePivotTitlePhrases: IPivotTitlePhrases = [
	// about the author
	[HomePivots.About, 'the', 'author'],
	// all posts by date
	['all', HomePivots.Posts, 'by date'],
	// cats cats cats cats
	['cats', 'cats', HomePivots.Cats],
]
