import { Navbar, Button } from 'flowbite-react'
import Switcher from './Switcher'
import lovelaceLogo from '../assets/lovelace.svg'
import { useLocation } from 'react-router-dom'

const Header = () => {
	return (
		<>
			<Navbar
				className='bg-white dark:bg-gray-800'
				fluid={true}
				rounded={false}
			>
				<Navbar.Brand href='/'>
					<img
						src={lovelaceLogo}
						className='mr-2 h-8 sm:h-10 rounded-lg'
						alt='lovelace logo'
					/>
					<span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
						Lovelace
					</span>
				</Navbar.Brand>
				<div className='flex md:order-2'>
					<Switcher className='mx-0.5' />
					<Button href='/crear-post' className='mx-0.5'>
						Crear
					</Button>
					<Navbar.Toggle className='mx-0.5' />
				</div>

				<Navbar.Collapse>
					<Navbar.Link href='/' active={location.pathname === '/'}>
						Inicio
					</Navbar.Link>
					<Navbar.Link
						href='/acerca-de-nosotros'
						active={location.pathname === '/acerca-de-nosotros'}
					>
						Acerca de nosotros
					</Navbar.Link>
					<Navbar.Link
						href='/comunidad'
						active={location.pathname === '/comunidad'}
					>
						Comunidad
					</Navbar.Link>
					<Navbar.Link
						href='/contacto'
						active={location.pathname === '/contacto'}
					>
						Contacto
					</Navbar.Link>
				</Navbar.Collapse>
			</Navbar>
		</>
	)
}

export default Header
