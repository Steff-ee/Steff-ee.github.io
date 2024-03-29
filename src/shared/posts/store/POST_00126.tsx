import React from 'react'
import { PullQuote } from '../../../components/content/pullQuote'
import { ConjecturePivots } from '../../../pages/conjectures/conjectures.types'
import { PageRoutes } from '../../helpers/routes'
import { useLightTextStyle, useTitleTextStyle } from '../../helpers/useStyles'
import { IPost } from '../post.types'

const VotingRightsImage =
	'https://images.unsplash.com/photo-1619059617660-d42ec4abe29a?fit=crop&w=880&q=80'

const PostContent: React.FunctionComponent = (): JSX.Element => {
	const lightTextStyle = useLightTextStyle()
	const titleTextStyle = useTitleTextStyle()

	return (
		<>
			<PullQuote
				lines={[
					<>
						“I feel like my voice doesn't matter.”{' '}
						<a
							href="https://www.npr.org/2018/09/10/645223716/on-the-sidelines-of-democracy-exploring-why-so-many-americans-dont-vote"
							target="_blank"
						>
							[1]
						</a>
					</>,
					<>
						“Honestly, Florida has never had free and fair elections.”{' '}
						<a
							href="https://fivethirtyeight.com/features/why-younger-americans-dont-vote-more-often-no-its-not-apathy/"
							target="_blank"
						>
							[2]
						</a>
					</>,
					<>
						“[With] each [election] I am increasingly more jaded.”{' '}
						<a
							href="https://fivethirtyeight.com/features/why-younger-americans-dont-vote-more-often-no-its-not-apathy/"
							target="_blank"
						>
							[2]
						</a>
					</>,
					<>
						“What good does it do, though, when they'll promise you anything and then
						it's a lie.”{' '}
						<a
							href="https://fivethirtyeight.com/features/why-younger-americans-dont-vote-more-often-no-its-not-apathy/"
							target="_blank"
						>
							[2]
						</a>
					</>,

					<>
						“I felt cornered. We were stuck between Trump and Hillary. They really left
						us with no choice.”{' '}
						<a
							href="https://www.jacobinmag.com/2019/08/nonvoter-revolution-income-inequality-apathy-voting"
							target="_blank"
						>
							[3]
						</a>
					</>,
				]}
			/>

			<p>Voting is the most sacred right of any democracy.</p>

			<p>
				In early America, that right only extended to white male landowners. Thanks to the
				blood spilt for emancipation and civil rights, that right has extended to all races
				and sexes—but not yet all Americans.
			</p>

			<p>
				A democracy can not be said to represent all its people when{' '}
				<a
					href="https://en.wikipedia.org/wiki/Voter_turnout_in_the_United_States_presidential_elections"
					target="_blank"
				>
					less than half
				</a>{' '}
				its people turn out to vote. When rulers are accountable to fewer people, their
				actions are free to be that much more{' '}
				<a
					href="https://en.wikipedia.org/wiki/The_Dictator's_Handbook#Contents"
					target="_blank"
				>
					tyrannical
				</a>
				. A better America would have a voter turnout of 100%, but such a turnout would only
				be possible with a voting system that inspired more faith than disillusionment. For
				that, America needs massive, multifaceted electoral reform.
			</p>

			<p>
				These will not be easy changes. Some of them will require amending the Constitution.
				All of them are vital:
			</p>

			<div style={titleTextStyle}>Abolish Voting Barriers</div>

			<p>
				<i>“Honestly, Florida has never had free and fair elections.”</i>
			</p>

			<p>
				No one should ever be excluded from voting because they work too many jobs and can’t
				take the time off, or because their signature was rejected, or because ballot
				instructions were confusing.
			</p>

			<p>
				Election day needs to be a holiday; financial assistance needs to be provided to
				those who need it; all forms of voter suppression must be eliminated with prejudice.
			</p>

			<div style={titleTextStyle}>Replace Plurality Voting</div>

			<p>
				<i>
					“I felt cornered. We were stuck between Trump and Hillary. They really left us
					with no choice.”
				</i>
			</p>

			<p>
				Plurality voting inevitably results in two party systems and two party systems
				inevitably deprive voters of choice.{' '}
			</p>

			<p>
				The lowest cost, easiest fix is switching presidential elections and other down
				ballot elections to{' '}
				<a href="https://steff-ee.github.io//#/conjecture/posts/110" target="_blank">
					approval voting
				</a>
				. Later, America can switch to an even better system such as{' '}
				<a
					href="https://medium.com/@jameson.quinn/make-all-votes-count-part-2-single-winner-5a2fb47123d5"
					target="_blank"
				>
					3-2-1 voting
				</a>
				.
			</p>

			<div style={titleTextStyle}>Expand the House</div>

			<p>
				<i>
					“What good does it do, though, when they'll promise you anything and then it's a
					lie.”
				</i>
			</p>

			<p>
				People want to feel like their voices are heard, but their voices{' '}
				<a
					href="https://www.vox.com/2018/6/4/17417452/congress-representation-ratio-district-size-chart-graph"
					target="_blank"
				>
					instead drown
				</a>{' '}
				in a sea of humanity when only 535 Congress members represent a nation of 330
				million. We need to strike down the unconstitutional{' '}
				<a href="https://en.wikipedia.org/wiki/Reapportionment_Act_of_1929" target="_blank">
					Reapportionment Act
				</a>{' '}
				and return to having one representative per thirty-thousand citizens.
			</p>

			<div style={titleTextStyle}>Abolish the Electoral College</div>

			<p>
				<i>“[With] each [election] I am increasingly more jaded.”</i>
			</p>

			<p>
				Twice in the span of sixteen years, the more popular presidential candidate lost.
				Half a million more Americans voted for Gore than Bush. Three million more Americans
				voted for Clinton than Trump.
			</p>

			<p>
				How many Americans don’t bother to vote because they’re conservative and living in a
				blue state? Or liberal and living in a red state?
			</p>

			<p>
				The argument in favor of the electoral college focuses on states' rights. Two
				hundred years ago, when the country was still a literal union of states with
				distinct cultures and politics, this argument made sense. Now, however, we have
				phones and airplanes and the internet, and we see ourselves as{' '}
				<a
					href="https://www.vox.com/polyarchy/2018/5/31/17406590/local-national-political-institutions-polarization-federalism"
					target="_blank"
				>
					Americans first
				</a>
				. The electoral college granted equality to states; now it subjects Americans to a
				grand inequality.
			</p>

			<p>
				An Alaskan has a vote worth{' '}
				<a
					href="https://wallethub.com/edu/how-much-is-your-vote-worth/7932"
					target="_blank"
				>
					one hundred times
				</a>{' '}
				more than an Oklahoman's vote.
			</p>

			<p>
				There's another important reason to abolish the electoral college. Consider{' '}
				<a
					href="https://thetriad.thebulwark.com/p/a-crisis-is-unfolding-right-now"
					target="_blank"
				>
					this hypothetical
				</a>
				: An incumbent president wins the popular vote while their challenger wins the
				electoral college by a slim margin. Democracy demands a peaceful transition of
				power, but this incumbent president lies, claiming that the challenger's slim
				victory in each swing state was entirely due to fraudulent ballots. The country
				could slide dangerously close to autocracy. Depending only on the popular vote
				increases the margins of victory and decreases a corrupt incumbent's chances of
				undermining democracy.
			</p>

			<p>Ultimately, though, I think it boils down to this:</p>

			<p>
				All humans are created equal, endowed with certain unalienable Rights, among these
				Life, Liberty and the pursuit of Happiness. Should their right to Vote not also be
				equal and unalienable?
			</p>

			<div style={titleTextStyle}>Incentivize Voting</div>

			<p>
				<i>“I feel like my voice doesn't matter.”</i>
			</p>

			<p>
				The{' '}
				<a href="https://en.wikipedia.org/wiki/Paradox_of_voting" target="_blank">
					paradox of voting
				</a>
				: You feel that your vote can’t possibly matter, so you choose not to vote. Except
				there are millions of others who express the same sentiment, and in doing so,
				silence a giant bloc of voters who could have effected significant change.
			</p>

			<p>
				This paradox is easily eliminated by making voting mandatory, which would be
				technically feasible once all barriers to voting have been abolished. However, many
				Americans are likely to resist the proposition of <i>anything</i> becoming
				mandatory, so instead I suggest to heavily incentivize voting: Give $500 or more to
				every person who votes. Give more to parents, so they'll have an even greater
				incentive to impart this civic duty upon their children. Give, because the
				investment in democracy is worth it.
			</p>
		</>
	)
}

export const POST_00126: IPost = {
	id: 126,
	title: 'Electoral Reform',
	subtitle: `Your vote matters. But we can make it matter more.`,
	createdTime: 1604356641000,
	route: PageRoutes.Conjecture,
	pivot: ConjecturePivots.Posts,
	content: <PostContent />,
	imageSrc: VotingRightsImage,
}
