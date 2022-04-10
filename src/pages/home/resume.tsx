import React, { useContext } from 'react'
import { Divider } from '../../components/content/divider'
import { MediaContext, MediaSize } from '../../components/mediaProvider'

const pagePadding = 88
// this creates an 8.5 x 11 ratio
const pageWidth = 850 - 2 * pagePadding
const pageHeight = 1100 - 2 * pagePadding
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
	fontSize: '23px',
	fontWeight: 600,
	lineHeight: '33px',
}

const h3Style: React.CSSProperties = {
	fontFamily: 'Montserrat',
	fontSize: '18px',
	fontWeight: 600,
	lineHeight: '25px',
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
					fontSize: '24px',
					textAlign: 'center',
					margin: isMobile ? '25px 0px 25px 0px' : '0px 0px 15px 0px',
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
const ListItem: React.FunctionComponent = (props) => {
	return <li style={{ margin: '0px 0px 2px 11px' }}>{props.children}</li>
}

const ListHeader: React.FunctionComponent = (props) => {
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
	body: JSX.Element
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
						lineHeight: '25px',
					}}
				>
					<div style={h2Style}>{title}</div>
					<div style={{ margin: '0px 6px' }}>{timeRange}</div>
				</div>
			)}
			{subtitle && <div style={h3Style}>{subtitle}</div>}
			{subtext && <div style={{ marginTop: 2 }}>{subtext}</div>}
			<div style={{ margin: isMobile ? '10px 0px 0px 5px' : '4px 50px 0px 15px' }}>
				{body}
			</div>
		</div>
	)
}

export const ResumePage: React.FunctionComponent = (props) => {
	const mediaSize = useContext(MediaContext)
	const isMobile = mediaSize === MediaSize.Small

	return (
		<div
			style={{
				...lightTextStyle,
				color: 'black',
				maxWidth: pageWidth,
				height: mediaSize === MediaSize.Large ? pageHeight : '',
				backgroundColor: 'white',
				padding: isMobile ? '10px' : pagePadding,
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
								title={'Microsoft'}
								subtitle={'Supply Chain Insights (SCI)'}
								timeRange={'Dec 2021 - Present'}
								subtext={`SCI empowers businesses to mitigate supply chain risks via prescriptive insights powered by AI.`}
								isMobile={isMobile}
								body={
									<>
										<ListHeader>Full stack development</ListHeader>
										<ListItem>
											Design and create an asyncronous, agnostic event system
											for managing alerts, notifications, or other events,
											building both the back and front ends.
										</ListItem>
										<ListItem>
											Assist with back end infra and the transition from SQL
											to NoSQL and Dataverse.
										</ListItem>
									</>
								}
							/>
							<ExperienceSubSection
								title={'Microsoft'}
								subtitle={'PowerApps Lifecycle Management (ALM)'}
								timeRange={'Sept 2020 - Dec 2021'}
								subtext={`PowerApps enables organizations to create apps easily inside of Dataverse solutions. ALM supports the layering, lifecycle, and deployment of solutions, settings, and apps.`}
								isMobile={isMobile}
								body={
									<>
										<ListHeader>Complex challenges</ListHeader>
										<ListItem>
											Built the entire UX for PowerPlatform Settings while
											assisting with the APIs, collaborating with project
											managers and designers, and guiding junior engineers.
										</ListItem>
										<ListItem>
											Refashioned the intricate logic of solution app
											component layering to eliminate inconsistencies and
											drive down our customer reported incident load by ~25%.
										</ListItem>
									</>
								}
							/>
							<ExperienceSubSection
								title={'Microsoft'}
								subtitle={'PowerApps Portal'}
								timeRange={'July 2018 - Sept 2020'}
								subtext={
									'Portal develops the front-end Home page, Apps list page, and Solutions list page for PowerApps.'
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
					timeRange={'Feb 2015 - July 2018'}
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
							title={'Stanford University'}
							timeRange={'Sept 2010 - June 2015'}
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
