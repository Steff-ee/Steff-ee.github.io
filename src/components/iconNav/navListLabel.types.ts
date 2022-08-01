import { INavItem, NavOrientation } from "./iconNav.types"

export interface INavListLabelProps {
	navItem: INavItem | undefined
	orientation: NavOrientation

	/* Styling */
	width: string
	height: string
	rootStyle?: React.CSSProperties
	textStyle?: React.CSSProperties
}