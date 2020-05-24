import * as React from 'react'

export interface slide {
	title: string
	url: string
}

interface SlidesProps {
	slides: slide[]
}

export default function Slides(props: SlidesProps) {
	return <ul>
		{props.slides.map((slide, i) => {
			return <li key={i}><a href={slide.url}>{slide.title}</a></li>
		})}
	</ul>
}