import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import React, { useContext } from 'react'
import { MediaContext, MediaSize } from '../../components/mediaProvider'
import { catPhotos } from '../../shared/helpers/catPhotos'

export const CatsPage: React.FunctionComponent = () => {
	const mediaSize = useContext(MediaContext)
	let cols = 3
	if (mediaSize === MediaSize.Small) {
		cols = 1
	} else if (mediaSize === MediaSize.Medium) {
		cols = 2
	}

	return (
		<ImageList variant="masonry" cols={cols} gap={8}>
			{catPhotos.map((url, idx) => (
				<ImageListItem key={`catPhoto-${idx}`}>
					<img
						src={`${url}?w=248&fit=crop&auto=format`}
						srcSet={`${url}?w=248&fit=crop&auto=format&dpr=2 2x`}
						loading="lazy"
					/>
				</ImageListItem>
			))}
		</ImageList>
	)
}
