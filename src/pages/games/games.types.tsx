import { IPivotTitlePhrases } from '../../shared/presentational/hooks/usePivots.types'

export const gamesTitle = 'games'

export enum GamePivots {
	Posts = 'posts',
	Games = 'games',
	Links = 'links',
}

export const gamePivotTitlePhrases: IPivotTitlePhrases = [
	// games to try or homebrew
	[GamePivots.Games, 'to try', 'or homebrew'],
	// list of posts on gaming
	['list of', GamePivots.Posts, 'on gaming'],
	// some gaming links
	['some', 'gaming', GamePivots.Links],
]
