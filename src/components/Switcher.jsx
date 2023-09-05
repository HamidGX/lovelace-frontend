import { useState } from 'react'
import useDarkSide from '../hooks/useDarkSide'
import { DarkThemeToggle } from 'flowbite-react'

export default function Switcher() {
	const [colorTheme, setTheme] = useDarkSide()
	const [darkSide, setDarkSide] = useState(
		colorTheme === 'light' ? true : false
	)

	const toggleDarkMode = (checked) => {
		setTheme(colorTheme)
		setDarkSide(checked)
	}

	return (
		<>
			<DarkThemeToggle checked={darkSide} onChange={toggleDarkMode} />
		</>
	)
}
