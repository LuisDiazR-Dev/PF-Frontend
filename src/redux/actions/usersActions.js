import axios from 'axios'
import {
	FETCH_USERS,
	FETCH_USER,
	UPDATE_USER,
	DELETE_USER,
	GET_PROFILE,
	FETCH_ERROR,
} from '../types'

export const getAllUsers = (token) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.get('/users', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			dispatch({ type: FETCH_USERS, payload: data })
		} catch (error) {
			dispatch({ type: FETCH_ERROR, payload: error.message })
		}
	}
}

export const getUserById = (id) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.get(`/users/${id}`)
			dispatch({ type: FETCH_USER, payload: data })
		} catch (error) {
			dispatch({ type: FETCH_ERROR, payload: error.message })
		}
	}
}

export const updateUser = (userData, token) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.put(`/users/profile`, {userData}, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			console.log("FUNCIONA: ", data)
			dispatch({ type: UPDATE_USER, payload: data })
		} catch (error) {
			dispatch({ type: FETCH_ERROR, payload: error.message })
		}
	}
  }

export const deleteUserById = (token) => {
	return async (dispatch) => {
		try {
			await axios.delete(`/users`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			dispatch({ type: DELETE_USER, payload: id })
		} catch (error) {
			dispatch({ type: FETCH_ERROR, payload: error.message })
		}
	}
}

export const getUserProfile = (token) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.get('/users/profile', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			dispatch({ type: GET_PROFILE, payload: data })
		} catch (error) {
			dispatch({ type: FETCH_ERROR, payload: error.message })
		}
	}
}
