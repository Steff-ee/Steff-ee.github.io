import { initializeIcons } from '@uifabric/icons'
import { loadTheme } from '@uifabric/styling'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { MediaProvider } from '../components/mediaProvider'
import { classicColors } from '../modes/classic/classicConstants'
import { Modes, ModesContext } from '../modes/modeSwitcher'
import { SeasonsProvider } from '../modes/seasons/seasons'
import { PageRoutes, RouteContext } from '../shared/helpers/routes'
import { OpenPostsProvider } from '../shared/posts/openPosts'
import { IsNavBarOpenContext } from '../shared/presentational/components/navBarHelpers'
import {
	ColorsContext,
	defaultColorsContext,
	IColorsContext,
} from '../shared/presentational/hooks/useColors'
import { Conjecture } from './conjectures/conjectures'
import { Games } from './games/games'
import { Home } from './home/home'
import { PageNotFound } from './pageNotFound'
import './root.css'
import { Stories } from './stories/stories'

initializeIcons()

export const Root: React.FunctionComponent = (): JSX.Element => {
	const [isNavBarOpen, setIsNavBarOpen] = useState<boolean>(false)
	const [mode, setMode] = useState<Modes>(Modes.Classic)
	const [prevPivots, setPrevPivots] = useState<{ [page: string]: string | undefined }>({})
	const setPrevPivot = (page: string, pivot: string): void => {
		setPrevPivots({ ...prevPivots, [page]: pivot })
	}

	return (
		<ModesContext.Provider value={{ mode, setMode }}>
			<RouteContext.Provider value={{ prevPivots, setPrevPivot }}>
				<OpenPostsProvider>
					<SeasonsProvider>
						{(colors: IColorsContext): JSX.Element => {
							if (mode === Modes.Classic) {
								colors = { ...defaultColorsContext, ...classicColors }
							}

							useEffect(() => {
								loadTheme({
									semanticColors: {
										inputBackgroundChecked: colors.secondary,
									},
								})
							}, [])

							return (
								<ColorsContext.Provider value={colors}>
									<IsNavBarOpenContext.Provider
										value={{ isNavBarOpen, setIsNavBarOpen }}
									>
										<link
											href="https://fonts.googleapis.com/css?family=Cabin+Sketch|Comfortaa|Muli|Montserrat&display=swap"
											rel="stylesheet"
										/>
										<link
											rel="stylesheet"
											href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
										/>
										<MediaProvider>
											<BrowserRouter>
												<Switch>
													<Redirect
														exact={true}
														from="/"
														to={PageRoutes.Home}
													/>
													<Route
														path={`/${PageRoutes.Home}/:pivot?/:postId?`}
														component={Home}
													/>
													<Route
														path={`/${PageRoutes.Stories}/:pivot?/:postId?`}
														component={Stories}
													/>
													<Route
														path={`/${PageRoutes.Games}/:pivot?/:postId?`}
														component={Games}
													/>
													<Route
														path={`/${PageRoutes.Conjecture}/:pivot?/:postId?`}
														component={Conjecture}
													/>
													<Route path={'*'} component={PageNotFound} />
												</Switch>
											</BrowserRouter>
										</MediaProvider>
									</IsNavBarOpenContext.Provider>
								</ColorsContext.Provider>
							)
						}}
					</SeasonsProvider>
				</OpenPostsProvider>
			</RouteContext.Provider>
		</ModesContext.Provider>
	)
}
