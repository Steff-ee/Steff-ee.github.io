import {
	faMinusCircle,
	faPlayCircle,
	faPlusCircle,
	faStopCircle,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { createPercussionInstrument } from './helpers'
import { IPercussionSequence } from './music.types'

export const Kick = createPercussionInstrument('Kick')
export const Snare = createPercussionInstrument('Snare')
export const ClosedHat = createPercussionInstrument('Closed Hat')
export const OpenHat = createPercussionInstrument('Open Hat')

export const FourOnTheFloor: IPercussionSequence = {
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

export const DifferentBeatUnits: IPercussionSequence = {
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

export const SimpleTwoTrack: IPercussionSequence = {
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

export const DefaultSequenceOptions = [FourOnTheFloor, DifferentBeatUnits, SimpleTwoTrack]
export const DropdownOptions = DefaultSequenceOptions.map((sequence, index) => ({
	key: `sequence-${index}`,
	text: sequence.name,
	value: index,
}))
export const minLength = 16
export const maxLength = 32

export function PlayButton(props: {
	isEnabled: boolean
	isPlaying: boolean
	setIsPlaying: (value: boolean) => void
}): JSX.Element {
	const { isEnabled, isPlaying, setIsPlaying } = props
	const playIcon = isPlaying ? faStopCircle : faPlayCircle

	return (
		<div
			style={{ cursor: 'pointer', marginRight: '40px' }}
			onClick={(): void => {
				if (isEnabled) {
					setIsPlaying(!isPlaying)
				}
			}}
		>
			<FontAwesomeIcon icon={playIcon} size={'lg'} />
		</div>
	)
}

export function LengthButtons(props: {
	isEnabled: boolean
	length: number
	setLength: (value: number) => void
}): JSX.Element {
	const { isEnabled, length, setLength } = props

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				width: '60px',
				marginLeft: '40px',
			}}
		>
			<div
				style={{ cursor: 'pointer' }}
				onClick={(): void => {
					if (isEnabled && length > minLength) {
						setLength(length - 1)
					}
				}}
			>
				<FontAwesomeIcon icon={faMinusCircle} size={'lg'} />
			</div>
			<div
				style={{ cursor: 'pointer' }}
				onClick={(): void => {
					if (isEnabled && length < maxLength) {
						setLength(length + 1)
					}
				}}
			>
				<FontAwesomeIcon icon={faPlusCircle} size={'lg'} />
			</div>
		</div>
	)
}