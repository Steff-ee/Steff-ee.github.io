import React from 'react'
import { HomePivots } from '../../../pages/home/home.types'
import { PageRoutes } from '../../helpers/routes'
import { LinkFrame } from '../../presentational/components/linkFrame'
import { IPost } from '../post.types'

const Image = 'https://i.imgur.com/oYNSUoM.png'

const PostContent: React.FunctionComponent = (): JSX.Element => {
	return (
		<>
			<LinkFrame
				title={`Faster, Meaner, Deadlier: The Evolution of “BattleBots”`}
				description={
					<>
						As a kid, I always wanted to watch more BattleBots than I was able to catch.
						I thoroughly enjoyed getting the chance to read about its current state of
						competition.
					</>
				}
				link={'https://spectrum.ieee.org/battlebots-tech-evolution'}
			/>
			<LinkFrame
				title={`The Enigma Game: Why Didn't the Germans Know Their Cipher Was Broken?`}
				description={
					<>
						A fantastic Substack I've only just discovered, all about espionage
						throughout history.
					</>
				}
				link={'https://alexanderrose.substack.com/p/the-enigma-game'}
			/>
			<LinkFrame
				title={`Good news about Russia: bad news for Russia`}
				description={
					<>
						Also see{' '}
						<a
							href={
								'https://unchartedterritories.tomaspueyo.com/i/71994552/putins-asset'
							}
							target={'_blank'}
						>
							this
						</a>
						.
					</>
				}
				link={'https://maximumtruth.substack.com/p/bad-sign-for-russia-flights-sold'}
			/>
			<LinkFrame
				title={`No, Most Books Don't Sell Only a Dozen Copies`}
				description={
					<>An example of the maxim: Numbers don't lie; people lie with numbers.</>
				}
				link={'https://countercraft.substack.com/p/no-most-books-dont-sell-only-a-dozen'}
			/>
			<LinkFrame
				title={`Shane Gillis’s Fall and Rise`}
				description={
					<>
						An interesting read about a partially-cancelled comic, though one I've never
						watched nor heard. And speaking of cancellation,{' '}
						<a
							href={'https://www.readtpa.com/p/free-speech-and-cancel-culture-1'}
							target={'_blank'}
						>
							here
						</a>{' '}
						is an interesting debate between Parker Molloy and Freddie deBoer regarding
						cancel culture.
					</>
				}
				link={'https://www.newyorker.com/magazine/2022/09/26/shane-gillis-fall-and-rise'}
			/>
			<LinkFrame
				title={`Remembering all those times Google said it was committed to Stadia`}
				description={
					<>
						Back in 2020, I wrote a{' '}
						<a href={'https://steff-ee.github.io/#/games/posts/124'} target={'_blank'}>
							post
						</a>{' '}
						about Stadia, describing its niche market but also describing its long-term
						potential. Given enough investment, I still believe it could have created
						revolutionary levels of interactivity in gaming. Now, Stadia has been shut
						down. This should come as a surprise to no one, since Google had already
						hired 150 game developers across two new Google-branded game studios, only
						to then shutter them before ever allowing the studios to release a single
						game.
					</>
				}
				link={
					'https://www.theverge.com/2022/9/30/23378757/google-stadia-commitments-shutdown-rumors'
				}
			/>
			<LinkFrame
				title={`The Zenly implosion: Inside 6 months of tension, culture clash, and conflict`}
				description={
					<>
						One of the many failure modes of capitalism: The ability for one company to
						buy a competitor only to shut it down.
					</>
				}
				link={
					'https://restofworld.org/2022/fearing-competition-snap-decided-to-shut-down-zenly-rather-than-sell-it/'
				}
			/>
			<LinkFrame
				title={`Attempts to sensemake AI risk`}
				description={
					<>
						What is the chance that AI will go off the rails and happen to eliminate all
						of humanity? I could see it being a 1% chance, or 10%, or 0.001%, and I have
						no idea which to believe. That said,{' '}
						<a
							href={
								'https://astralcodexten.substack.com/p/chai-assistance-games-and-fully-updated'
							}
							target={'_blank'}
						>
							this
						</a>{' '}
						discussion did me feel less worried about our chances.
					</>
				}
				link={'https://aella.substack.com/p/my-attempts-to-sensemake-ai-risk'}
			/>
			<LinkFrame
				title={`Vilnius, Lithuania built a ‘portal’ to another city to help keep people connected`}
				description={<>This is just really cool.</>}
				link={
					'https://www.theverge.com/2021/5/30/22460964/vilnius-lithuania-portal-poland-connection-pandemic'
				}
			/>
			<LinkFrame
				title={`Using Artificial Intelligence To See How Some Celebrities Would Look Today If They Were Alive`}
				description={
					<>
						Alper Yesiltas has created some absolutely stunning pictures; my favorite is
						Michael Jackson's. The photos are sad to see, and bittersweet, somehow even
						inspiring, in an odd way. On the other end of the spectrum,{' '}
						<a href={'https://www.instagram.com/multiverse_celebrities/'}>here</a> are
						light-hearted pictures of celebrities cast in roles they never had.
					</>
				}
				link={
					'https://www.boredpanda.com/ai-images-of-celebrities-as-if-nothing-happened-to-them-alper-yesiltas/'
				}
			/>
			<LinkFrame
				title={`Tweaking seed images in addictive`}
				description={<>Mesmerizing cyborg art!</>}
				link={
					'https://www.reddit.com/r/StableDiffusion/comments/wrgzyl/tweaking_seed_images_in_addictive/'
				}
			/>
			<LinkFrame
				title={`Harry Mack: Omegle Bars 70`}
				description={
					<>The most amazing freestyle you'll ever have heard in your entire life.</>
				}
				link={'https://www.youtube.com/watch?v=AO0yvg0pLiM'}
			/>
			<LinkFrame
				title={`Someday aliens are going to land their saucers in a field somewhere in New Jersey and everything is going to go just fine right up until we try to explain our calendar to them`}
				description={
					<>My favorite is the part about September, October, November and December.</>
				}
				link={'https://threadreaderapp.com/thread/1572260363764400129.html'}
			/>
			<LinkFrame
				title={`Silly or cute`}
				link={'https://www.reddit.com/r/comics/comments/xbf6kz/oc_snugs/'}
			/>
			<LinkFrame
				title={`Silly or cute: Problem solving`}
				link={'https://www.reddit.com/r/cats/comments/xlxsdp/problem_solve/'}
			/>
			<LinkFrame
				title={`Silly or cute: Unforgivable shoe`}
				link={'https://www.reddit.com/r/aww/comments/xoueik/thats_a_fucking_black_shoe/'}
			/>
			<LinkFrame
				title={`Music`}
				description={<>"Here Comes The Feeling" by Until The Ribbon Breaks.</>}
				link={'https://open.spotify.com/track/5A9rMC7CvNbpgYVUjcXOWG'}
			/>
			<LinkFrame
				title={`Music: A throwback`}
				description={
					<>
						"Summertime" by Billy Stewart. I spent a decade of my life not knowing that
						"And the Living is Easy" by Guts is not original.
					</>
				}
				link={'https://open.spotify.com/track/4qH8fQ5Ub2r6llHnrRGM3w'}
			/>
		</>
	)
}

export const POST_00140: IPost = {
	id: 140,
	title: 'Link Roundup - 10/05/2022',
	subtitle: `AI art!`,
	createdTime: 1665025000000,
	route: PageRoutes.Home,
	pivot: HomePivots.Posts,
	content: <PostContent />,
	imageSrc: Image,
}
