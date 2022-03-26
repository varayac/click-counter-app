import css from './Button.module.css'

function Button({ text, btnStatus, btnAction }) {
	return (
		<button
			className={btnStatus ? `${css.clickButton}` : `${css.restartButton}`}
			onClick={btnAction}>
			{text}
		</button>
	)
}

export default Button
