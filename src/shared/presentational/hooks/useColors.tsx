import React, { createContext, useContext } from 'react'
import { SeasonsContext } from '../../../modes/seasons/seasons'
import { Seasons } from '../../../modes/seasons/seasonsHelpers'
import { Colors } from '../../helpers/constants'
import { IColors } from './useColors.types'

const classicColors: IColors = {
	headerTitleText: Colors.LightSand,
	navbarText: Colors.LightSand,
	background: Colors.LightSand,
	border: 'black',
	borderHighlight: Colors.OffBlack,
	text: 'black',
	subtitle: Colors.FadedBlack,
	link: Colors.CeruleanDark,
	linkHover: Colors.Cerulean,
	visitedLink: Colors.ClaretWine,
	visitedLinkHover: Colors.SoftMagenta,
}

const winterColors: IColors = {
	headerTitleText: Colors.IceBlue,
	navbarText: Colors.IceBlue,
	background: Colors.DarkerBlue,
	border: 'black',
	borderHighlight: Colors.OffBlack,
	text: Colors.IceBlue,
	subtitle: 'white',
	link: Colors.SeaFoam,
	linkHover: Colors.SeaFoam,
	visitedLink: Colors.SeaFoam,
	visitedLinkHover: Colors.SeaFoam,
}

const springColors: IColors = {
	headerTitleText: Colors.IceWhite,
	navbarText: Colors.DarkViolet,
	background: Colors.ClaretWine,
	border: Colors.IceWhite,
	borderHighlight: Colors.CloudedIce,
	text: Colors.IceWhite,
	subtitle: Colors.GentleSand,
	link: Colors.CloudedIce,
	linkHover: Colors.IceWhite,
	visitedLink: Colors.CloudedIce,
	visitedLinkHover: Colors.IceWhite,
}

const summerColors: IColors = {
	headerTitleText: Colors.LightYellow,
	navbarText: Colors.LightYellow,
	background: Colors.LightYellow,
	border: 'black',
	borderHighlight: Colors.OffBlack,
	text: 'black',
	subtitle: Colors.LightYellow,
	link: Colors.CeruleanDark,
	linkHover: Colors.Cerulean,
	visitedLink: Colors.ClaretWine,
	visitedLinkHover: Colors.SoftMagenta,
}

const autumnColors: IColors = {
	headerTitleText: '#f2afa1',
	navbarText: '#f2afa1',
	background: '#351811',
	border: 'black',
	borderHighlight: Colors.OffBlack,
	text: '#f2afa1',
	subtitle: '#f2afa1',
	link: Colors.CeruleanDark,
	linkHover: Colors.Cerulean,
	visitedLink: Colors.ClaretWine,
	visitedLinkHover: Colors.SoftMagenta,
}

export const ColorsContext = createContext<IColors>(classicColors)

export const useColors = (): IColors => {
	return useContext(ColorsContext)
}

export const ColorsProvider: React.FunctionComponent<React.PropsWithChildren> = (props) => {
	const { children } = props
	const { season } = useContext(SeasonsContext)
	let colors: IColors
	switch (season) {
		case Seasons.Winter:
			colors = winterColors
			break
		case Seasons.Spring:
			colors = springColors
			break
		case Seasons.Summer:
			colors = summerColors
			break
		case Seasons.Autumn:
			colors = autumnColors
			break
		case Seasons.None:
		default:
			colors = classicColors
	}

	return <ColorsContext.Provider value={colors}>{children}</ColorsContext.Provider>
}
