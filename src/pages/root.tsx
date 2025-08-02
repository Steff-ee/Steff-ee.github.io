import { IconContext } from '@react-icons/all-files/lib/esm'
import React from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { MediaProvider } from '../components/mediaProvider'
import { PostsPage } from '../modes/classic/classicPageContainer'
import { SeasonsProvider } from '../modes/seasons/seasons'
import '../scss/root.scss'
import { PageRoutes } from '../shared/helpers/routes'
import { commonIconProps } from '../shared/helpers/styles'
import { OpenPostsProvider } from '../shared/posts/openPosts'
import { ColorsProvider } from '../shared/presentational/hooks/useColors'
import { CatsPage } from './cats/catsPage'
import { PageNotFound } from './pageNotFound'
import { AboutPage } from './home/about'
import { Resume } from './home/resume'

export const Root: React.FunctionComponent = (): JSX.Element => {
	return (
		<IconContext.Provider value={commonIconProps}>
			<OpenPostsProvider>
				<SeasonsProvider>
					<ColorsProvider>
						<link
							href="https://fonts.googleapis.com/css?family=Source+Code+Pro:300,400|Open+Sans:400,400i,600|Montserrat:400,500,600&display=swap"
							rel="stylesheet"
						/>
						<MediaProvider>
							<HashRouter>
								<Routes>
									<Route
										path={`/`}
										element={<Navigate to={PageRoutes.Home} />}
									/>
									<Route path={'/' + PageRoutes.Home} element={<AboutPage />} />
									<Route path={'/' + PageRoutes.Posts} element={<PostsPage />} />
									<Route path={'/' + PageRoutes.Cats} element={<CatsPage />} />
									<Route path={'/' + PageRoutes.Resume} element={<Resume />} />
									<Route
										path={`/${PageRoutes.Posts}/:postId`}
										element={<PostsPage />}
									/>
									<Route element={<PageNotFound />} />
								</Routes>
							</HashRouter>
						</MediaProvider>
					</ColorsProvider>
				</SeasonsProvider>
			</OpenPostsProvider>
		</IconContext.Provider>
	)
}
