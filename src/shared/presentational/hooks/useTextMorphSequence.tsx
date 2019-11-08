import { debounce } from 'lodash'
import React, { useEffect, useState } from 'react'
import { useTextMorph } from './useTextMorph'

export type ITextSequence = Array<{
	texts: string[]
	wait: number
}>

/**
 * on hover:
 * morphs texts through the sequence provided, starting at index 0
 * will not begin morphing until having hovered for startTime milliseconds
 * will stop morphing when no longer hovering, though there is a delay
 */
export const useTextMorphSequence = (textSequence: ITextSequence): JSX.Element => {
	const [isHovering, setIsHovering] = useState<boolean>(false)
	const [hasBeenHovering, setHasBeenHovering] = useState<boolean>(false)
	const [isMorphing, setIsMorphing] = useState<boolean>(false)
	const [currentIndex, setCurrentIndex] = useState<number>(0)
	const nextText = isMorphing ? textSequence[currentIndex + 1] : textSequence[currentIndex]
	const { morphedTexts, isMorphFinished } = useTextMorph(
		textSequence[0].texts,
		nextText.texts,
		false
	)

	const onMouseEnter = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
		const startWait = textSequence[0].wait
		setIsHovering(true)
		debounce(setHasBeenHovering, startWait)(true)
	}

	const onMouseLeave = (): void => {
		const endWait = textSequence[textSequence.length - 1].wait
		setIsHovering(false)
		debounce(setHasBeenHovering, endWait)(false)
	}

	useEffect(() => {
		if (isHovering && hasBeenHovering) {
			// don't start morphing until the user has been hovering a while
			setIsMorphing(true)
		} else if (!isHovering && !hasBeenHovering) {
			setIsMorphing(false)
		}

		if (isHovering && isMorphing) {
			// if we're in the middle of a morph and continuing to hover, then advance
			if (isMorphFinished && textSequence.length > currentIndex + 2) {
				const currentWait = textSequence[currentIndex + 1].wait
				debounce(setCurrentIndex, currentWait)(currentIndex + 1)
			}
		} else if (!isMorphing && !hasBeenHovering) {
			// if we've stopped morphing for a while, go back to the start
			setCurrentIndex(0)
		}
	})

	return (
		<div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
			{morphedTexts.join(' ')}
		</div>
	)
}