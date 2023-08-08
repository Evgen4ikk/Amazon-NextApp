import { useProfile } from '@/src/hooks/useProfile'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { MdLogin } from 'react-icons/md'

const HeaderProfile: FC = () => {
	const { profile } = useProfile()

	if (!profile)
		return (
			<Link href='/auth'>
				<button className='pt-2'>
					<MdLogin className='text-white' size={24} />
				</button>
			</Link>
		)

	return (
		<Link href='/my-orders'>
			<div>
				{profile?.avatarPath && (
					<Image
						width={43}
						height={43}
						src={profile?.avatarPath}
						alt='profile'
						className='rounded-full border-primary border border-solid animate-opacity'
					/>
				)}
			</div>
		</Link>
	)
}

export default HeaderProfile
