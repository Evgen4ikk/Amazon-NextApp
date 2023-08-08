import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import HeaderProfile from './HeaderProfile'
import Search from './Search'
import HeadersCart from './cart/HeaderCart'

const Header: FC = () => {
	return (
		<header
			className='bg-secondary w-full py-6 px-6 grid'
			style={{
				gridTemplateColumns: '1fr 3fr 1.2fr'
			}}
		>
			<Link href='/'>
				<Image
					priority
					width={180}
					height={37}
					src='/logo.svg'
					alt='Amazon v2'
				/>
			</Link>
			<Search />
			<div className='flex items-center justify-end gap-8'>
				<Link href='/favorites' className='text-white'>
					<AiOutlineHeart size={28} />
				</Link>
				<HeadersCart />
				<HeaderProfile />
			</div>
		</header>
	)
}

export default Header
