import Api from "@/util/api"
import { AxiosRequestConfig } from "axios";
import { ResponseBaramHistory } from "./interface/responseBaramHistory.interface";

export class BaramHistoryService extends Api {
    async requestBaramHistory () {
        return this.request<ResponseBaramHistory>({
            url: '/baram',
            method: 'GET',
        });
    }
}