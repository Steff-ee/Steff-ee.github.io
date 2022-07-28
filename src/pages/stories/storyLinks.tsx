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
				link={'https://www.youtube.com/c/FoldingIdeas/featured'}
				description={'YouTube essays about pop culture'}
				displayLarger={true}
			/>
			<LinkFrame
				title={'Corridor Crew'}
				link={'https://www.youtube.com/c/corridorcrew/featured'}
				description={
					'Videos breaking down the craft and storytelling that goes into visual effects, and more'
				}
				rightShadow={true}
				displayLarger={true}
			/>
			<LinkFrame
				title={'Rambling After'}
				link={'http://ramblingafter.thecomicseries.com/'}
				description={'Comics written by me when I was in college'}
				displayLarger={true}
			/>
		</div>
	)
}
