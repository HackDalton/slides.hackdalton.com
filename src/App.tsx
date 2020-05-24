import * as React from 'react'
import Title from './Title'
import Slides, { slide } from './Slides'

import "./index.styl"
import "bulma/css/bulma.min.css"

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