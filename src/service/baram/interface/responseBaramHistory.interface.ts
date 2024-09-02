import { DayHistory } from "./dayHistory.interface";
import { TimeHistory } from "./timeHistory.interface";

export interface ResponseBaramHistory {
    dayHistoryList: Array<DayHistory>
    timeHistoryList: Array<TimeHistory>
}