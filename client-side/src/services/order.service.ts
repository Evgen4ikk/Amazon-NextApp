import { instance } from '../api/api.interceptor'
import { IOrder } from '../types/order.interface'

enum EnumOrderStatus {
	PENDING = 'PENDING',
	PAYED = 'PAYED',
	SHIPPED = 'SHIPPED',
	DELIVERED = 'DELIVERED'
}

type TypeData = {
	status?: EnumOrderStatus
	items: {
		productId: number
		price: number
		quantity: number
	}[]
}

export const OrderService = {
	async getAll() {
		return await instance<IOrder[]>({
			url: '/orders',
			method: 'GET'
		})
	},

	async place(data: TypeData) {
		return instance<{ confirmation: { confirmation_url: string } }>({
			url: '/orders',
			method: 'POST',
			data
		})
	}
}
