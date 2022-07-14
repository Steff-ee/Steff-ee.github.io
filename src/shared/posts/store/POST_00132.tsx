import React from 'react'
import { HomePivots } from '../../../pages/home/home.types'
import { PageRoutes } from '../../helpers/routes'
import { LinkFrame } from '../../presentational/components/linkFrame'
import { IPost } from '../post.types'

const LightbulbsAndLinksImage =
	'https://images.unsplash.com/photo-1507149214576-19e2f76d09ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'

const PostContent: React.FunctionComponent = (): JSX.Element => {
	return (
		<>
			<p>Link roundup for the four weeks or so preceding today, July 14th.</p>
			<LinkFrame
				title={`A fake job offer took down the world's most popular crypto game`}
				description={
					<>
						Yet another example of the insecurity of cryptocurrencies. It's the{' '}
						<i>people</i> that are the biggest vulnerability of any system.
					</>
				}
				link={
					'https://www.theblock.co/post/156038/how-a-fake-job-offer-took-down-the-worlds-most-popular-crypto-game'
				}
			/>
			<LinkFrame
				title={`Meta is really, really done with Novi`}
				description={
					<>
						Crypto always seemed to me like an odd invesetment for Facebook, given how
						crypto depends on trust, something that the company has been lacking in
						recent years.
					</>
				}
				link={'https://www.protocol.com/bulletins/meta-pay-libra-novi'}
			/>
			<LinkFrame
				title={`What's with all those weird wrong-number texts?`}
				description={<>A fun dive into phone scams.</>}
				link={'https://maxread.substack.com/p/whats-the-deal-with-all-those-weird'}
			/>
			<LinkFrame
				title={`Schools that say they teach you to code often don't`}
				description={
					<>
						I can't say that I agree with the headline ("maybe don't learn to code"),
						but caution is very much warranted when considering coding boot camps.
					</>
				}
				link={'https://www.vox.com/the-goods/23167916/learn-to-code-tech-boot-camp-scams'}
			/>
			<LinkFrame
				title={`Couple bought home in Seattle; learned Internet would cost $27,000`}
				description={<>Something to watch out for the next you buy a home.</>}
				link={
					'https://arstechnica.com/tech-policy/2022/06/couple-bought-home-in-seattle-then-learned-comcast-internet-would-cost-27000/'
				}
			/>
			<LinkFrame
				title={`The religious cult in Google Developer Studio`}
				description={
					<>
						The world's most prestigious company purportedly has a branch that's been
						overrun by an actual cult. Creepy to think about: Imagine starting a new job
						with coworkers like these!
					</>
				}
				link={
					'https://www.theverge.com/2022/6/19/23174605/go-read-this-report-google-contractor-fired-calling-out-cult-activity'
				}
			/>
			<LinkFrame
				title={`VFX artist explains light caustics`}
				description={
					<>
						A YouTube video from Corridor Crew showing the beauty and describing the
						difficulty of one particular visual effect.
					</>
				}
				link={'https://www.youtube.com/watch?v=7l6QOcgWXfI'}
			/>
			<LinkFrame
				title={`Japan's favorite chord progression`}
				description={
					<>
						Hearing this chord progression, I was slammed with immediate nostalgia for
						animes I watched when I was young. I'd never noticed this trend, but it
						feels so obvious once pointed out!
					</>
				}
				link={'https://www.youtube.com/watch?v=6aezSL_GvZA'}
			/>
			<LinkFrame
				title={`Nine Sols`}
				description={<>A beautiful gameplay sample of an upcoming videogame.</>}
				link={'https://www.youtube.com/watch?v=qaht-2_u-Gs'}
			/>
			<LinkFrame
				title={`Pen-spinning hobby drama`}
				description={
					<>
						r/hobbydrama is consistently one of my favorite Reddits to read when I want
						something light, silly, or dumb. This post is about the competitive world of
						pen-spinning; I highly recommend clicking on the YouTube links inside, which
						are marvelous to watch.
					</>
				}
				link={
					'https://www.reddit.com/r/HobbyDrama/comments/vlgyqa/penspinning_the_biggest_case_of_cheating_in_pen/'
				}
			/>
			<LinkFrame
				title={`Silly or cute`}
				description={
					<>
						I want to end every link roundup with something short and silly or cute.
						Think Reddit memes and TikTok. Here's one from r/maybemaybemaybe.
					</>
				}
				link={'https://www.reddit.com/r/maybemaybemaybe/comments/vy8o51/maybe_maybe_maybe/'}
			/>
		</>
	)
}

export const POST_00132: IPost = {
	id: 132,
	title: 'Link Roundup - 07/14/2022',
	subtitle: `Crypto, cults and caustics.`,
	createdTime: 1657828600000,
	route: PageRoutes.Home,
	pivot: HomePivots.Posts,
	content: <PostContent />,
	imageSrc: LightbulbsAndLinksImage,
}
