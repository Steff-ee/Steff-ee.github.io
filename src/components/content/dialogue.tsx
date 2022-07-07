import React from 'react'
import { bottomContentMargin, transparentBackground } from '../../shared/helpers/styles'
import { useLightTextStyle } from '../../shared/helpers/useStyles'

export interface IDialogueLine {
	by?: string | JSX.Element
	says?: string | JSX.Element
	slug?: string | JSX.Element
	transition?: string | JSX.Element
	text?: string | JSX.Element
}

export interface IDialogueProps {
	lines: IDialogueLine[]
}

export const Dialogue: React.FunctionComponent<IDialogueProps> = (props) => {
	const { lines } = props
	const lightTextStyle = useLightTextStyle()

	return (
		<div
			style={{
				...lightTextStyle,

				backgroundColor: transparentBackground,
				marginBottom: bottomContentMargin,
			}}
		>
			{lines.map((line: IDialogueLine, index: number): JSX.Element => {
				return (
					<div key={`line-${index}`} style={{ padding: '13px' }}>
						{line.transition && (
							<div
								style={{
									fontFamily: 'Montserrat',
									textAlign: 'right',
									marginRight: 20,
								}}
							>
								{line.transition}
							</div>
						)}
						{line.slug && <div style={{ fontFamily: 'Montserrat' }}>{line.slug}</div>}
						{line.by && (
							<div style={{ fontFamily: 'Montserrat', textAlign: 'center' }}>
								{line.by}
							</div>
						)}
						{line.says && (
							<div style={{ maxWidth: 450, margin: 'auto' }}>{line.says}</div>
						)}
						{line.text && <div style={{ margin: '8px 0px' }}>{line.text}</div>}
					</div>
				)
			})}
		</div>
	)
}
