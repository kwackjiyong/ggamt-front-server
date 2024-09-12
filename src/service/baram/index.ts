import Api from "@/util/api"
import { AxiosRequestConfig } from "axios";
import { ResponseBaramHistory } from "./interface/responseBaramHistory.interface";
import { ResponseBaramMacroCurrentInterface } from "./interface/responseBaramMacroCurrent.interface";

export class BaramHistoryService extends Api {
    async requestBaramHistory () {
        return this.request<ResponseBaramHistory>({
            url: '/baram',
            method: 'GET',
        });
    }
}

export class BaramMacroService extends Api {
    async requestBaramMacro () {
        return this.request<ResponseBaramMacroCurrentInterface>({
            url: '/baram/macro',
            method: 'GET',
        });
    }
}