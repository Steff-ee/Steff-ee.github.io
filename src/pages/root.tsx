import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { MediaProvider } from '../components/mediaProvider'
import { ClassicPageContainer } from '../modes/classic/classicPageContainer'
import { SeasonsProvider } from '../modes/seasons/seasons'
import '../scss/root.scss'
import { PageRoutes, RouteContext } from '../shared/helpers/routes'
import { commonIconProps } from '../shared/helpers/styles'
import { OpenPostsProvider } from '../shared/posts/openPosts'
import { PivotRoutes } from '../shared/posts/post.types'
import { ColorsProvider } from '../shared/presentational/hooks/useColors'
import { CatsPage } from './cats/cats'
import { PageNotFound } from './pageNotFound'

export const Root: React.FunctionComponent = (): JSX.Element => {
	const [prevPivots, setPrevPivots] = useState<{ [page: string]: PivotRoutes | undefined }>({})
	const setPrevPivot = (page: string, pivot: PivotRoutes): void => {
		setPrevPivots({ ...prevPivots, [page]: pivot })
	}

	return (
		<RouteContext.Provider value={{ prevPivots, setPrevPivot }}>
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
										<Route path={`/cats`} element={<CatsPage />} />
										<Route
											path={`/:page/:pivot/:postId`}
											element={<ClassicPageContainer />}
										/>
										<Route
											path={`/:page/:pivot`}
											element={<ClassicPageContainer />}
										/>
										<Route path={`/:page`} element={<ClassicPageContainer />} />
										<Route element={<PageNotFound />} />
									</Routes>
								</HashRouter>
							</MediaProvider>
						</ColorsProvider>
					</SeasonsProvider>
				</OpenPostsProvider>
			</IconContext.Provider>
		</RouteContext.Provider>
	)
}
