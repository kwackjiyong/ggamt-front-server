import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponseTransformer } from 'axios'


export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'
export default class Api {
    private readonly instance: AxiosInstance
    constructor () {
        this.instance = axios.create({
            baseURL: '/api',
            headers: {
                'Cache-Control': 'no-cache'
            },
            transformResponse: this.getTransformResponse()
        })
    }

    private getTransformResponse(): AxiosResponseTransformer {
        return (data: any) => {
            try {
                const _data = JSON.parse(data)
                return {
                    ..._data
                }
            } catch (error) {
                return {}
            }
        }
    }

    public async request<T>(config: AxiosRequestConfig): Promise<T> {
        const { transformResponse: defaultTransformResponse } = this.instance.defaults
        const transformResponse: AxiosResponseTransformer[] = [defaultTransformResponse as AxiosResponseTransformer]

        const response = await this.instance.request<T>({
            ...config,
            transformResponse
        })
        return response.data
    }
}