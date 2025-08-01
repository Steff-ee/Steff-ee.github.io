import { useContext, useMemo } from "react"
import { SeasonsContext } from "../../modes/seasons/seasons"
import { Seasons } from "../../modes/seasons/seasonsHelpers"
import { useColors } from "../presentational/hooks/useColors"
import { OpaqueColors } from "./constants"

const backdropFilterNormal = 'blur(20px) saturate(180%)'
const backdropFilterBright = 'blur(20px) saturate(220%) brightness(2.2) grayscale(0.2)'

export const useFrostedGlass = (): React.CSSProperties => {
	const { season } = useContext(SeasonsContext)
	const { border } = useColors()

	return useMemo(() => {
		if (!CSS.supports('backdrop-filter', backdropFilterNormal)) {
			return { backgroundColor: border }
		}

		if (season === Seasons.Spring) {
			return {
				backdropFilter: backdropFilterBright,
				WebkitBackdropFilter: backdropFilterBright,
				backgroundColor: OpaqueColors.IceWhite
			}
		}

		return {
			backdropFilter: backdropFilterNormal,
			WebkitBackdropFilter: backdropFilterNormal,
			backgroundColor: OpaqueColors.Black
		}
	}, [border, season])
}
