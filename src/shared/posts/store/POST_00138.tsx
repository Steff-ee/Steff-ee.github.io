import React from 'react'
import { HomePivots } from '../../../pages/home/home.types'
import { PageRoutes } from '../../helpers/routes'
import { LinkFrame } from '../../presentational/components/linkFrame'
import { IPost } from '../post.types'

const Image = 'https://i.imgur.com/EP8EWET.png'

const PostContent: React.FunctionComponent = (): JSX.Element => {
	return (
		<>
			<p>Link roundup for the four weeks or so preceding today, September 7th.</p>
			<LinkFrame
				title={`Why aren't smart people happier?`}
				description={
					<>
						Its title feels clickbaity to me, but there's a bit of wisdom in this
						article I appreciate. In short: We tend to think of smarts in terms of
						ability to solve well-defined problems, like those you see in school. What
						matters more to happiness is the ability to solve poorly-defined problems.
					</>
				}
				link={'https://experimentalhistory.substack.com/p/why-arent-smart-people-happier'}
			/>
			<LinkFrame
				title={`The Shifting Baseline Syndrome`}
				description={
					<>
						"There is a curious phenomenon that results from the relatively brief window
						of time a single human lifetime provides: we perceive the current state of
						the natural world as “normal”."
					</>
				}
				link={'https://threadreaderapp.com/thread/1559191234899415040.html'}
			/>
			<LinkFrame
				title={`Why does everything on Netflix look like that?`}
				description={
					<>
						Personally, the Netflix look doesn't bother me in the slightest and I hardly
						notice it at all, but I know others who do, and either way, it's interesting
						to read about.
					</>
				}
				link={
					'https://www.vice.com/en/article/ake3j5/why-does-everything-on-netflix-look-like-that'
				}
			/>
			<LinkFrame
				title={`Lessons I learned becoming suddenly middle-class`}
				description={
					<>
						A great followup to the author's older post about his experiences being
						poor.
					</>
				}
				link={'https://www.residentcontrarian.com/p/on-being-rich-ish-lessons-i-learned'}
			/>
			<div style={{ fontSize: 30 }}>
				<p>Links about AI</p>
			</div>
			<LinkFrame
				title={`Comparing the art results of three AI systems`}
				description={
					<>
						DALL-E 2 vs Midjourney vs StableDiffusion. (StableDiffusion was how I
						generated the art for this links roundup.)
					</>
				}
				link={'https://threadreaderapp.com/thread/1561019187451011074.html'}
			/>
			<LinkFrame
				title={`Brief thoughts on AI`}
				description={<>Various interesting points to consider.</>}
				link={
					'https://forum.effectivealtruism.org/posts/KmhCzCKdig8NPby2D/robert-long-on-why-you-might-want-to-care-about-artificial'
				}
			/>
			<LinkFrame
				title={`Facebook's crappy chatbot`}
				description={
					<>
						Vox gets conspiratorial: Did Meta <i>deliberately</i> make their new chatbot
						terrible?
					</>
				}
				link={
					'https://www.vox.com/future-perfect/23307252/meta-facebook-bad-ai-chatbot-blenderbot'
				}
			/>
			<LinkFrame
				title={`The intent behind consuming art or writing`}
				description={
					<>
						AI art is scary. Artists are losing their jobs. Many are speculating which
						professions will be the next to succumb to AI. But in this insightful post,
						there is at least some cause for optimism.
					</>
				}
				link={
					'https://nostalgebraist.tumblr.com/post/694053631234899968/asking-bc-youre-the-only-person-i-follow-who'
				}
			/>
			<div style={{ fontSize: 30 }}>
				<p>Fun</p>
			</div>
			<LinkFrame
				title={`Watch how wire work gets done`}
				description={
					<>
						The Corridor Crew team up with Gui DaSilva-Greene in Punch 4 Punch to
						recreate a stunt from Stranger Things.
					</>
				}
				link={'https://www.youtube.com/watch?v=6sJXXDMtPZU'}
			/>
			<LinkFrame
				title={`TikTok: Life on the algorithm`}
				description={
					<>Errant Signal continues to be one of my favorite YouTube channels.</>
				}
				link={'https://www.youtube.com/watch?v=-wZoVyxdFRg'}
			/>
			<LinkFrame
				title={`Silly or cute`}
				link={
					'https://www.reddit.com/r/Eyebleach/comments/wmj727/physics_class_gets_you_the_best_naps/'
				}
			/>
			<LinkFrame
				title={`Music`}
				description={<>IM U by Beacon.</>}
				link={'https://www.youtube.com/watch?v=DSEIEdRo02Q'}
			/>
		</>
	)
}

export const POST_00138: IPost = {
	id: 138,
	title: 'Link Roundup - 09/07/2022',
	subtitle: `AI art!`,
	createdTime: 1662611000000,
	route: PageRoutes.Home,
	pivot: HomePivots.Posts,
	content: <PostContent />,
	imageSrc: Image,
}
