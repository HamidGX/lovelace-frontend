import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { preview } from '../assets'
import { getRandomPrompt } from '../utils'
import { FormField, Loader } from '../components'

const CreatePost = () => {
	const navigate = useNavigate()

	const [form, setForm] = useState({
		name: '',
		prompt: '',
		photo: '',
	})

	const [generatingImg, setGeneratingImg] = useState(false)
	const [loading, setLoading] = useState(false)

	const handleChange = (e) =>
		setForm({ ...form, [e.target.name]: e.target.value })

	const handleSurpriseMe = () => {
		const randomPrompt = getRandomPrompt(form.prompt)
		setForm({ ...form, prompt: randomPrompt })
	}

	const generateImage = async () => {
		if (form.prompt) {
			try {
				setGeneratingImg(true)
				const response = await fetch(import.meta.env.VITE_API_DALLE_URL, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						prompt: form.prompt,
					}),
				})

				const data = await response.json()
				setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` })
				toast.success('Image created successfully', {
					position: 'top-right',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: 'colored',
				})
			} catch (err) {
				toast.error(err.message, {
					position: 'top-right',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: 'colored',
				})
			} finally {
				setGeneratingImg(false)
			}
		} else {
			toast.error('Por favor ingresa un prompt', {
				position: 'top-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'colored',
			})
		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (form.prompt && form.photo) {
			setLoading(true)
			try {
				const response = await fetch(import.meta.env.VITE_API_POST_URL, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ ...form }),
				})

				await response.json()
				toast.success('Image shared successfully', {
					position: 'top-right',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: 'colored',
				})
				setTimeout(() => {
					navigate('/comunidad')
				}, 8000)
			} catch (err) {
				toast.error(err.message, {
					position: 'top-right',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: 'colored',
				})
			} finally {
				setLoading(false)
			}
		} else {
			toast.warning('Please generate an image with proper details', {
				position: 'top-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'colored',
			})
		}
	}

	return (
		<section className='px-6 py-2 md:px-12 xl:px-32'>
			<div>
				<p className='font-bold text-3xl text-blue-600 hover:text-blue-700 cursor-pointer pb-4'>
					Crear
				</p>
				<p className='mt-2 text-gray-600 dark:text-white'>
					Genera una imagen con un prompt y compártela con la comunidad.
				</p>
			</div>

			<form className='mt-10' onSubmit={handleSubmit}>
				<div className='flex flex-col gap-5'>
					<FormField
						labelName='Tu nombre'
						type='text'
						name='name'
						placeholder='Ingresa tu nombre'
						value={form.name}
						handleChange={handleChange}
					/>

					<FormField
						labelName='Prompt'
						type='text'
						name='prompt'
						placeholder='An Impressionist oil painting of sunflowers in a purple vase…'
						value={form.prompt}
						handleChange={handleChange}
						isSurpriseMe
						handleSurpriseMe={handleSurpriseMe}
					/>

					<div className='relative  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-3 h-64 flex justify-center items-center'>
						{form.photo ? (
							<img
								src={form.photo}
								alt={form.prompt}
								className='w-full h-full object-contain'
							/>
						) : (
							<img
								src={preview}
								alt='preview'
								className='w-4/12 h-4/12 sm:w-3/12 h-3/12 object-contain opacity-70'
							/>
						)}

						{generatingImg && (
							<div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg'>
								<Loader />
							</div>
						)}
					</div>
				</div>

				<div className='mt-5 flex gap-5'>
					<button
						type='button'
						onClick={generateImage}
						className=' text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
					>
						{generatingImg ? 'Generando..' : 'Generar'}
					</button>
				</div>

				<div className='mt-10'>
					<p className='mt-2 text-[#666e75] text-[14px]'>
						** Una vez que hayas creado la imagen que deseas, puedes
						compartirla. **
					</p>
					<button
						type='submit'
						className='mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
					>
						{loading ? 'Compartiendo...' : 'Compartir con la comunidad'}
					</button>
				</div>
			</form>
			<ToastContainer />
		</section>
	)
}

export default CreatePost
