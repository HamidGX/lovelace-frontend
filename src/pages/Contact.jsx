import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const Contact = () => {
	const [formData, setFormData] = useState({
		text: '',
		email: '',
		message: '',
	})

	const handleSubmit = async (values, { resetForm }) => {
		try {
			const response = await fetch('URL_POR_DEFINIRSE_API', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(values),
			})

			if (response.ok) {
				// La solicitud fue exitosa, puedes realizar alguna acción aquí si es necesario
				resetForm() // Limpiar el formulario
				console.log('Mensaje enviado con éxito')
			} else {
				// Manejar errores aquí si es necesario
				console.error('Error en la solicitud POST')
				console.log('Hubo un error al enviar el mensaje')
			}
		} catch (error) {
			console.error('Error en la solicitud POST', error)
			console.log('Hubo un error al enviar el mensaje')
		}
	}

	return (
		<div className='xl:flex xl:justify-end px-6 py-2 md:px-12 xl:px-32'>
			<div className='container sm:mx-auto'>
				<div className='block xl:flex justify-between xl:items-center lg:items-center md:flex'>
					<div className='w-11/12 xl:w-4/12 mx-auto xl:mx-0 md:w-5/12'>
						<p className='font-bold text-3xl text-blue-600 hover:text-blue-700 cursor-pointer pb-4'>
							Contacto
						</p>
						<p className='text-lg text-gray-600  dark:text-gray-100 mb-6'>
							¡Hola! Gracias por contactarnos. Por favor, completa el siguiente
							formulario con tus datos y tu mensaje y nos pondremos en contacto
							contigo lo antes posible.
						</p>
						<div className='flex w-full flex-wrap'>
							<div className='w-full'>
								<Formik
									initialValues={formData}
									onSubmit={handleSubmit}
									validate={(values) => {
										let errores = {}

										// Validación de nombre
										if (!values.text) {
											errores.text = 'Por favor, ingresa un nombre'
										} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.text)) {
											errores.text =
												'El nombre solo puede contener letras y espacios'
										}

										// Validación de correo electrónico
										if (!values.email) {
											errores.email = 'Por favor, ingresa un correo electrónico'
										} else if (
											!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
												values.email
											)
										) {
											errores.email =
												'El correo solo puede contener letras, números, puntos, guiones y guion bajo.'
										}

										return errores
									}}
								>
									<Form>
										<div>
											<label
												htmlFor='text'
												className='leading-7 text-sm text-gray-600 font-bold dark:text-white'
											>
												Nombre
											</label>
											<Field
												type='text'
												id='text'
												name='text'
												placeholder='Ingresa tu nombre'
												className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3 my-2'
											/>
											<ErrorMessage
												name='text'
												component='div'
												className='text-red-600'
											/>
										</div>

										<div>
											<label
												htmlFor='email'
												className='leading-7 text-sm text-gray-600 dark:text-white font-bold'
											>
												Email
											</label>
											<Field
												type='email'
												id='email'
												name='email'
												placeholder='correo@ejemplo.com'
												className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3 my-2'
											/>
											<ErrorMessage
												name='email'
												component='div'
												className='text-red-600'
											/>
										</div>

										<div className='relative mb-4'>
											<label
												htmlFor='message'
												className='leading-7 text-sm text-gray-600 dark:text-white font-bold'
											>
												Message
											</label>
											<Field
												as='textarea'
												id='message'
												name='message'
												className='w-full bg-gray-50 border-gray-300 rounded border  focus:ring-[#6469ff] focus:border-[#6469ff] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out my-2'
											/>
										</div>

										<button
											type='submit'
											className='focus:outline-none bg-blue-700 hover:bg-blue-600 text-white text-base w-full py-3 px-6 rounded'
										>
											Enviar mensaje
										</button>
									</Form>
								</Formik>
							</div>
						</div>
					</div>

					<div className='w-11/12 xl:w-5/12 mx-auto xl:mx-0 mt-8 xl:mt-0 flex justify-center md:w-5/12 relative'>
						<div className='h-5/5 w-5/5 xl:w-4/5 xl:h-auto'>
							<img
								className='rounded-lg'
								src='https://res.cloudinary.com/dalzs2gxa/image/upload/v1693813554/code/9b5af27c-50a5-49e4-b5e2-aa6a520576cf_idqxrf.jpg'
								alt='people discussing on board'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
