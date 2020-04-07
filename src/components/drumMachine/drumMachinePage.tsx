import { faPlayCircle, faStopCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import foggyTown from 'Assets/images/foggy_town.jpg'
import React, { useEffect, useState } from 'react'
import { Dropdown } from 'semantic-ui-react'
import { ClassicPageTemplate } from '../../modes/classic/classicPageTemplate'
import { classicBackgroundTextureStyle } from '../../shared/helpers/styles'
import { DrumMachineDisplay } from './drumMachineDisplay'
import { createPercussionInstrument } from './helpers'
import { BeatUnit, IPercussionSequence } from './music.types'

const Kick = createPercussionInstrument('Kick')
const Snare = createPercussionInstrument('Snare')
const ClosedHat = createPercussionInstrument('Closed Hat')
const OpenHat = createPercussionInstrument('Open Hat')

const FourOnTheFloor: IPercussionSequence = {
	author: 'Splice',
	name: 'Four On The Floor',
	tracks: [
		{
			instrument: Kick,
			smallestBeatUnit: 4,
			length: 4,
			pattern: [1, 0, 0, 0],
		},
		{
			instrument: Snare,
			smallestBeatUnit: 4,
			length: 16,
			pattern: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
		},
		{
			instrument: OpenHat,
			smallestBeatUnit: 4,
			length: 4,
			pattern: [0, 0, 1, 0],
		},
		{
			instrument: ClosedHat,
			smallestBeatUnit: 4,
			length: 4,
			pattern: [1, 0, 0, 0],
		},
	],
}

const DifferentBeatUnits: IPercussionSequence = {
	author: 'Steffee',
	name: 'Different Beat Units',
	tracks: [
		{
			instrument: Kick,
			smallestBeatUnit: 4,
			length: 4,
			pattern: [1, 0, 1, 0],
		},
		{
			instrument: Snare,
			smallestBeatUnit: 16,
			length: 7,
			pattern: [0, 0, 0, 0, 1, 0, 1],
		},
		{
			instrument: OpenHat,
			smallestBeatUnit: 32,
			length: 4,
			pattern: [0, 0, 1],
		},
		{
			instrument: ClosedHat,
			smallestBeatUnit: 16,
			length: 3,
			pattern: [1, 0, 0],
		},
	],
}

const SimpleTwoTrack: IPercussionSequence = {
	author: 'Steffee',
	name: 'Simple Two Track',
	tracks: [
		{
			instrument: Kick,
			smallestBeatUnit: 4,
			length: 4,
			pattern: [1, 0, 1, 0],
		},
		{
			instrument: Snare,
			smallestBeatUnit: 8,
			length: 8,
			pattern: [0, 0, 1, 0, 1, 0, 1, 0],
		},
	],
}

const DefaultSequenceOptions = [FourOnTheFloor, DifferentBeatUnits, SimpleTwoTrack]
const DropdownOptions = DefaultSequenceOptions.map((sequence, index) => ({
	key: `sequence-${index}`,
	text: sequence.name,
	value: index,
}))

export function DrumMachinePage(): JSX.Element {
	const [smallestBeatUnit, setSmallestBeatUnit] = useState<BeatUnit | undefined>()
	const [isPlaying, setIsPlaying] = useState(false)
	// (TODO) implement pattern selection
	const [sequenceIndex, setSequenceIndex] = useState<number | undefined>()
	const sequence = sequenceIndex === undefined ? undefined : DefaultSequenceOptions[sequenceIndex]

	// automatically choose smallest beat unit of any track in the sequence
	// (TODO) use least common multiple to determine barLength
	useEffect(() => {
		if (sequence) {
			let newSmallestBeatUnit: BeatUnit = 1
			for (const track of sequence.tracks) {
				if (track.smallestBeatUnit > newSmallestBeatUnit) {
					newSmallestBeatUnit = track.smallestBeatUnit
				}
			}
			if (newSmallestBeatUnit !== smallestBeatUnit) {
				setSmallestBeatUnit(newSmallestBeatUnit)
			}
		}
	}, [sequence])

	const playIcon = isPlaying ? faStopCircle : faPlayCircle

	return (
		<ClassicPageTemplate
			Content={
				<div style={{ backgroundColor: 'black', color: 'white', padding: '16px 20px' }}>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							paddingBottom: '5px',
							height: '40px',
							lineHeight: '40px',
						}}
					>
						<div
							style={{ cursor: 'pointer', marginRight: '40px' }}
							onClick={(): void => setIsPlaying(!isPlaying)}
						>
							<FontAwesomeIcon icon={playIcon} size={'lg'} />
						</div>
						<Dropdown
							width={'210px'}
							selection={true}
							simple={true}
							options={DropdownOptions}
							placeholder={'Choose sequence'}
							onChange={(e, { value }): void => setSequenceIndex(value as number)}
						/>
					</div>
					{smallestBeatUnit && sequence && (
						<DrumMachineDisplay
							sequence={sequence}
							beatUnit={smallestBeatUnit}
							length={16}
							barLength={4}
							isPlaying={isPlaying}
						/>
					)}
				</div>
			}
			headerBackgroundImage={foggyTown}
			backgroundStyle={classicBackgroundTextureStyle}
			selectedPivotTitle={''}
			setPivot={(): void => {
				return
			}}
			pivotsItems={[]}
			showPostsNav={false}
			artistName={'an unknown photographer'}
			artistLink={'https://best-wallpaper.net/'}
		/>
	)
}
