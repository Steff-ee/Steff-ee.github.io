import React, { useContext } from 'react'
import { Divider } from '../../components/content/divider'
import { MediaContext, MediaSize } from '../../components/mediaProvider'

const horizontalPadding = 88
const verticalPadding = 64
// this creates an 8.5 x 11 ratio
const pageWidth = 850 - 2 * horizontalPadding
const pageHeight = 1100 - 2 * verticalPadding
const commonVerticalMargin = '30px'

const lightTextStyle: React.CSSProperties = {
	fontFamily: 'Open Sans',
	fontSize: '15px',
	lineHeight: '21px',
}

const h1Style: React.CSSProperties = {
	fontFamily: 'Montserrat',
	fontWeight: 600,
	fontSize: '34px',
	lineHeight: '48px',
	paddingBottom: '2px',
	letterSpacing: '1px',
}

const h2Style: React.CSSProperties = {
	fontFamily: 'Montserrat',
	fontSize: '29px',
	fontWeight: 600,
	lineHeight: '44px',
}

const h3Style: React.CSSProperties = {
	fontFamily: 'Montserrat',
	fontSize: '18px',
	fontWeight: 600,
	lineHeight: '26px',
}

const dividerStar = <div>✧</div>

interface IResumeHeaderProps {
	isMobile: boolean
}

const ResumeHeader: React.FunctionComponent<IResumeHeaderProps> = (props) => {
	const { isMobile } = props

	return (
		<div style={{ textAlign: 'center' }}>
			<div style={h1Style}>DANIEL STEFFEE</div>
			<div style={{ ...h2Style, fontWeight: 400 }}>Software Engineer</div>
			<div
				style={{
					paddingTop: '10px',
					display: 'flex',
					flexDirection: isMobile ? 'column' : 'row',
					justifyContent: 'space-between',
				}}
			>
				<div>dsteffee@alumni.stanford.edu</div>
				{dividerStar}
				<div>Redmond, WA</div>
				{dividerStar}
				<div>steff-ee.github.io</div>
				{dividerStar}
				<div>linkedin.com/in/steff-ee</div>
			</div>
			<Divider thickness={2} rootStyle={{ width: '96%', padding: '8px 2% 8px 2%' }} />
			<div style={{ ...lightTextStyle, lineHeight: '21px' }}>
				Senior Full Stack Software Engineer. Resourceful and collaborative; keen to maximize
				customer impact with features deployed on robust, performant code; eager to learn
				new architectures; avid about supporting team members, providing guidance, and
				reviewing code.
			</div>
		</div>
	)
}

interface IResumeSectionProps {
	title: string
	body: JSX.Element
	isMobile: boolean
	rootStyle?: React.CSSProperties
}

const ResumeSection: React.FunctionComponent<IResumeSectionProps> = (props) => {
	const { title, body, isMobile, rootStyle } = props

	return (
		<div style={{ ...rootStyle, marginTop: commonVerticalMargin }}>
			<div
				style={{
					...h2Style,
					fontSize: '26px',
					textAlign: 'center',
					margin: isMobile ? '25px 0px 25px 0px' : '0px 0px 18px 0px',
					letterSpacing: '1px',
				}}
			>
				{title}
			</div>
			<div>{body}</div>
		</div>
	)
}

// replaces use of <li> to get around the univeral li styling in root.css
const ListItem: React.FunctionComponent<React.PropsWithChildren> = (props) => {
	return <li style={{ margin: '0px 0px 2px 11px' }}>{props.children}</li>
}

const ListHeader: React.FunctionComponent<React.PropsWithChildren> = (props) => {
	return (
		<div style={{ marginTop: '8px', fontWeight: 600, lineHeight: '25px' }}>
			{props.children}
		</div>
	)
}

interface IExperienceSubSectionProps {
	title?: string
	subtitle?: string
	timeRange?: string
	subtext?: string
	body?: JSX.Element
	isMobile: boolean
}

const ExperienceSubSection: React.FunctionComponent<IExperienceSubSectionProps> = (props) => {
	const { title, subtitle, timeRange, body, subtext, isMobile } = props

	return (
		<div style={{ marginBottom: commonVerticalMargin }}>
			{title && (
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						flexDirection: isMobile ? 'column' : 'row',
						lineHeight: h2Style.lineHeight,
					}}
				>
					<div style={h2Style}>{title}</div>
					<div style={{ margin: '0px 6px', fontSize: '17px' }}>{timeRange}</div>
				</div>
			)}
			{subtitle && <div style={{ ...h3Style, marginLeft: 8 }}>{subtitle}</div>}
			{subtext && <div style={{ margin: '2px 40px 0px 8px' }}>{subtext}</div>}
			{body && (
				<div style={{ margin: isMobile ? '10px 0px 0px 5px' : '4px 48px 0px 16px' }}>
					{body}
				</div>
			)}
		</div>
	)
}

export const ResumePage: React.FunctionComponent<React.PropsWithChildren> = (props) => {
	const mediaSize = useContext(MediaContext)
	const isMobile = mediaSize === MediaSize.Small
	let padding = '10px'
	if (!isMobile) {
		padding = `${verticalPadding}px ${horizontalPadding}px`
	}

	return (
		<div
			style={{
				...lightTextStyle,
				color: 'black',
				maxWidth: pageWidth,
				height: mediaSize === MediaSize.Large ? pageHeight : '',
				backgroundColor: 'white',
				padding,
				border: '1px black solid',
				boxShadow: '3px 3px 1px darkgray',
				marginBottom: commonVerticalMargin,
			}}
		>
			{props.children}
		</div>
	)
}

