import Button from './components/Button'
import css from './App.module.css'
import logoClick from '../public/logoClicks.svg'

function App() {
	const countClick = () => {
		let a = 0
		a++
		console.log(a)
	}

	const restartCount = () => {
		console.log('btn restart, chao xd')
	}

	return (
		<div className={css.app}>
			<div className={css.containerLogo}>
				<img className={css.logo} src={logoClick} alt='Un Logo' />
				<h2>Clicks-Counter</h2>
			</div>
			<Button text='Click' btnStatus={true} btnAction={countClick} />
			<Button text='Restart' btnStatus={false} btnAction={restartCount} />
		</div>
	)
}

export default App
