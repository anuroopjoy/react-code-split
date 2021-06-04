import { Fragment, useState } from 'react';
// import { sum } from '../utils';

let sum;
import('../utils').then((obj) => {
	sum = obj.sum;
});

export function Calc() {
	const [number1, setNumber1] = useState(0);
	const [number2, setNumber2] = useState(0);
	const [result, setResult] = useState(0);
	return (
		<Fragment>
			<div>
				<input type="text" onChange={(evt) => setNumber1(+evt.target.value)}></input>
				<input type="text" onChange={(evt) => setNumber2(+evt.target.value)}></input>
				<button onClick={() => setResult(sum([number1, number2]))}>Add</button>
			</div>
			<div>{result}</div>
		</Fragment>
	);
}
