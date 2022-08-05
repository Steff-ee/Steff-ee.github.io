import React, { useContext } from 'react'
import { FadeLoadImage } from '../../components/fadeLoadImage'
import { MediaContext, MediaSize } from '../../components/mediaProvider'
import { profileImg } from '../../shared/helpers/assets'
import { useLightTextStyle, useTitleTextStyle } from '../../shared/helpers/useStyles'

const aboutImageStyleMobile: React.CSSProperties = {
	width: '300px',
	height: '400px',
	marginBottom: '32px',
}

const aboutImageStyleBigScreen: React.CSSProperties = {
	width: '375px',
	height: '500px',
}

export const AboutPage: React.FunctionComponent = (): JSX.Element => {
	const mediaSize = useContext(MediaContext)
	const lightTextStyle = useLightTextStyle()
	const titleTextStyle = useTitleTextStyle()

	let aboutImageStyle: React.CSSProperties
	if (mediaSize === MediaSize.Small) {
		aboutImageStyle = aboutImageStyleMobile
	} else {
		aboutImageStyle = aboutImageStyleBigScreen
	}

	return (
		<div style={{ display: 'block', padding: '0px 30px' }}>
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					width: '100%',
					justifyContent: 'space-around',
				}}
			>
				<div style={{ maxWidth: '800px', flexGrow: 1, marginBottom: '64px' }}>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							flexWrap: 'wrap',
						}}
					>
						<div style={{ ...titleTextStyle, margin: '0px 32px 32px 0px' }}>Hola!</div>
						<div
							style={{
								...lightTextStyle,
								textAlign: 'right',
								marginBottom: '32px',
								flexGrow: 1,
							}}
						>
							<div style={{ fontSize: 21 }}>
								<div>Check out my</div>
								<a href={'#/home/resume'}>resume</a>
							</div>
						</div>
					</div>
					<p>When not writing code, writing stories.</p>
					<p>
						Always curious, always learning, and not always <i>not</i> making mistakes
						(así será).
					</p>
					<p>
						Wrote this blog using React 18. Check out the code{' '}
						<a href="https://github.com/Steff-ee/Steff-ee.github.io" target="_blank">
							here
						</a>
						!
					</p>
					<div style={lightTextStyle}>
						<div>I hope you have enjoyed your stay</div>
						<div>and as well I hope</div>
						<div>wherever you're going, wherefore,</div>
						<div>—or perhaps wherever you're took—</div>
						<div>you're joined by good company, or</div>
						<div>the company of a good book</div>
					</div>
				</div>
			</div>
			<div style={{ textAlign: 'center' }}>
				<FadeLoadImage src={profileImg} style={aboutImageStyle} />
			</div>
		</div>
	)
}
