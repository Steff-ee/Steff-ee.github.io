import React from 'react'
import { LinkFrame } from '../../shared/presentational/components/linkFrame'

export const ConjectureLinks: React.FunctionComponent = (): JSX.Element => {
	return (
		<div>
			<LinkFrame
				title={'Slate Star Codex'}
				link={'https://slatestarcodex.com/'}
				description={`Scott Alexander (author of Unsong)'s fascinating "rational" blog`}
				displayLarger={true}
			/>
			<LinkFrame
				title={'FiveThirtyEight'}
				link={'https://fivethirtyeight.com/'}
				description={`Statistically inclined news, founded by Nate Silver`}
				rightShadow={true}
				displayLarger={true}
			/>
			<LinkFrame
				title={'Philosophy Tube'}
				link={'https://www.youtube.com/c/thephilosophytube'}
				description={`Abigail Thorn's YouTube channel about philosophy and culture war topics`}
				displayLarger={true}
			/>
		</div>
	)
}
