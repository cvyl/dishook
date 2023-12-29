import { AxiosInstance } from 'axios'
export declare class Request {
	private axios
	private retries
	constructor(axios: AxiosInstance);
	send(method: 'get' | 'post' | 'patch' | 'delete', data: unknown): Promise<unknown>;
}
