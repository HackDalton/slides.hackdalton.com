import * as React from 'react';
import "./BottomBar.styl"
import Timer from './Timer';

function BottomBar() {
	return (
		<div className="bottomBar">
			<h1>Time until start</h1>
			<h1><Timer /></h1>
		</div>
	);
}
export default BottomBar;