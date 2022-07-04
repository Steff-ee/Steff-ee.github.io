import React, { useState } from 'react'
import { CircadianMood, getCircadianMood } from '../../shared/helpers/time'
import { Seasons } from './seasonsHelpers'

interface ISeasonsContext {
	season: Seasons
	setSeason: (state: Seasons | ((state: Seasons) => Seasons)) => void
}

export const SeasonsContext = React.createContext<ISeasonsContext>({
	season: Seasons.None,
	setSeason: (): void => {
		return
	},
})

export const SeasonsProvider: React.FunctionComponent<React.PropsWithChildren> = (props) => {
	const { children } = props
	const mood = getCircadianMood()
	const [season, setSeason] = useState<Seasons>(
		mood === CircadianMood.Night ? Seasons.Winter : Seasons.None
	)

	return (
		<SeasonsContext.Provider value={{ season, setSeason }}>{children}</SeasonsContext.Provider>
	)
}
