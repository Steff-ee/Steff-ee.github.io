export interface IColors {
	/**
	 * Color of the website header title
	 */
	headerTitleText: string

	/**
	 * Color of the navbar commands and pivots while in the navbar
	 */
	navbarText: string

	/**
	 * Color of the background; not applicable when in Classic mode (Season.None)
	 */
	background: string

	/**
	 * Color of the navbar and the frame around the website header
	 */
	border: string

	/**
	 * Different shade of the border color for highlighting during hovering or selection
	 */
	borderHighlight: string

	/**
	 * Color of title text, body text, and pivots while not in the navbar
	 */
	text: string

	/**
	 * Color of the subtitle text
	 */
	subtitle: string

	link: string
	visitedLink: string
	linkHover: string
	visitedLinkHover: string
}
