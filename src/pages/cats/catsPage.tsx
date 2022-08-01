import React, { Suspense } from 'react'
import { SeasonalPageTemplate } from '../../modes/classic/seasonalPageTemplate'
const CatsGallery = React.lazy(() => import('./catsGallery'))

export const CatsPage: React.FunctionComponent = () => {
	return (
		<SeasonalPageTemplate
			showPostsNav={false}
			Content={
				<Suspense>
					<CatsGallery />
				</Suspense>
			}
		/>
	)
}
