import { axiosClassic, instance } from '@/src/api/api.interceptor'
import { IProduct, TypePaginationProducts } from '@/src/types/product.interface'
import { TypeProductData, TypeProductDataFilters } from './product.types'

export const ProductService = {
	async getAll(queryData = {} as TypeProductDataFilters) {
		const { data } = await axiosClassic<TypePaginationProducts>({
			url: '/products',
			method: 'GET',
			params: queryData
		})

		return data
	},

	async getSimilar(productId: string | number) {
		return axiosClassic<IProduct[]>({
			url: `/products/similar/${productId}`,
			method: 'GET'
		})
	},

	async getBySlug(slug: string) {
		return axiosClassic<IProduct>({
			url: `/products/by-slug/${slug}`,
			method: 'GET'
		})
	},

	async getByCategory(categorySlug: string) {
		return axiosClassic<IProduct>({
			url: `/products/by-category/${categorySlug}`,
			method: 'GET'
		})
	},

	async getById(id: string | number) {
		return instance<IProduct>({
			url: `/products/${id}`,
			method: 'GET'
		})
	},

	async create() {
		return instance<IProduct>({
			url: '/products',
			method: 'POST'
		})
	},

	async update(id: string | number, data: TypeProductData) {
		return instance<IProduct>({
			url: `/products/${id}`,
			method: 'PUT',
			data
		})
	},

	async delete(id: string | number) {
		return instance<IProduct>({
			url: `/products/${id}`,
			method: 'DELETE'
		})
	}
}
