
import { useActions } from '@/src/hooks/useActions'
import { useAuth } from '@/src/hooks/useAuth'
import { CategoryService } from '@/src/services/category.service'
import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { BiLogOut } from 'react-icons/bi'
import Loader from '../../Loader'

const Sidebar: FC = () => {
	const { data, isLoading } = useQuery(
		['get categories'],
		() => CategoryService.getAll(),
		{
			select: ({ data }) => data
		}
	)

	const router = useRouter()
	const { asPath } = useRouter()
	const { user } = useAuth()
	const { logout } = useActions()

	const Logout = async () => {
		await logout()
		router.reload()
	}
	return (
		<aside
			className='bg-secondary flex flex-col justify-between'
			style={{
				height: '100vh'
			}}
		>
			<div>
				{isLoading ? (
					<Loader />
				) : data ? (
					<>
						<div className='text-xl text-white mt-4 mb-6 ml-6'>Categories:</div>
						<ul>
							{data.map(category => (
								<li key={category.id}>
									<Link
										className={cn(
											'block text-lg my-3 px-10 hover:text-primary transition-colors duration-200',
											asPath === `/category${category.slug}`
												? 'text-primary'
												: 'text-white'
										)}
										href={`/category/${category.slug}`}
									>
										{category.name}
									</Link>
								</li>
							))}
						</ul>
					</>
				) : (
					<div> Categories not found! </div>
				)}
			</div>

			{!!user && (
				<button
					className='text-white flex items-center ml-10 mb-10'
					onClick={Logout}
				>
					<BiLogOut />
					<span className='ml-2'>Logout</span>
				</button>
			)}
		</aside>
	)
}

export default Sidebar
