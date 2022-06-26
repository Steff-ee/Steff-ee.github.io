import { useContext } from 'react'
import { MediaContext, MediaSize } from '../../components/mediaProvider'

const defaultTextStyleLarge: React.CSSProperties = {
	fontFamily: 'Open Sans, Lato, sans-serif',
	fontSize: 19,
	lineHeight: '32px',
	textAlign: 'center',
}

const defaultTextStyleSmall: React.CSSProperties = {
	fontFamily: 'Open Sans, Lato, sans-serif',
	fontSize: 17,
	lineHeight: '25px',
	textAlign: 'center',
}

const lightTextStyleLarge: React.CSSProperties = {
	fontFamily: 'Open Sans',
	fontSize: 18,
	lineHeight: '27px',
}

const lightTextStyleSmall: React.CSSProperties = {
	fontFamily: 'Open Sans',
	fontSize: 16,
	lineHeight: '22px',
}

const titleTextStyle: React.CSSProperties = {
	fontFamily: 'Montserrat',
	fontSize: 56,
	lineHeight: '78px',
	fontWeight: 600,
}

const titleTextStyleSmall: React.CSSProperties = {
	fontFamily: 'Montserrat',
	fontSize: 31,
	lineHeight: '42px',
	fontWeight: 600,
}

const subtitleTextStyle: React.CSSProperties = {
	fontFamily: 'Montserrat',
	fontSize: 24,
	lineHeight: '36px',
}

const subtitleTextStyleSmall: React.CSSProperties = {
	fontFamily: 'Montserrat',
	fontSize: 20,
	lineHeight: '30px',
}

export const useTitleTextStyle = (): React.CSSProperties => {
	const mediaSize = useContext(MediaContext)

	if (mediaSize === MediaSize.Small) {
		return titleTextStyleSmall
	}

	return titleTextStyle
}

export const useSubtitleTextStyle = (): React.CSSProperties => {
	const mediaSize = useContext(MediaContext)

	if (mediaSize === MediaSize.Small) {
		return subtitleTextStyleSmall
	}

	return subtitleTextStyle
}

export const useDefaultTextStyle = (): React.CSSProperties => {
	const mediaSize = useContext(MediaContext)

	if (mediaSize === MediaSize.Small) {
		return defaultTextStyleSmall
	}

	return defaultTextStyleLarge
}

export const useLightTextStyle = (): React.CSSProperties => {
	const mediaSize = useContext(MediaContext)

	if (mediaSize === MediaSize.Small) {
		return lightTextStyleSmall
	}

	return lightTextStyleLarge
}

export const useListStyle = (): React.CSSProperties => {
	const lightTextStyle = useLightTextStyle()

	return {
		...lightTextStyle,
		margin: '16px 5% 32px 5%',
	}
}
