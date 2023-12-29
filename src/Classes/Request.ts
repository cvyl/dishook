import { AxiosError, AxiosInstance } from 'axios'

export class Request {
	private retries = 1

	constructor(private axios: AxiosInstance) {}

	public async send(
		method: 'get' | 'post' | 'patch' | 'delete',
		data: unknown,
	): Promise<unknown> {
		try {
			const response = await this.axios.request({
				method,
				data,
			})

			const result = response.data

			if(result.status === 429 && this.retries < 3) {
				this.retries += 1
				return this.send(method, data)
			}

			this.retries = 1
			return result
		} catch (error) {
			if ((error as AxiosError).isAxiosError) {
				const axiosError = error as AxiosError
				if (axiosError.response) {
					return axiosError.response.data
				}
			}
		}

	}
}