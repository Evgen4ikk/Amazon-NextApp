import { createAsyncThunk } from '@reduxjs/toolkit'

import { IAuthResponse, IEmailPassword } from './user.interface'
import { AuthService } from '@/src/services/auth/auth.service'
import { removeFromStorage } from '@/src/services/auth/auth.helper'
import { errorCatch } from '@/src/api/api.helper'

/* register */
export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/register',
	async (data, thunkApi) => {
		try {
			const response = await AuthService.main('register', data)
			return response
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

/* login */
export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/login',
	async (data, thunkApi) => {
		try {
			const response = await AuthService.main('login', data)
			return response
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

/* logout */
export const logout = createAsyncThunk('auth/logout', async () => {
	removeFromStorage()
})

/* checkAuth */
export const checkAuth = createAsyncThunk<IAuthResponse>(
	'auth/check-auth',
	async (_, thunkApi) => {
		try {
			const response = await AuthService.getNewTokens()

			return response.data
		} catch (error) {
			if (errorCatch(error) === 'Invalid refresh token') {
				thunkApi.dispatch(logout())
			}

			return thunkApi.rejectWithValue(error)
		}
	}
)
