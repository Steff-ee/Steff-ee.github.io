import React from 'react'
import { Dialogue } from '../../../components/content/dialogue'
import { StoryPivots } from '../../../pages/stories/stories.types'
import { PageRoutes } from '../../helpers/routes'
import { IPost } from '../post.types'

const DoctorStrangeImage = 'https://i.imgur.com/z8SgdC3.jpg'

const PostContent: React.FunctionComponent = (): JSX.Element => {
	return (
		<>
			<Dialogue
				lines={[
					{
						slug: 'EXT. ROOFTOP - AFTER RESCUING AMERICA AND INTERRING OTHER-STRANGE',
					},
					{ by: 'WONG', says: 'This isn’t sorcery.' },
					{ by: 'STRANGE', says: 'It’s witchcraft.' },
					{ by: 'WONG', says: 'Do we know anyone who’s faced such a thing?' },
					{ by: 'STRANGE', says: 'I think I might.' },
					{ transition: 'CUT TO:' },
					{ slug: 'INT. SANCTUM SANCTORUM BEDROOM' },
					{
						text: 'Milk and cookies, in Wong’s hands, are given to Strange, who’s wearing pajamas and a nightcap.',
					},
					{
						by: 'WONG',
						says: 'This is a waste of time. We can protect her better in Kamar Taj.',
					},
					{
						by: 'STRANGE',
						says: 'It’s like I said: Dreams are windows into the lives of our multiversal selves. If there’s anyone who knows what we’re dealing with, it’s another me.',
					},
					{
						text: 'Wong grumbles but accedes. He withdraws his phone and starts up a PODCAST called LUCID DREAMING FOR BEGINNERS, scrubbing past its intro.',
					},
					{
						by: 'PODCAST SPEAKER #1',
						says: 'I assert control over my dreams almost every night. It’s easy for me, but it didn’t used to be. It’s a skill I’ve developed with practice.',
					},
					{
						by: 'PODCAST SPEAKER #2',
						says: 'What are the most important first steps in learning how to lucid dream?',
					},
					{
						text: 'Strange closes his eyes. We enter the kaleidoscopic world of his imagination.',
					},
					{
						by: 'PODCAST SPEAKER #1',
						says: 'You need to keep an eye out for nonsense. Dreams are not real, and they always leave clues.',
					},
					{
						by: 'PODCAST SPEAKER #2',
						says: 'In some cultures, dreams are considered to be sources of truth, reflections of reality that always hold some deeper meaning. Are you saying we shouldn’t take dreams seriously?',
					},
					{
						by: 'PODCAST SPEAKER #1',
						says: 'Not at all. Dreams may very well be windows to truth, but they’re seen through our fallible eyes and interpreted by our unreliable brains. The story you experience might be realistic, but the details will be vague: Hands might have the wrong number of fingers. Books may have titles that morph every time you look at them. Clocks won’t keep consistent time.',
					},
					{
						text: 'We see each of these occur as the speaker narrates; Strange is dreaming, and realizes it.',
					},
					{
						by: 'PODCAST SPEAKER #1',
						says: 'Once you’ve noticed the inconsistencies, focus! Hang on to that thread and don’t forget. Assert your control.',
					},
					{
						text: 'Strange flies through a wonderfully weird dream world and begins to run into himself—repeatedly. He talks to each Strange urgently (sometimes shouting, as the communication can be difficult across the languid barrier of dreams), then kicks up dust or other-worldly gunk in his wake every time he flies off.',
					},
					{ by: 'PODCAST SPEAKER #1', says: 'Keep trying. Eventually you will succeed.' },
					{
						text: 'Strange finds a SCARLET STRANGE, who notably has three eyes, a scarlet crown, and a floating array of both sorceries and witchcraft runes. He’s also drinking a mysterious dark blue substance.',
					},
					{ by: 'STRANGE', says: 'Hey, HEY! A MOMENT OF YOUR TIME!' },
					{ by: 'SCARLET STRANGE', says: 'I hear you! You don’t have to shout.' },
					{ by: 'STRANGE', says: 'Listen, I’m you-' },
					{ by: 'SCARLET STRANGE', says: 'Clearly.' },
					{
						by: 'STRANGE',
						says: '-from another universe. I need your help. Specifically, I need help with matters of witchcraft.',
					},
					{ by: 'SCARLET STRANGE', says: 'I know.' },
					{ by: 'STRANGE', says: 'You know?' },
					{
						by: 'SCARLET STRANGE',
						says: 'Yeah, yeah. You’re not the first one of me to stop by. Multiverse-traversing demons, right? Your problem is Wanda.',
					},
					{ by: 'STRANGE', says: 'Wanda?' },
					{
						by: 'SCARLET STRANGE',
						says: 'Wanda Maximoff, witch, mutant, former avenger, ring any bells?',
					},
					{ by: 'STRANGE', says: 'But why would she-' },
					{
						by: 'SCARLET STRANGE',
						says: 'Go confront her, but when you do, bring someone along who’s surreptitious and adept with either sleeping darts or knockout gas. Your universe have a Clint Barton or Natasha Romanoff? Either one would do.',
					},
					{ by: 'STRANGE', says: 'Yes, but-' },
					{
						text: 'Scarlet Strange’s hazy figure sharpens into sudden clarity. The substance he’s been drinking is revealed: A bottle of cold medicine.',
					},
					{
						by: 'SCARLET STRANGE',
						says: '(sneezes) I’m sick, my Sanctum Sanctorum has gone missing, and Mysterio just went and taught himself how to do real magic, so I’ve got my hands full. Just tell Wanda to sign up for adoption and she’ll be fine, trust me.',
					},
				]}
			/>
		</>
	)
}

export const POST_00130: IPost = {
	id: 130,
	title: 'Doctor Strange and the Multiverse of Lucidity',
	subtitle: `How Doctor Strange 2 should have ended.`,
	createdTime: 1657164300000,
	route: PageRoutes.Stories,
	pivot: StoryPivots.Posts,
	content: <PostContent />,
	imageSrc: DoctorStrangeImage,
}
