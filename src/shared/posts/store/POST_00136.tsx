import React from 'react'
import { HomePivots } from '../../../pages/home/home.types'
import { PageRoutes } from '../../helpers/routes'
import { LinkFrame } from '../../presentational/components/linkFrame'
import { IPost } from '../post.types'

const LinksImage =
	'https://images.unsplash.com/photo-1545987796-76e898746591?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'

const PostContent: React.FunctionComponent = (): JSX.Element => {
	return (
		<>
			<p>Link roundup for the four weeks or so preceding today, August 8th.</p>
			<LinkFrame
				title={`Showrunners don't know how well their shows are doing`}
				description={
					<>
						Eight different creators from Netflix, Hulu, and other streaming services
						describe the limited feedback they receive about their own shows.
					</>
				}
				link={
					'https://www.vulture.com/article/streaming-showrunners-data-transparency-tv-ratings.html'
				}
			/>
			<LinkFrame
				title={`I lost my life to Airbnb`}
				description={<>A story about obsessively renting out one's home.</>}
				link={'https://getpocket.com/explore/item/i-lost-my-life-to-airbnb'}
			/>
			<LinkFrame
				title={`‘They couldn’t even scream any more. They were just sobbing’`}
				description={<>About the amateur investors ruined by the crypto crash.</>}
				link={
					'https://www.theguardian.com/technology/2022/jul/12/they-couldnt-even-scream-any-more-they-were-just-sobbing-the-amateur-investors-ruined-by-the-crypto-crash'
				}
			/>
			<LinkFrame
				title={`I regret my $46k website redesign`}
				description={
					<>
						An excellent breakdown about how a simple project (originally estimated to
						cost between $7k and $15k) ballooned in scope and expense.
					</>
				}
				link={'https://mtlynch.io/tinypilot-redesign/'}
			/>
			<LinkFrame
				title={`Employees lament Mark Zuckerberg turning up the heat`}
				description={
					<>
						A peek behind the curtain at Meta and how their culture is changing during
						hard times.
					</>
				}
				link={
					'https://www.theverge.com/23277797/mark-zuckerberg-meta-facebook-employees-pressure'
				}
			/>
			<LinkFrame
				title={`Why game developers are revolting against Unity`}
				description={
					<>
						Unity is a company I like, which makes the world's second most popular
						videogame engine, after Epic Game's Unreal Engine. My understanding is that
						their engine is more popular among indie developers and best at AR/VR, but
						their reputation is not as sterling as it once was (and now there's a new,
						growing competitor in the form of Godot, an open source engine). Here's an
						interesting article about Unity's recent, controversial move to merge with
						an ad monetization company.
					</>
				}
				link={
					'https://www.protocol.com/newsletters/entertainment/unity-backlash-game-developers-ironsource'
				}
			/>
			<LinkFrame
				title={`Absurd trolley problems`}
				description={
					<>
						Fun and engaging hypotheticals! Personally, I'm most surprised by the
						proportion of respondents who would choose to kill their own clones.
					</>
				}
				link={'https://neal.fun/absurd-trolley-problems/'}
			/>
			<LinkFrame
				title={`Etsy’s homepage grid`}
				description={
					<>
						An interesting Twitter thread about a developer at Etsy during the mid
						2000's.
					</>
				}
				link={'https://twitter.com/mcfunley/status/1550219636464967680'}
			/>
			<LinkFrame
				title={`Sony superhero hobby drama`}
				description={
					<>
						r/hobbydrama breaks down how the internet trolled Sony into wasting more
						money on a bad movie.
					</>
				}
				link={
					'https://www.reddit.com/r/HobbyDrama/comments/vj1g8c/movies_morbius_sweep_how_an_internet_meme_caused/'
				}
			/>
			<LinkFrame
				title={`Silly or cute`}
				link={
					'https://www.reddit.com/r/Eyebleach/comments/w7x3lp/buddhist_monk_i_will_continue_praying/'
				}
			/>
			<LinkFrame
				title={`Music`}
				description={
					<>
						I decided to also share music every month; here's Dancing in the Dark by
						Bass Astral x Igo, feat. Runforrest.
					</>
				}
				link={'https://www.youtube.com/watch?v=cDA1e7bl8nc'}
			/>
		</>
	)
}

export const POST_00136: IPost = {
	id: 136,
	title: 'Link Roundup - 08/08/2022',
	subtitle: `Tech drama and trolleys.`,
	createdTime: 1659980700000,
	route: PageRoutes.Home,
	pivot: HomePivots.Posts,
	content: <PostContent />,
	imageSrc: LinksImage,
}
