import React, { useContext } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { SeasonsContext } from '../../../modes/seasons/seasons'
import { Seasons } from '../../../modes/seasons/seasonsHelpers'
import { Colors } from '../../helpers/constants'
import { CircadianMood, getCircadianMood } from '../../helpers/time'

const moveSpeed = 2
const maxSize = 6
const minSize = 3
const maxOpacity = 1
const minOpacity = 0.6
const interactionDistance = 450

export const Fireflies: React.FunctionComponent = React.memo(() => {
	const mood = getCircadianMood()
	const { season } = useContext(SeasonsContext)
	const enableFireflies = season === Seasons.Winter && mood !== CircadianMood.Day

	let count = 30
	if (mood === CircadianMood.Night) {
		count = 60
	}

	return (
		<>
			{enableFireflies && (
				<Particles
					id="tsparticles"
					init={loadFull}
					style={{ position: 'absolute', left: 0 }}
					width={'100%'}
					height={'100%'}
					options={{
						fullScreen: { enable: false },
						particles: {
							number: {
								value: count,
							},
							color: {
								value: Colors.Firefly,
							},
							shape: {
								type: 'circle',
							},
							opacity: {
								value: maxOpacity,
								animation: {
									enable: true,
									speed: 3,
									minimumValue: minOpacity,
									sync: false,
								},
							},
							size: {
								value: maxSize,
								animation: {
									enable: true,
									speed: 4,
									minimumValue: minSize,
									sync: false,
								},
							},
							move: {
								enable: true,
								speed: moveSpeed,
								random: true,
								direction: 'none',
								outModes: {
									default: 'out',
								},
								bounce: false,
								straight: false,
							},
						},
						interactivity: {
							events: {
								onhover: {
									enable: true,
									mode: ['bubble', 'repulse', 'slow'],
								},
							},
							modes: {
								bubble: {
									size: 4,
									opacity: 0.2,
									distance: interactionDistance,
								},
								repulse: {
									distance: interactionDistance,
									maxSpeed: 0.2,
								},
								slow: {
									radius: interactionDistance,
									factor: 0.7,
								},
							},
						},
					}}
				/>
			)}
		</>
	)
})
