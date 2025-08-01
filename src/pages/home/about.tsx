import React, { useContext } from 'react'
import { FadeLoadImage } from '../../components/fadeLoadImage'
import { MediaContext, MediaSize } from '../../components/mediaProvider'
import { profileImg } from '../../shared/helpers/assets'
import { useLightTextStyle, useTitleTextStyle } from '../../shared/helpers/useStyles'
import { SeasonalPageTemplate } from '../../modes/classic/seasonalPageTemplate'

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

	const Content = (
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
					</div>
					<p>When I'm not writing code, I'm reading and writing fiction. Always learning and making mistakes. Husband; cat dad; cancer fighter.</p>
					<p>
						Grateful to be alive given how statistically unlikely my existence is (and yours is too!).
					</p>
					<div style={lightTextStyle}>
						<div>I hope you have enjoyed your stay</div>
						<div>and as well I hope</div>
						<div>wherever you're going, wherefore,</div>
						<div>—or perhaps wherever you're took—</div>
						<div>you're joined by good company, or</div>
						<div>the company of a good book.</div>
					</div>
				</div>
			</div>
			<div style={{ textAlign: 'center' }}>
				<FadeLoadImage src={profileImg} style={aboutImageStyle} />
			</div>
		</div>
	)
	return <SeasonalPageTemplate Content={Content} />
}