export const Resume: React.FunctionComponent = () => {
	const mediaSize = useContext(MediaContext)
	const isMobile = mediaSize === MediaSize.Small

	return (
		<>
			<ResumePage>
				<ResumeHeader isMobile={isMobile} />
				<ResumeSection
					title={'WORK EXPERIENCE'}
					isMobile={isMobile}
					body={
						<>
							<ExperienceSubSection
								title={'Remitly'}
								subtitle={'Remitly for Developers'}
								timeRange={'Current'}
								subtext={`Remitly provides financial services to immigrants and underserved communities around the world; Remitly for Developers expands this mission to enterprise customers.`}
								isMobile={isMobile}
							/>
							<div style={{ paddingTop: 20 }} />
							<ExperienceSubSection
								title={'Microsoft'}
								subtitle={'PowerApps App Lifecycle Management (ALM)'}
								timeRange={'2018 - 2022'}
								subtext={`PowerApps enables organizations to create apps easily inside of Dataverse solutions. ALM supported the layering, lifecycle, and deployment of solutions, settings, and apps.`}
								isMobile={isMobile}
								body={
									<>
										<ListHeader>Complex challenges</ListHeader>
										<div style={{ paddingTop: 4 }} />
										<ListItem>
											Built the entire UX for PowerPlatform Settings while
											assisting with back end APIs, leading discussions with
											PMs and designers, and guiding junior engineers. Over
											13,000 production apps now use 900+ settings created by
											first & third party teams.
										</ListItem>
										<div style={{ paddingTop: 4 }} />
										<ListItem>
											Refashioned the intricate app-component layering logic
											to eliminate inconsistencies and drive down customer
											incidents by ~25%, with no regressions.
										</ListItem>
									</>
								}
							/>
							<ExperienceSubSection
								subtitle={'PowerApps Portal'}
								subtext={
									'Portal developed the UX for the Home, Apps, and Solutions pages and experiences.'
								}
								isMobile={isMobile}
								body={
									<>
										<ListHeader>Teamwork</ListHeader>
										<ListItem>
											Assisted partner teams, mentored interns, and guided
											vendors with code changes.
										</ListItem>
										<ListItem>
											Reviewed the second-most number of pull requests in the
											monorepo and ranked among the top 10 of contributors.
										</ListItem>
										<ListItem>
											Responsively dove into at-risk featurework to aid any
											team members in need.
										</ListItem>
									</>
								}
							/>
						</>
					}
				/>
			</ResumePage>
			<ResumePage>
				<ExperienceSubSection
					isMobile={isMobile}
					body={
						<>
							<ListHeader>Maintainability</ListHeader>
							<ListItem>
								Drove team to adopt React Function Components and Hooks, simplifying
								logic for state management and effects.
							</ListItem>
							<ListItem>
								Generated weekly service reports, triage customer incidents, and
								assist bug triage.
							</ListItem>
							<ListItem>
								Revamped telemetry framework to better distinguish error rates.
							</ListItem>
							<ListItem>
								Improved reliability by replacing failures with partially loaded
								states.
							</ListItem>
						</>
					}
				/>
				<ExperienceSubSection
					title={'TreeRing'}
					timeRange={'2015 - 2018'}
					subtext={
						'TreeRing provides flexible software for designing yearbooks, customizing them per student, and benefits the environment by planting a tree for every book printed.'
					}
					isMobile={isMobile}
					body={
						<>
							<ListHeader>Lead back-end engineer</ListHeader>
							<ListItem>
								"Xylem" project: Re-architected the client/server framework in a
								two-person team to unify duplicate code, simplify data access, and
								increase expressiveness.
							</ListItem>
							<ListItem>
								Supervised all SQL queries, creating them for new APIs and rewriting
								existing ones to reduce response times.
							</ListItem>
							<ListItem>
								Increased parallelism and reduced latency of AWS EC2 machines
								responsible for generating high-resolution renders.
							</ListItem>
							<ListItem>
								Identified, triaged, and resolved customer-reported incidents.
							</ListItem>
						</>
					}
				/>
				<ResumeSection
					title={'EDUCATION'}
					isMobile={isMobile}
					body={
						<ExperienceSubSection
							title={'Stanford'}
							timeRange={'2010 - 2015'}
							isMobile={isMobile}
							body={
								<>
									<ListItem>
										Bachelor of Computer Science, focused on theory (algorithms
										and computability).
									</ListItem>
									<ListItem>
										Teaching Assistant for “Logic and Automated Reasoning”.
									</ListItem>
									<ListItem>
										Resident Assistant collaborating to build a safe, supportive
										community.
									</ListItem>
								</>
							}
						/>
					}
				/>
				<ResumeSection
					title={'SKILLS'}
					isMobile={isMobile}
					rootStyle={{ marginTop: '14px' }}
					body={
						<div style={{ padding: '6px 50px 0px 15px' }}>
							<ListItem>
								TypeScript, JavaScript, C#, React, Redux, GraphQL, SQL, NoSQL, and
								various testing frameworks.
							</ListItem>
							<ListItem>
								Prior Proficiencies: Python, Ruby, C++, C, Java, PHP, AWS, Angular.
							</ListItem>
							<ListItem>
								Eager to learn new skills, learn from the best, and share what I
								learn.
							</ListItem>
							<ListItem>
								Interested in computer science theory, algorithms, quantum
								computing, and cryptography (not including cryptocurrencies).
							</ListItem>
						</div>
					}
				/>
			</ResumePage>
		</>
	)
}
