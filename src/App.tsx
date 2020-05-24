import * as React from 'react'
import "./index.styl"
import Title from './Title'
import Slides, { slide } from './Slides'

export default function App() {
	const slides: slide[] = [
		{
			title: "Opening Remarks",
			url: "/welcome/index.html"
		}
	]

	return <div>
		<Title />
		<Slides slides={slides} />
	</div>
}