import css from './CountingBox.module.css'

function CountingBox({ numClicks }) {
	return <div className={css.counter}>{numClicks}</div>
}

export default CountingBox
