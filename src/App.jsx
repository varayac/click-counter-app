import css from './App.module.css'
import logoClick from '../public/logoClicks.svg'

function App() {
	return (
		<div className={css.app}>
			<div className='containerLogo'>
				<img className='logo' src={logoClick} alt='Un Logo' />
				<h2>Plantilla Limpia</h2>
			</div>
		</div>
	)
}

export default App
