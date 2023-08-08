import { useActions } from '@/src/hooks/useActions'
import { useCart } from '@/src/hooks/useCart'
import { IProduct } from '@/src/types/product.interface'
import { FC } from 'react'
import { RiShoppingCartFill, RiShoppingCartLine } from 'react-icons/ri'

const AddToCartButton: FC<{ product: IProduct }> = ({ product }) => {
	const { addToCart, removeFromCart } = useActions()
	const { items } = useCart()

	const currentElement = items.find(
		cartItem => cartItem.product.id === product.id
	)
	return (
		<div>
			<button
				className='text-secondary'
				onClick={() =>
					currentElement
						? removeFromCart({ id: currentElement.id })
						: addToCart({
								product,
								quantity: 1,
								price: product.price
						  })
				}
			>
				{currentElement ? <RiShoppingCartFill /> : <RiShoppingCartLine />}
			</button>
		</div>
	)
}

export default AddToCartButton
