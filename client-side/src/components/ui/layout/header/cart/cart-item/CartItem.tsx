import { ICartItem } from '@/src/types/cart.interface'
import { convertPrice } from '@/src/utils/convertPrice'
import Image from 'next/image'
import { FC } from 'react'
import CartActions from './cart-actions/CartActions'

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	return (
		<div className='flex h-[100px] mb-5'>
			<Image
				src={item.product.images[0]}
				width={100}
				height={100}
				alt={item.product.name}
			/>
			<div className='ml-5'>
				<div className='text-xs font-semibold'>{item.product.name}</div>
				<div>{convertPrice(item.product.price)}</div>

				<CartActions item={item} />
			</div>
		</div>
	)
}

export default CartItem
