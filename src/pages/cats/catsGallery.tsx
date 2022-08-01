import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import React, { useContext } from 'react'
import { MediaContext, MediaSize } from '../../components/mediaProvider'
import { catPhotos } from '../../shared/helpers/catPhotos'

const CatsGallery: React.FunctionComponent = () => {
	const mediaSize = useContext(MediaContext)
	let cols = 3
	if (mediaSize === MediaSize.Small) {
		cols = 1
	} else if (mediaSize === MediaSize.Medium) {
		cols = 2
	}

	const height = Math.ceil(catPhotos.length / cols)

	return (
		<ImageList variant="masonry" cols={cols} gap={8}>
			{catPhotos.map((url, idx) => {
				const loading = idx % height <= 3 ? 'eager' : 'lazy'
				return (
					<ImageListItem key={`catPhoto-${idx}`}>
						<img src={url} loading={loading} />
					</ImageListItem>
				)
			})}
		</ImageList>
	)
}

export default CatsGallery
