import React from 'react'
import { LinkFrame } from '../../shared/presentational/components/linkFrame'

export const StoryLinks: React.FunctionComponent = (): JSX.Element => {
	return (
		<div>
			<LinkFrame
				title={'Janet Reid, Literary Agent'}
				description={
					<>
						The Query Shark's <i>other</i> blog
					</>
				}
				link={'http://jetreidliterary.blogspot.com/'}
				displayLarger={true}
			/>
			<LinkFrame
				title={'The Big Idea'}
				description={'Authors describing their inspirations, collected by John Scalzi'}
				link={'https://whatever.scalzi.com/category/big-idea/'}
				rightShadow={true}
				displayLarger={true}
			/>
			<LinkFrame
				title={'Folding Ideas'}
				link={'https://www.youtube.com/channel/UCyNtlmLB73-7gtlBz00XOQQ/videos'}
				description={'YouTube essays about pop culture'}
				displayLarger={true}
			/>
			<LinkFrame
				title={'Rambling After'}
				link={'http://ramblingafter.thecomicseries.com/'}
				description={'Comics written by me when I was in college'}
				rightShadow={true}
				displayLarger={true}
			/>
		</div>
	)
}
