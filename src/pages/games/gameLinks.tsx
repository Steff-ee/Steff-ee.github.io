import React from 'react'
import { LinkFrame } from '../../shared/presentational/components/linkFrame'

export const GameLinks: React.FunctionComponent = (): JSX.Element => {
	return (
		<div>
			<LinkFrame
				title={'Noclip'}
				link={'https://www.youtube.com/c/NoclipVideo/videos'}
				description={'Wonderful documentary videos about videogame development'}
				displayLarger={true}
			/>
			<LinkFrame
				title={'Errant Signal'}
				link={'https://www.youtube.com/c/ErrantSignal/videos'}
				description={`My favorite videogame reviewer who isn't Noah Caldwell-Gervais`}
				rightShadow={true}
				displayLarger={true}
			/>
			<LinkFrame
				title={'Noah Caldwell-Gervais'}
				link={'https://www.youtube.com/user/broadcaststsatic/videos'}
				description={`My favorite videogame reviewer who isn't Errant Signal`}
				displayLarger={true}
			/>
			<LinkFrame
				title={'GDC'}
				link={'https://www.youtube.com/channel/UC0JB7TSe49lg56u6qH8y_MQ/videos'}
				description={'Game Developer Conference presentations'}
				rightShadow={true}
				displayLarger={true}
			/>
		</div>
	)
}
