import * as React from 'react';
import { Deck, Slide, Heading, Text, FlexBox, Box, UnorderedList, ListItem, Link, Markdown, OrderedList, CodeSpan, Quote } from 'spectacle';
import theme from '../theme.ts'
import BottomBar from './BottomBar'

import "./index.styl"
import Timer from './Timer';

function App() {
	return (
		<div>
			<Deck theme={theme} >
				<Slide backgroundImage="url(https://hackdalton.com/assets/img/header-with-blue.jpg)">
					<FlexBox alignContent="center" justifyContent="center" width="100%" height="100%">
						<Box>
							<Heading color="white">Welcome to HackDalton!</Heading>
							<Text color="white" textAlign="center">A programming and computer science competition for high schoolers. </Text>
						</Box>
					</FlexBox>
				</Slide>
				<Slide>
					<Heading>By the way...</Heading>
					<Text>There's no need to take notes or anything, these slides are all available online.</Text>
					<Link href="https://slides.hackdalton.com">slides.hackdalton.com</Link>
					<Text fontSize="16px"><strong>Curious about these slides?</strong> They're written in TypeScript with React.js using a library called spectacle. I'll open source them after the competiton ends.</Text>
				</Slide>
				<Slide>
					<Markdown>
						{`
# Today's agenda
All times are in EDT (UTC-4). Go to hackdalton.com/agenda for your timezone and the current EDT time!

| Time | Event | Location |
|----------|--------------------|---------------------|
| 10:00 AM | Opening remarks | live.hackdalton.com |
| 10:30 AM | Competition starts | game.hackdalton.com |
| 5:00 PM | Competition ends | game.hackdalton.com |
| 5:00 PM | Closing remarks | live.hackdalton.com |
        `}
					</Markdown>
				</Slide>
				<Slide>
					<Heading>About me!</Heading>
					<UnorderedList>
						<ListItem>I'm William Barkoff, the organizer of HackDalton</ListItem>
						<ListItem>I live in New York City, and I'm a seinor at Dalton (hence HackDalton).</ListItem>
						<ListItem>I wrote most of the problems myself, but the rest were written by our amazing guest problem writers (More about that later)</ListItem>
						<ListItem>Though I've participated in many hackathons and programming competitions, this is my first time running one!</ListItem>
					</UnorderedList>
				</Slide>
				<Slide>
					<Heading>About HackDalton!</Heading>
					<UnorderedList>
						<ListItem>HackDalton is the <u>first ever</u> programming competition run by Dalton.</ListItem>
						<ListItem>Created to help get people together digitally during the quarantine.</ListItem>
					</UnorderedList>
				</Slide>
				{/* <Slide>
					<Heading>Guest Problem Writers</Heading>
					<Text>TODO: Write slide</Text>
				</Slide> */}
				<Slide>
					<Heading>Sponsors</Heading>
					<Text>HackDalton is lucky enough to be supported by these incredible companies.</Text>
					<iframe src="https://hackdalton.com/sponsors-embed.html" frameBorder="0"></iframe>
				</Slide>
				<Slide>
					<Heading>Rules</Heading>
					<OrderedList>
						<ListItem>Be friendly and courteous towards each other.</ListItem>
						<ListItem>Stay in bounds.</ListItem>
						<ListItem>Flags are in the format <CodeSpan>hackDalton{'{...}'}</CodeSpan></ListItem>
						<ListItem>Easier problems unlock more difficult problems.</ListItem>
						<ListItem>Hints cost points, but free help is available (more about this later)</ListItem>
					</OrderedList>
				</Slide>
				<Slide>
					<Heading>Problems</Heading>
					<UnorderedList>
						<ListItem>Problems live on problems.hackdalton.com or, occasionally another subdomain that begins with problem-.</ListItem>
						<ListItem>They are <u>never</u> on any other subdomain. Attempting to breach another subdomain is a violation of the rules, a waste of your time because you won't find any flags there, and
						a violation of the Computer Fraud and Abuse Act (18 U.S.C. &sect; 1030).</ListItem>
					</UnorderedList>
				</Slide>
				<Slide>
					<Heading>Problems (cont.)</Heading>
					<UnorderedList>
						<ListItem>Problems fall into 3 categories.</ListItem>
						<UnorderedList>
							<ListItem>General Knowledge</ListItem>
							<ListItem>Web Expoiltation</ListItem>
							<ListItem>Reverse Engineering &amp; Reverse Engineering</ListItem>
						</UnorderedList>
						<ListItem>Problems are assigned point values based on difficulty.</ListItem>
						<ListItem>Easier problems unlock harder ones, even across categories.</ListItem>
					</UnorderedList>
				</Slide>
				<Slide>
					<Heading>Problems (cont.)</Heading>
					<UnorderedList>
						<ListItem>We tried to make the problems as "unbreakable" as we could; however, due to the nature of the exploit, some of them are breakable.</ListItem>
						<ListItem>If you break a problem, please let us know on help.hackdalton.com so we can fix it for everyone else</ListItem>
						<ListItem>Breakable problems automatically reset every hour on the hour.</ListItem>
					</UnorderedList>
				</Slide>
				<Slide>
					<Heading>Stuck?</Heading>
					<Text>You have options.</Text>
					<UnorderedList>
						<ListItem>Ask for help on help.hackdalton.com (free, reccomended)</ListItem>
						<UnorderedList>
							<ListItem>help.hackdalton.com uses a seperate account system than game.hackdalton.com, so go create an account now!</ListItem>
						</UnorderedList>
						<ListItem>Use a hint (costs points)</ListItem>
					</UnorderedList>
				</Slide>
				<Slide>
					<Heading>Solutions</Heading>
					<Text>All of the problems will be open sourced following the competition, along with writeups of their intended solutions.</Text>
					<Link href="https://github.com/hackdalton">github.com/hackdalton</Link>
					<Text>You're more than welcome to publish your own solutions following the competiton, or even reuse the problems in your own competitions!</Text>
				</Slide>
				<Slide>
					<Heading>Shoutouts</Heading>
					<UnorderedList>
						<ListItem>Adam Boesky (Problem Tester)</ListItem>
						<ListItem>Charlie Stewert (Advisor)</ListItem>
					</UnorderedList>
				</Slide>
				<Slide>
					<FlexBox alignContent="center" justifyContent="center" width="100%" height="100%">
						<Box>
							<Quote>Imagination is more important than knowledge</Quote>
							<Text>&mdash; Albert Einstein</Text>
						</Box>
					</FlexBox>
				</Slide>
				<Slide >
					<FlexBox alignContent="center" flexDirection="column" justifyContent="center" width="100%" height="100%">
						<Text textAlign="center">HackDalton starts in</Text>
						<Heading color="quaternary"><Timer /></Heading>
						<Heading color="secondary">Good Luck!</Heading>
					</FlexBox>
				</Slide>
			</Deck>
			<BottomBar />
		</div>
	);
}
export default App;