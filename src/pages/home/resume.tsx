import React, { useContext } from 'react'
import { Divider } from '../../components/content/divider'
import { MediaContext, MediaSize } from '../../components/mediaProvider'
import { subscriptStyle } from '../../shared/helpers/styles'

const lightTextStyle: React.CSSProperties = {
	fontFamily: 'Montserrat',
	fontSize: '14px',
	lineHeight: '23px',
}

const titleTextStyle: React.CSSProperties = {
	fontFamily: 'Montserrat',
	fontSize: '36px',
	paddingBottom: '12px',
	letterSpacing: '3px',
}

const subtitleTextStyle: React.CSSProperties = {
	fontFamily: 'Montserrat',
	fontSize: '21px',
	letterSpacing: '1px',
}

const dividerStar = <div>✧</div>

const ResumeHeader: React.FunctionComponent = (): JSX.Element => {
	return (
		<div style={{ textAlign: 'center' }}>
			<div style={titleTextStyle}>DANIEL STEFFEE</div>
			<div style={subtitleTextStyle}>Software Engineer</div>
			<div
				style={{
					paddingTop: '12px',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				<div>dsteffee@alumni.stanford.edu</div>
				{dividerStar}
				<div>(352) 672-4266</div>
				{dividerStar}
				<div>Issaquah, WA</div>
				{dividerStar}
				<div>steff-ee.github.io</div>
			</div>
			<Divider thickness={2} rootStyle={{ padding: '12px' }} />
			<div style={subscriptStyle}>
				Adaptable Full Stack Web Developer with 10 years coding and 5 years' experience
				delivering and prioritizing the highest impact changes for customers without
				sacrificing code quality and reliability.
			</div>
		</div>
	)
}

interface IResumeSectionProps {
	title: string
	body: JSX.Element
}

const ResumeSection: React.FunctionComponent<IResumeSectionProps> = (
	props: IResumeSectionProps
): JSX.Element => {
	const { title, body } = props

	return (
		<div style={{ marginTop: '20px' }}>
			<div
				style={{
					fontFamily: 'Montserrat',
					fontSize: '23px',
					textAlign: 'center',
					marginBottom: '10px',
				}}
			>
				{title}
			</div>
			<div>{body}</div>
		</div>
	)
}

// replaces use of <li> to get around the univeral li styling in root.css
const ListItem: React.FunctionComponent<React.PropsWithChildren<{}>> = (
	props: React.PropsWithChildren<{}>
): JSX.Element => {
	return <li style={{ margin: '0px 0px 0px 10px' }}>{props.children}</li>
}

const ListHeader: React.FunctionComponent<React.PropsWithChildren<{}>> = (
	props: React.PropsWithChildren<{}>
): JSX.Element => {
	return <div style={{ marginTop: '6px', fontWeight: 600 }}>{props.children}</div>
}

interface IExperienceSubSectionProps {
	title: string
	timeRange: string
	subtext?: string
	body: JSX.Element
}

const ExperienceSubSection: React.FunctionComponent<IExperienceSubSectionProps> = (
	props: IExperienceSubSectionProps
): JSX.Element => {
	const { title, timeRange, body, subtext } = props

	return (
		<div style={{ marginBottom: '20px' }}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<div
					style={{
						fontWeight: 600,
						fontSize: '21px',
					}}
				>
					{title}
				</div>
				<div>{timeRange}</div>
			</div>
			<div>{subtext}</div>
			<div style={{ margin: '10px 0px 0px 15px' }}>{body}</div>
		</div>
	)
}

export const Resume: React.FunctionComponent = (): JSX.Element => {
	const mediaSize = useContext(MediaContext)

	if (mediaSize === MediaSize.Small) {
		return <div>Resume has yet to be implemented for mobile</div>
	}

	return (
		<div
			style={{
				...lightTextStyle,
				maxWidth: 850,
				maxHeight: 1100,
				backgroundColor: 'white',
				padding: '50px',
				border: '1px black solid',
				boxShadow: '3px 3px 1px darkgray',
			}}
		>
			<ResumeHeader />
			<ResumeSection
				title={'WORK EXPERIENCE'}
				body={
					<>
						<ExperienceSubSection
							title={'Microsoft'}
							timeRange={'2018 - present'}
							subtext={
								'Enterprise application, managing life cycle of low-code apps, project solutions, and sharing experiences'
							}
							body={
								<>
									<ListHeader>Code Architecture</ListHeader>
									<ListItem>
										Drive team to adopt Hooks and replace Redux with more
										productive patterns
									</ListItem>
									<ListItem>
										Run regular and ad-hoc design discussions to maintain code
										quality
									</ListItem>
									<ListHeader>Reliability</ListHeader>
									<ListItem>
										Triage bugs daily and generate service reports weekly and
										monthly
									</ListItem>
									<ListItem>
										Improve perceived performance through partial loading and
										track through revamped telemetry
									</ListItem>
									<ListHeader>Teamwork</ListHeader>
									<ListItem>
										Review all of team's pull requests, assist partner teams,
										guide vendors, and mentor interns
									</ListItem>
									<ListItem>
										Responsively dive into at-risk featurework to aid any
										feature crew in need
									</ListItem>
								</>
							}
						/>
						<ExperienceSubSection
							title={'TreeRing'}
							timeRange={'2015 - 2018'}
							subtext={
								'Consumer Yearbook Editor web application with high quality, robust print rendering'
							}
							body={
								<>
									<ListHeader>Primary Back-End Engineer</ListHeader>
									<ListItem>
										"Xylem" project: Re-architect the client/server framework in
										a team of two, like GraphQL but customized: unifying
										duplicate code, simplifying data access, and increasing
										expressiveness
									</ListItem>
									<ListItem>
										Prioritize back-end features and fixes by customer impact,
										difficulty, and ancillary benefit of code
									</ListItem>
									<ListItem>
										Manage all SQL queries for new requirements and
										optimizations
									</ListItem>
									<ListHeader>Customer Support Queue</ListHeader>
									<ListItem>
										Identify causes of customer concerns and address with fixes,
										scripts, and tests
									</ListItem>
									<ListItem>
										Balance between elegant, robust solutions and rapid-response
										repairs
									</ListItem>
								</>
							}
						/>
					</>
				}
			/>
			<ResumeSection
				title={'EDUCATION'}
				body={
					<ExperienceSubSection
						title={'Stanford University'}
						timeRange={'2010 - 2015'}
						body={
							<>
								<ListItem>
									Focus on graduate-level Theoretical Computer Science (algorithms
									and computability)
								</ListItem>
								<ListItem>
									Teaching Assistant for “Logic and Automated Reasoning”
								</ListItem>
								<ListItem>
									Resident Assistant for Eucalypto, collaborating to build a safe,
									supportive community for freshmen
								</ListItem>
							</>
						}
					/>
				}
			/>
			<ResumeSection
				title={'SKILLS'}
				body={
					<div style={{ marginLeft: '15px' }}>
						<ListItem>
							Currently Proficient: React, Redux, GraphQL, TypeScript, JavaScript,
							MySQL
						</ListItem>
						<ListItem>
							Prior Proficiencies: Angular 4, PHP, Java, C, C++, Ruby, Python
						</ListItem>
						<ListItem>
							Eager to learn new languages, frameworks, tools, skills, and software
							development habits
						</ListItem>
					</div>
				}
			/>
		</div>
	)
}
