import React from 'react'

const About = () => {
	return (
		<div className='px-6 py-2 md:px-12 xl:px-32'>
			<div className='w-full'>
				<p className='font-bold text-3xl text-blue-600 hover:text-blue-700 cursor-pointer'>
					About
				</p>
				<h2 className='xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 lg:text-1xl text-3xl lg:leading-10 leading-9 mt-6 dark:text-white'>
					¿Qué es Lovelace?
				</h2>
				<p className='font-normal text-base leading-6 mt-6 text-gray-600 dark:text-gray-100'>
					Lovelace es una galeria que almacena imagenes generadas mediante el
					uso de DALL-E, este es un modelo de aprendizaje automático
					desarrollado por OpenAI que puede generar imágenes novedosas a partir
					de la entrada de texto. Combina el modelo de lenguaje de GPT-3 con una
					red neuronal para la generación de imágenes, lo que le permite crear
					imágenes únicas y creativas basadas en descripciones escritas.
				</p>
			</div>

			<div className='lg:mt-14 sm:mt-10 mt-12'>
				<img
					className='lg:block hidden w-full rounded-lg'
					src='https://res.cloudinary.com/dalzs2gxa/image/upload/v1693812800/code/7cca3167-8d76-458b-885f-f28a9169a8cf_tve6wv.jpg'
					alt='Group of people Chilling'
				/>
				<img
					className='lg:hidden sm:block hidden w-full rounded-lg'
					src='https://res.cloudinary.com/dalzs2gxa/image/upload/v1693812916/code/7cca3167-8d76-458b-885f-f28a9169a8cf_1_xdmqnu.jpg'
					alt='Group of people Chilling'
				/>
				<img
					className='sm:hidden block w-full rounded-lg'
					src='https://res.cloudinary.com/dalzs2gxa/image/upload/v1693812916/code/7cca3167-8d76-458b-885f-f28a9169a8cf_1_xdmqnu.jpg'
					alt='Group of people Chilling'
				/>
			</div>

			<div className='lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12'>
				<div className='w-full xl:w-5/12 lg:w-6/12'>
					<h2 className='xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 lg:text-1xl text-3xl lg:leading-10 leading-9 mt-6 dark:text-white'>
						Sobre la IA
					</h2>
					<p className='font-normal text-base leading-6 text-gray-600 mt-4 dark:text-white'>
						Las imágenes generadas por DALL-E son a menudo surrealistas y
						visualmente impresionantes, ya que empujan los límites de lo que es
						posible en términos de generación de imágenes mediante modelos de
						aprendizaje automático. Al navegar a través de una colección de
						estas imágenes, uno puede obtener una apreciación del potencial de
						la IA para crear nuevas formas de arte e inspirar nuestra
						imaginación.
					</p>
					<p className='font-normal text-base leading-6 text-gray-600 mt-6 dark:text-white'>
						It is a long established fact that a reader will be distracted by
						the readable content of a page when looking at its layout. The point
						of using Lorem Ipsum.In the first place we have granted to God, and
						by this our present charter confirmed for us and our heirs forever
						that the English Church shall be free, and shall have her rights
						entire, and her liberties inviolate; and we will that it be thus
						observed; which is apparent from
					</p>
				</div>
				<div className='lg:flex items-center w-full lg:w-1/2'>
					<img
						className='lg:block hidden w-full rounded-lg'
						src='https://res.cloudinary.com/dalzs2gxa/image/upload/v1693812801/code/ab99e143-2e36-4cab-999e-310666e3f623_rzuyur.jpg'
						alt='people discussing on board'
					/>
					<img
						className='lg:hidden sm:block hidden w-full h-3/4 rounded-lg'
						src='https://res.cloudinary.com/dalzs2gxa/image/upload/v1693812801/code/ab99e143-2e36-4cab-999e-310666e3f623_rzuyur.jpg'
						alt='people discussing on board'
					/>
					<img
						className='sm:hidden block w-full rounded-lg'
						src='https://res.cloudinary.com/dalzs2gxa/image/upload/v1693812801/code/ab99e143-2e36-4cab-999e-310666e3f623_rzuyur.jpg'
						alt='people discussing on board'
					/>
				</div>
			</div>
		</div>
	)
}

export default About
