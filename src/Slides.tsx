import * as React from 'react'
import './Slides.styl'

export interface slide {
	title: string
	url: string
}

interface SlidesProps {
	slides: slide[]
}

export default function Slides(props: SlidesProps) {
	return <section className="section">
		<div className="container">
			<div className="grid">
				{props.slides.map((slide, i) => {
					return <div className="box has-text-centered" key={i}>
						<a href={slide.url}>
							<h1 className="is-size-3">{slide.title}</h1>
						</a>
					</div>
				})}
			</div>
		</div>
	</section>
}