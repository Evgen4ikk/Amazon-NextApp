import Heading from '@/src/components/ui/Heading'
import Meta from '@/src/components/ui/Meta'
import Layout from '@/src/components/ui/layout/Layout'
import { NextPageAuth } from '@/src/providers/auth-provider/auth-page.types'
import { OrderService } from '@/src/services/order.service'
import { convertPrice } from '@/src/utils/convertPrice'
import { useQuery } from '@tanstack/react-query'


const MyOrdersPage: NextPageAuth = () => {
	const { data: orders } = useQuery(
		['my orders'],
		() => OrderService.getAll(),
		{
			select: ({ data }) => data
		}
	)
	return (
		<Meta title='MyOrders'>
			<Layout>
				<Heading>My Orders</Heading>
				<section>
					{orders?.length ? (
						orders.map(order => (
							<div
								key={order.id}
								className='bg-white shadow flex gap-10 p-7 my-7 rounded-lg'
							>
								<span>#{order.id}</span>
								<span>{order.status}</span>
								<span>
									{new Date(order.createdAt).toLocaleDateString('ru-Ru')}
								</span>
								<span>{convertPrice(order.total)}</span>
							</div>
						))
					) : (
						<div>Order not found!</div>
					)}
				</section>
			</Layout>
		</Meta>
	)
}

MyOrdersPage.isOnlyUser = true

export default MyOrdersPage
