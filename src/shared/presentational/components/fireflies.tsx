import React from 'react'
import Particles from 'react-tsparticles'
import { Colors } from '../../helpers/constants'
import { CircadianMood, getCircadianMood } from '../../helpers/time'

export interface IFirefliesProps {
	style?: React.CSSProperties
	width?: string
	height?: string
}

interface IHighlightProps {
	maxSize: number
	minSize: number
	maxOpacity: number
	minOpacity: number
}

export const Fireflies: React.FunctionComponent<IFirefliesProps> = (props) => {
	const { style, width, height } = props
	const mood = getCircadianMood()
	const animSpeed = 3
	const moveSpeed = 2
	const interactionDistance = 200
	const bubbleSize = 6

	let count
	if (mood === CircadianMood.Night) {
		count = 60
	} else if (mood === CircadianMood.Day) {
		count = 0
	} else {
		count = 20
	}

	const options: IHighlightProps = {
		maxSize: 5,
		minSize: 2,
		maxOpacity: 1,
		minOpacity: 0.8,
	}
	// options = {
	// 	maxSize: 3,
	// 	minSize: 1,
	// 	maxOpacity: 0.8,
	// 	minOpacity: 0.2,
	// }
	const particlesLoaded = async () => {
		console.log('loaded!')
	}

	return (
		<Particles
			params={{
				fullScreen: { enable: true },
				particles: {
					number: {
						value: count,
					},
					color: {
						value: Colors.Firefly,
					},
					shape: {
						type: 'circle' as const,
					},
					opacity: {
						value: options.maxOpacity,
						random: true,
						anim: {
							enable: true,
							speed: animSpeed,
							opacity_min: options.minOpacity,
							sync: false,
						},
					},
					size: {
						value: options.maxSize,
						random: true,
						anim: {
							enable: true,
							speed: animSpeed,
							size_min: options.minSize,
							sync: false,
						},
					},
					line_linked: {
						enable: false,
						color: Colors.Firefly,
						width: 2,
					},
					move: {
						enable: true,
						speed: moveSpeed,
						random: true,
						out_mode: 'out' as const,
						bounce: false,
					},
				},
				interactivity: {
					events: {
						onhover: {
							enable: true,
							mode: 'bubble',
						},
					},
					modes: {
						bubble: {
							size: bubbleSize,
							distance: interactionDistance,
						},
					},
				},
			}}
		/>
	)
}
