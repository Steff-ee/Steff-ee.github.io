import { backgroundTextureImg } from './assets'
import { Colors } from './constants'

export const subscriptStyle: React.CSSProperties = {
	fontFamily: 'Source Code Pro',
	fontSize: '16px',
	lineHeight: '19px',
}

export const entirePageStyle: React.CSSProperties = {
	top: 0,
	left: 0,
	right: 0,
	width: '100vw',
	height: '100vh',
}

export const flexCenterStyle: React.CSSProperties = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
}

export const parallaxRootStyle: React.CSSProperties = {
	...entirePageStyle,
	overflowX: 'hidden',
	overflowY: 'scroll',
	perspective: '1px',
	perspectiveOrigin: '0 0',
	position: 'fixed',
}

export const parallaxGroupStyle: React.CSSProperties = {
	position: 'relative',
	transformStyle: 'preserve-3d',
}

export const contentWrapperStyle: React.CSSProperties = {
	margin: 'auto',
	paddingBottom: '80px',
	textAlign: 'left',
	display: 'flex',
	justifyContent: 'center',
}

export const grandTitleStyle: React.CSSProperties = {
	fontWeight: 600,
	fontFamily: 'Montserrat',
}

const navBarStyle: React.CSSProperties = {
	width: '100%',
	height: '66px',
	display: 'block',
	top: -2,
	zIndex: 3,
}

export const navBarStyleMobile: React.CSSProperties = {
	...navBarStyle,
	position: 'fixed',
}

export const navBarStyleBigScreen: React.CSSProperties = {
	...navBarStyle,
	position: 'sticky',
}

export const pivotItemStyle: React.CSSProperties = {
	height: '62px',
	margin: '0px 4%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	whiteSpace: 'nowrap',
}

export const classicBackgroundTextureStyle: React.CSSProperties = {
	backgroundColor: Colors.LightSand,
	backgroundImage: `url(${backgroundTextureImg})`,
	backgroundRepeat: 'repeat',
	backgroundPosition: 'right top',
}

export const smallestDeviceWidth = '320px'

export const bottomContentMargin = '34px'

export const transparentBackground = 'rgb(255, 255, 255, 0.24)'

export const commonIconProps = {
	size: '38px',
	style: { display: 'flex', alignItems: 'center', padding: '0px 6px' }
}