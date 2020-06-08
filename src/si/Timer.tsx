import * as React from 'react'

export default function Timer() {
	const calculateTimeLeft = () => {
		const difference = +new Date(2020, 5, 6, 10, 30, 0) - +new Date();
		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60)
			};
		}

		return timeLeft;
	}

	const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

	React.useEffect(() => {
		setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
	});

	const timerComponents = [];

	Object.keys(timeLeft).forEach(interval => {
		if (!timeLeft[interval]) {
			return;
		}

		timerComponents.push(
			<span>
				{timeLeft[interval]} {interval}{" "}
			</span>
		);
	});

	return <span>{timerComponents.length ? timerComponents : <span>HackDalton has started!s</span>}</span>
}