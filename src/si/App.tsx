import * as React from 'react';
import { Deck, Slide, Heading, Text, FlexBox, Box, UnorderedList, ListItem, Link, Image, Markdown, OrderedList, CodeSpan, Quote, Appear } from 'spectacle';
//@ts-ignore
import theme from '../theme.ts'
import "./index.styl"

//@ts-ignore
import solvesChart from "./assets/solves.png"
//@ts-ignore
import scoreDist from "./assets/score-dist.png"
//@ts-ignore
import correctness from "./assets/correctness.png"
//@ts-ignore
import scoreboardChart from "./assets/scoreboard-chart.png"


function App() {
	return (
		<div>
			<Deck theme={theme} >
				<Slide backgroundImage="url(https://2020.hackdalton.com/assets/img/header-with-blue.jpg)">
					<FlexBox alignContent="center" justifyContent="center" width="100%" height="100%">
						<Box>
							<Heading color="white">HackDalton</Heading>
							<Text color="white" textAlign="center">William Barkoff</Text>
						</Box>
					</FlexBox>
				</Slide>
				<Slide>
					<Heading>What is HackDalton?</Heading>
					<UnorderedList>
						<ListItem>Capture the Flag</ListItem>
						<ListItem>Designed for High School Students</ListItem>
					</UnorderedList>
				</Slide>
				<Slide>
					<Heading>Objectives</Heading>
					<UnorderedList>
						<ListItem>Connect students with similar interests</ListItem>
						<ListItem>Teach participants about common vunerabilites</ListItem>
						<ListItem>Give students something to work on together during COVID-19</ListItem>
					</UnorderedList>
				</Slide>
				<Slide>
					<Heading>Problems</Heading>
					<UnorderedList>
						<ListItem>Wrote 15 problems in 3 categories</ListItem>
						<UnorderedList>
							<ListItem>General Knowldge</ListItem>
							<ListItem>Web Exploitation</ListItem>
							<ListItem>Binary Exploitation &amp; Reverse Engineering</ListItem>
						</UnorderedList>
					</UnorderedList>
				</Slide>
				<Slide>
					<Heading>Infrastructure</Heading>
					<UnorderedList>
						<ListItem>2 servers, one "game" server and one "problem" server (both Ubuntu)</ListItem>
						<UnorderedList>
							<ListItem>Donated by Linode, a small hosting company</ListItem>
						</UnorderedList>
						<ListItem>Problems were run in docker containers</ListItem>
					</UnorderedList>
				</Slide>
				<Slide>
					<Heading>Things that I learned</Heading>
					<UnorderedList>
						<ListItem>It's surprisingly hard to write insecure code.</ListItem>
						<UnorderedList>
							<ListItem>Modern libraries (Flask, SQL come to mind) try to prevent you from doing insecure things</ListItem>
							<ListItem>You often have to tip-toe around things that prevent you from writing insecure code</ListItem>
						</UnorderedList>
						<ListItem>Writing problems that are the correct difficulty is hard</ListItem>
					</UnorderedList>
				</Slide>
				<Slide>
					<Heading>Things that I learned (cont.)</Heading>
					<UnorderedList>
						<ListItem>Sponsorships aren't as hard as you'd expect</ListItem>
						<ListItem>Marketing is harder than you'd expect</ListItem>
					</UnorderedList>
				</Slide>
				<Slide>
					<Heading>Things that I learned (cont.)</Heading>
					<UnorderedList>
						<ListItem>Lots of new technologies!</ListItem>
					</UnorderedList>
				</Slide>
				<Slide>
					<Heading>Statistics</Heading>
					<UnorderedList>
						<ListItem>44 participants across the US and Canada</ListItem>
						<ListItem>23 teams</ListItem>
						<ListItem>15 challenges</ListItem>
					</UnorderedList>
				</Slide>
				<Slide>
					<Heading>Statistics</Heading>
					<FlexBox alignItems="center" justifyContent="center">
						{/* //@ts-ignore */}
						<img src={solvesChart} width="700" height="450" />
					</FlexBox>
				</Slide>
				<Slide>
					<Heading>Statistics</Heading>
					<FlexBox alignItems="center" justifyContent="center">
						{/* //@ts-ignore */}
						<img src={scoreDist} width="700" height="450" />
					</FlexBox>
				</Slide>
				<Slide>
					<Heading>Statistics</Heading>
					<FlexBox alignItems="center" justifyContent="center">
						{/* //@ts-ignore */}
						<img src={correctness} width="700" height="450" />
					</FlexBox>
				</Slide>
				<Slide>
					<Heading>Statistics</Heading>
					<FlexBox alignItems="center" justifyContent="center">
						{/* //@ts-ignore */}
						<img src={scoreboardChart} width="700" height="450" style={{ background: "white" }} />
					</FlexBox>
				</Slide>
				<Slide>
					<Heading>Thanks for listening</Heading>
					<Text>Learn more:</Text>
					<Link href="https://hackdalton.com">hackdalton.com</Link>
				</Slide>
			</Deck>
		</div>
	);
}
export default App;