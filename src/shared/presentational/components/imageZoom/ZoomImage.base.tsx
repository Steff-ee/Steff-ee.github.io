import React from 'react'
import { useImageZoomOnHover } from './ZoomImage.helpers'
import { IZoomImageProps } from './ZoomImage.types'

const ZoomImageBase: React.FunctionComponent<IZoomImageProps> = (props) => {
	return useImageZoomOnHover(<img {...props} />)
}

export default ZoomImageBase
