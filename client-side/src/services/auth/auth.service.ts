
import { axiosClassic } from '@/src/api/api.interceptor'
import { IAuthResponse, IEmailPassword } from '@/src/store/user/user.interface'
import Cookies from 'js-cookie'
import { saveToStorage } from './auth.helper'

export const AuthService = {
	async main(type: 'login' | 'register', data: IEmailPassword) {
		const response = await axiosClassic<IAuthResponse>({
			url: `/auth/${type}`,
			method: 'POST',
			data
		})

		if (response.data.accessToken) saveToStorage(response.data)

		return response.data
	},

	async getNewTokens() {
		const refreshToken = Cookies.get('refreshToken')

		const response = await axiosClassic.post<string, { data: IAuthResponse }>(
			'/auth/login/access-token',
			{ refreshToken }
		)

		if (response.data.accessToken) saveToStorage(response.data)

		return response
	}
}
