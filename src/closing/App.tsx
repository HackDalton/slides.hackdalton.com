import * as React from 'react';
import { Deck, Slide, Heading, Text, FlexBox, Box, UnorderedList, ListItem, Appear, Link, CodeSpan, CodePane, Quote, OrderedList } from 'spectacle';
// @ts-ignore because type declarations are useless for this
import dracula from 'prism-react-renderer/themes/dracula.js';
import theme from '../theme'

function App() {
	return (
		<div>
			<Deck theme={theme} >
				<Slide backgroundImage="url(https://2020.hackdalton.com/assets/img/header-with-blue.jpg)">
					<FlexBox alignContent="center" justifyContent="center" width="100%" height="100%">
						<Box>
							<Heading color="white">HackDalton</Heading>
							<Text color="white" textAlign="center">Closing Remarks</Text>
						</Box>
					</FlexBox>
				</Slide>
				<Slide>
					<Heading>If you had a good time...</Heading>
					<Text>Please consider making a donation to one of these incredible foundations.</Text>
					<UnorderedList>
						<ListItem><Link href="https://standuptocancer.org/">Stand Up To Cancer</Link></ListItem>
						<ListItem><Link href="https://www.lls.org/">Leukemia &amp; Lymphoma Society</Link></ListItem>
						<ListItem><Link href="https://www.uncf.org/">UNCF</Link></ListItem>
						<ListItem><Link href="https://scholarshipamerica.org/">Scholarship America</Link></ListItem>
						<ListItem><Link href="https://girlswhocode.org/">Girls Who Code</Link></ListItem>
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
				<Slide>
					<Heading>Final Scoreboard</Heading>
					<OrderedList>
						<ListItem>TheCodingGs (3010)</ListItem>
						<ListItem>4gen (3810)</ListItem>
						<ListItem>TechHacks (2810)</ListItem>
						<ListItem>Trinity (1660)</ListItem>
						<ListItem>math@2am (1510)</ListItem>
					</OrderedList>
					<Text>Full scorebord will be posted on hackdalton.com shortly</Text>
				</Slide>
				<Slide>
					<Heading>Shoutouts</Heading>
					<UnorderedList>
						<ListItem>rmorycz - the only person to solve DynamicSystems&trade; Link</ListItem>
						<ListItem>daltonmax - the only person to solve Secret Agent</ListItem>
					</UnorderedList>
				</Slide>
				<Slide>
					<Heading>Statistics</Heading>
				</Slide>
				<Slide>
					<Heading>Thank you for participating!</Heading>
					<Text>Have an amazing rest of your weekend!</Text>
				</Slide>
				<Slide>
					<Heading>If you had a good time...</Heading>
					<Text>Please consider making a donation to one of these incredible foundations.</Text>
					<UnorderedList>
						<ListItem><Link href="https://standuptocancer.org/">Stand Up To Cancer</Link></ListItem>
						<ListItem><Link href="https://www.lls.org/">Leukemia &amp; Lymphoma Society</Link></ListItem>
						<ListItem><Link href="https://www.uncf.org/">UNCF</Link></ListItem>
						<ListItem><Link href="https://scholarshipamerica.org/">Scholarship America</Link></ListItem>
						<ListItem><Link href="https://girlswhocode.org/">Girls Who Code</Link></ListItem>
					</UnorderedList>
				</Slide>
			</Deck>
		</div>
	);
}
export default App;