import * as React from 'react';
import { Deck, Slide, Heading, Text, FlexBox, Box, UnorderedList, ListItem, Appear, Link, CodeSpan, CodePane } from 'spectacle';
// @ts-ignore because type declarations are useless for this
import dracula from 'prism-react-renderer/themes/dracula.js';
import theme from '../theme'

function App() {
	return (
		<div>
			<Deck theme={theme} >
				<Slide backgroundImage="url(https://hackdalton.com/assets/img/header-with-blue.jpg)">
					<FlexBox alignContent="center" justifyContent="center" width="100%" height="100%">
						<Box>
							<Heading color="white">Lunchtime Infrastructure Chat</Heading>
							<Text color="white" textAlign="center">William Barkoff</Text>
							<Text color="white" textAlign="center">HackDalton Organizer</Text>
						</Box>
					</FlexBox>
				</Slide>
				<Slide>
					<Heading>What is this chat?</Heading>
					<UnorderedList>
						<ListItem>How I organized and ran HackDalton</ListItem>
						<ListItem>How I wrote problems</ListItem>
					</UnorderedList>
				</Slide>
				<Slide>
					<Heading>By the way...</Heading>
					<Text>No need to take notes or anything! Slides are available online:</Text>
					<Link href="https://slides.hackdalton.com">slides.hackdalton.com</Link>
					<Text>Also, please ask questions! I'll answer them as I receive them.</Text>
				</Slide>
				<Slide>
					<Heading>Organizing a programming competiton</Heading>
					<UnorderedList>
						<ListItem>Way harder than I expected...</ListItem>
						<ListItem>Many non-technical aspects that I didn't anticipate</ListItem>
						<UnorderedList>
							<ListItem>Marketing</ListItem>
							<ListItem>Sponsorships</ListItem>
						</UnorderedList>
						<ListItem>A lot of fun!</ListItem>
					</UnorderedList>
				</Slide>
				<Slide>
					<FlexBox alignContent="center" justifyContent="center" width="100%" height="100%">
						<Box>
							<Heading>Non-technical stuff</Heading>
							<Text textAlign="center" >(Let's get the boring stuff out of the way first)</Text>
						</Box>
					</FlexBox>
				</Slide>
				<Slide>
					<Heading>Marketing</Heading>
					<Text>Mostly done by my awesome brother Benjamin</Text>
					<UnorderedList>
						<ListItem>Instagram! (follow us @hackdalton)</ListItem>
						<ListItem>Dalton's daily announcements/sunday blast</ListItem>
						<ListItem>Reached out to CS teachers at other schools</ListItem>
					</UnorderedList>
				</Slide>
				<Slide>
					<Heading>Sponsorships</Heading>
					<UnorderedList>
						<ListItem>First reached out to companies I have friends at</ListItem>
						<ListItem>Reached out to companies for things I needed</ListItem>
					</UnorderedList>
				</Slide>
				<Slide>
					<FlexBox alignContent="center" justifyContent="center" width="100%" height="100%">
						<Box>
							<Heading>More technical things</Heading>
						</Box>
					</FlexBox>
				</Slide>
				<Slide>
					<Heading>Infrastructure</Heading>
					<UnorderedList>
						<ListItem>HackDalton runs on two servers, (Ubuntu 20.04 LTS &amp; Ubuntu 18.04 LTS)</ListItem>
						<UnorderedList>
							<ListItem><CodeSpan>hackdalton-game</CodeSpan></ListItem>
							<ListItem><CodeSpan>hackdalton-problems</CodeSpan></ListItem>
						</UnorderedList>
						<ListItem>Everything static runs on Netlify (like this deck!)</ListItem>
						<ListItem>Wanted to keep the problems seperate from everything else</ListItem>
					</UnorderedList>
				</Slide>
				<Slide>
					<Heading>Game management</Heading>
					<UnorderedList>
						<ListItem>Modified version of CTFd (OSS!)</ListItem>
						<UnorderedList>
							<ListItem><Link href="https://github.com/hackdalton/ctfd">github.com/HackDalton/CTFd</Link></ListItem>
							<ListItem><Link href="https://ctfd.io">ctfd.io</Link></ListItem>
						</UnorderedList>
					</UnorderedList>
				</Slide>
				<Slide>
					<Heading>Help center</Heading>
					<UnorderedList>
						<ListItem>Discourse (OSS!)</ListItem>
						<UnorderedList>
							<ListItem><Link href="https://discourse.org">discourse.org</Link></ListItem>
						</UnorderedList>
					</UnorderedList>
				</Slide>
				<Slide>
					<Heading>Video streaming</Heading>
					<UnorderedList>
						<ListItem>YouTube Live</ListItem>
						<UnorderedList>
							<ListItem><Link href="https://youtube.com/live">youtube.com/live</Link></ListItem>
						</UnorderedList>
						<ListItem>Slido</ListItem>
						<UnorderedList>
							<ListItem><Link href="https://sli.do">sli.do</Link></ListItem>
						</UnorderedList>
						<ListItem>Streamlabs OBS (OSS!)</ListItem>
						<UnorderedList>
							<ListItem><Link href="https://streamlabs.com">streamlabs.com</Link></ListItem>
						</UnorderedList>
					</UnorderedList>
				</Slide>
				<Slide>
					<Heading>Slide decks</Heading>
					<UnorderedList>
						<ListItem>Spectacle (OSS!) <Link href="https://formidable.com/open-source/spectacle/">formidable.com/open-source/spectacle</Link></ListItem>
						<ListItem>React (OSS!) <Link href="https://reactjs.org/">reactjs.org</Link></ListItem>
						<ListItem>Stylus (OSS!) <Link href="https://stylus-lang.com/">stylus-lang.com</Link></ListItem>
						<ListItem>TypeScript (OSS!) <Link href="https://typescriptlang.org/">typescriptlang.org</Link></ListItem>
						<ListItem>Parcel (OSS!) <Link href="https://parceljs.org">parceljs.org</Link></ListItem>
					</UnorderedList>
				</Slide>
				<Slide>
					<Heading>Problems</Heading>
					<UnorderedList>
						<ListItem>Used Docker (OSS!) for containers.</ListItem>
						<UnorderedList>
							<ListItem>Most problems run on Alpine linux, but not all of them!</ListItem>
							<ListItem>hub.docker.com/r/hackdalton/c-build-base</ListItem>
						</UnorderedList>
						<ListItem>After the competiton, all the problems and their intended solutions will be open sourced!</ListItem>
						<ListItem>Lots of problems are based on other ones I've done (especially from PicoCTF)</ListItem>
					</UnorderedList>
				</Slide>
				<Slide>
					<Heading>Problems (cont.)</Heading>
					<UnorderedList>
						<ListItem>Written in a variety of languages!</ListItem>
						<UnorderedList>
							<ListItem>Go</ListItem>
							<ListItem>TypeScript</ListItem>
							<ListItem>C</ListItem>
							<ListItem>Plenty of others</ListItem>
						</UnorderedList>
					</UnorderedList>
				</Slide>
				<Slide>
					<Heading>Flag generation</Heading>
					<Text>I wrote a flag generator program to generate flags.</Text>
					<Link href="https://github.com/hackdalton/flag-generator">github.com/HackDalton/flag-generator</Link>
					<CodePane language="bash" autoFillHeight={true} theme={dracula}>
						{`$ flag-generator --help
Usage of flag-generator:
  -mapVowels
        determines if vowels are mapped to numbers. (default true)
  -prefix string
        used as the prefix for the flag (default "hackDalton")
$ flag-generator "thanks for letting me blab on"        
hackDalton{th4nks_f0r_l3tt1ng_m3_bl4b_0n_u1y0Z4oFSY}`}
					</CodePane>
				</Slide>
				<Slide>
					<Heading>Problem testers</Heading>
					<Text>Shoutout to Alex Studer and Adam Boesky!</Text>
					<UnorderedList>
						<ListItem>I gave them hints as needed along the way</ListItem>
						<ListItem>Helped me determine what information I should add to the problem descriptions</ListItem>
					</UnorderedList>
				</Slide>
				<Slide>
					<Heading>Guest problem writers</Heading>
					<UnorderedList>
						<ListItem>Took pressure off me to write problems (thank goodness)</ListItem>
						<ListItem>Allowed for better problems in areas I don't know as well</ListItem>
						<UnorderedList>
							<ListItem>Alex Studer practically carried the reverse engineering and binary exploitation category!</ListItem>
						</UnorderedList>
						<ListItem>"Write a problem that can run in a Docker container"</ListItem>
					</UnorderedList>
				</Slide>
				<Slide>
					<Heading>Writing a successful problem</Heading>
					<UnorderedList>
						<ListItem>Think of a vunerability</ListItem>
						<ListItem>Use technologies that you know well (go!)</ListItem>
						<ListItem>Come up with some sort of backstory</ListItem>
						<ListItem>Base it on real-world exploits (XSS, SQL-injection, client-side security), NOT things just made up for the problem.</ListItem>
						<ListItem>A good problem gives the solver a feeling of progress every so often</ListItem>
					</UnorderedList>
				</Slide>
				<Slide>
					<Heading>Things that I learned</Heading>
					<UnorderedList>
						<ListItem>It's suprisingly hard to write insecure code.</ListItem>
						<UnorderedList>
							<ListItem>Modern libraries (Flask, SQL come to mind) try to prevent you from doing insecure things</ListItem>
							<ListItem>You often have to tip-toe around things that prevent you from writing insecure code</ListItem>
						</UnorderedList>
					</UnorderedList>
				</Slide>
				<Slide>
					<FlexBox alignContent="center" justifyContent="center" width="100%" height="100%">
						<Heading>Thanks for listening!</Heading>
					</FlexBox>
				</Slide>
			</Deck>
		</div>
	);
}
export default App;