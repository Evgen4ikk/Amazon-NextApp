import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { BsSearch } from 'react-icons/bs'

const Search: FC = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const router = useRouter()

	const handleSearch = () => {
		if (searchTerm.trim() !== '') {
			router.push(`/q?term=${encodeURIComponent(searchTerm)}`)
		}
	}

	return (
		<div className='flex'>
			<input
				placeholder='Search...'
				className='bg-[#1f2b34] outline-none rounded-l-xl px-2 w-[350px] text-white'
				value={searchTerm}
				onChange={e => setSearchTerm(e.target.value)}
			/>
			<button
				className='bg-primary px-3 rounded-r-xl hover:bg-primary/90'
				onClick={handleSearch}
			>
				<BsSearch className='text-white' />
			</button>
		</div>
	)
}

export default Search
