import { Flowbite, DarkThemeToggle } from 'flowbite-react'
import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import { Header } from './components'
import { Home, CreatePost, Community, About, Contact } from './pages'
function App() {
	return (
		<Flowbite>
			<BrowserRouter>
				<Header />
				<main className='container mx-auto pt-20 md:pt-24 p-10 md:p-14'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/acerca-de-nosotros' element={<About />} />
						<Route path='/contacto' element={<Contact />} />
						<Route path='/comunidad' element={<Community />} />
						<Route path='/crear-post' element={<CreatePost />} />
					</Routes>
				</main>
			</BrowserRouter>
		</Flowbite>
	)
}

export default App
