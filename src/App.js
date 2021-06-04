import React from 'react';
import './App.css';
// import { Calc } from './Calc/Calc';
import CalcErrorBoundary from './CalcErrorBoundary';
const Calc = React.lazy(() => import('./Calc'));
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<CalcErrorBoundary>
					<React.Suspense fallback={<div>Loading...</div>}>
						<Calc></Calc>
					</React.Suspense>
				</CalcErrorBoundary>
			</header>
		</div>
	);
}

export default App;
