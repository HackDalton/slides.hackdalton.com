import * as React from 'react'
import { Appear } from 'spectacle'

interface FadeInProps {
	children: React.ReactNode
	n: number
}

export default function FadeIn(props: FadeInProps): JSX.Element {
	return <Appear elementNum={props.n} transitionEffect={{ to: { opacity: 1 }, from: { opacity: 0 } }}>
		{props.children}
	</Appear>
}