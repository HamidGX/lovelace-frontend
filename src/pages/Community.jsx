import React, { useEffect, useState } from 'react'

import { Card, FormField, Loader } from '../components'

const RenderCards = ({ data, title }) => {
	if (data?.length > 0) {
		return data.map((post) => <Card key={post._id} {...post} />)
	}

	return (
		<h2 className='mt-5 font-bold text-[#6469ff] text-xl uppercase'>{title}</h2>
	)
}

const Community = () => {
	const [loading, setLoading] = useState(false)
	const [allPosts, setAllPosts] = useState(null)

	const [searchText, setSearchText] = useState('')
	const [searchTimeout, setSearchTimeout] = useState(null)
	const [searchedResults, setSearchedResults] = useState(null)

	const fetchPosts = async () => {
		setLoading(true)

		try {
			const response = await fetch(import.meta.env.VITE_API_POST_URL, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			})

			if (response.ok) {
				const result = await response.json()
				setAllPosts(result.data.reverse())
			}
		} catch (err) {
			alert(err)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchPosts()
	}, [])

	const handleSearchChange = (e) => {
		clearTimeout(searchTimeout)
		setSearchText(e.target.value)

		setSearchTimeout(
			setTimeout(() => {
				const searchResult = allPosts.filter(
					(item) =>
						item.name.toLowerCase().includes(searchText.toLowerCase()) ||
						item.prompt.toLowerCase().includes(searchText.toLowerCase())
				)
				setSearchedResults(searchResult)
			}, 500)
		)
	}

	return (
		<section className='px-6 py-2 md:px-12 xl:px-32'>
			<div>
				<p className='font-bold text-3xl text-blue-600 hover:text-blue-700 cursor-pointer'>
					Comunidad
				</p>
				<p className='text-justify font-normal text-base leading-6 text-gray-600 mt-6 dark:text-gray-100'>
					Explora todas las imágenes generadas por la comunidad...
				</p>
			</div>

			<div className='mt-10'>
				<FormField
					labelName='Search posts'
					type='text'
					name='text'
					placeholder='Search something...'
					value={searchText}
					handleChange={handleSearchChange}
				/>
			</div>

			<div className='mt-10'>
				{loading ? (
					<div className='flex justify-center items-center'>
						<Loader />
					</div>
				) : (
					<>
						{searchText && (
							<h2 className='font-medium text-[#666e75] text-xl mb-3'>
								Showing Resuls for{' '}
								<span className='text-[#222328]'>{searchText}</span>:
							</h2>
						)}
						<div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
							{searchText ? (
								<RenderCards
									data={searchedResults}
									title='No Search Results Found'
								/>
							) : (
								<RenderCards
									data={allPosts}
									title='No hay ningún post todavía'
								/>
							)}
						</div>
					</>
				)}
			</div>
		</section>
	)
}

export default Community
