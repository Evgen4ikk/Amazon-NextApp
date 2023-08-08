import { useActions } from '@/src/hooks/useActions'
import { useCart } from '@/src/hooks/useCart'
import { useOutside } from '@/src/hooks/useOuteside'
import { OrderService } from '@/src/services/order.service'
import { convertPrice } from '@/src/utils/convertPrice'
import { useMutation } from '@tanstack/react-query'
import cn from 'clsx'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'
import { Button } from '../../../button/Button'
import SquareButton from '../../../button/SquareButton'
import CartItem from './cart-item/CartItem'
const HeadersCart: FC = () => {
	const { isShow, setIsShow, ref } = useOutside(false)

	const { items, total } = useCart()

	const { reset } = useActions()

	const { push } = useRouter()

	const { mutate } = useMutation(
		['create order and payment'],
		() =>
			OrderService.place({
				items: items.map(item => ({
					price: item.price,
					productId: item.product.id,
					quantity: item.quantity
				}))
			}),
		{
			onSuccess({ data }) {
				push(data.confirmation.confirmation_url).then(() => reset())
			}
		}
	)

	return (
		<div className='relative' ref={ref}>
			<SquareButton
				Icon={RiShoppingCartLine}
				onClick={() => {
					setIsShow(!isShow)
				}}
				number={items.length}
			/>

			<div
				className={cn(
					'absolute top-[3.5rem] w-80 -left-[17.5rem] bg-secondary rounded-xl px-5 py-3 text-sm menu z-20 text-white',
					isShow ? 'open-menu' : 'close-menu'
				)}
			>
				<div>
					{items.length ? (
						items.map(item => <CartItem item={item} key={item.id} />)
					) : (
						<div className='font-light'>Cart is empty!</div>
					)}
				</div>

				<div className='pt-3'>
					<div>Total:</div>
					<div>{convertPrice(total)}</div>
				</div>
				<div className='text-center'>
					<Button
						variant='white'
						size='sm'
						className='btn-link mt-5 mb-2'
						onClick={() => mutate()}
					>
						Place order
					</Button>
				</div>
			</div>
		</div>
	)
}

export default HeadersCart
