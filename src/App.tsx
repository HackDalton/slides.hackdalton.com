import * as React from 'react'
import Title from './Title'
import Slides, { slide } from './Slides'
import Message from './Message'

import "./index.styl"
import "bulma/css/bulma.min.css"

export default function App() {
	const slides: slide[] = [
		{
			title: "Opening Remarks",
			url: "/welcome/index.html"
		},
		{
			title: "Lunchtime Infrastructure Chat",
			url: "/infrastructure/index.html"
		},
	]

	return <div>
		<Title />
		<section className="section">
			<div className="container">
				<Message modifier="is-link">
					<strong>Curious about how these slides work?</strong>
					They're built on <a href="https://reactjs.org">React</a> and <a href="https://typescriptlang.org">TypeScript</a>, and
					use <a href="https://formidable.com/open-source/spectacle/">Spectacle</a>. This page also uses <a href="https://bulma.io">Bulma</a>.
					They will also be open-sourced as the competition progresses <a href="https://github.com/HackDalton/slides.hackdalton.com">on GitHub</a>.
				</Message>
				<Slides slides={slides} />
			</div>
		</section>
	</div>
}