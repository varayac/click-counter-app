import Button from './components/Button'
import css from './App.module.css'
import logoClick from '../public/logoClicks.svg'
import CountingBox from './components/CountingBox'
import { useState } from 'react'

function App() {
	const [numClicks, setNumClicks] = useState(0)

	const countClick = () => {
		setNumClicks(numClicks + 1)
	}

	const restartCount = () => {
		setNumClicks(0)
	}

	return (
		<div className={css.app}>
			<div className={css.containerLogo}>
				<img className={css.logo} src={logoClick} alt='Un Logo' />
				<h2>Clicks-Counter</h2>
			</div>

			<div className={css.mainContainer}>
				<CountingBox numClicks={numClicks} />
				<Button text='Click' btnStatus={true} btnAction={countClick} />
				<Button text='Restart' btnStatus={false} btnAction={restartCount} />
			</div>
		</div>
	)
}

export default App
