import * as React from 'react'

interface messageProps {
	children: any
	modifier: string
}

export default function Message(props: messageProps) {
	return <article className={`message ${props.modifier}`}>
		<div className="message-body">
			{props.children}
		</div>
	</article>
}