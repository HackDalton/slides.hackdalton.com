import * as React from "react"
import { Appear, ListItem } from "spectacle"

interface AppearBulletProps {
	elementNum: number
	children: React.ReactNode
}

export default function AppearBullet(props: AppearBulletProps) {
	return <Appear elementNum={props.elementNum} transitionEffect={{ to: { opacity: 1 }, from: { opacity: 0 } }}><ListItem>{props.children}</ListItem></Appear>
}