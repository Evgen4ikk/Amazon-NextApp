import { instance } from '../api/api.interceptor'

const STATISTICS = 'statistics'

export type TypeStatisticsResponse = {
	name: string
	value: number
}[]

export const StatisticsService = {
	async getAll() {
		return instance<TypeStatisticsResponse>({
			url: `${STATISTICS}/main`,
			method: 'GET'
		})
	}
}
