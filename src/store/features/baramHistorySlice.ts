import { BaramHistoryService } from '@/service/baram'
import { DayHistory } from '@/service/baram/interface/dayHistory.interface'
import { TimeHistory } from '@/service/baram/interface/timeHistory.interface'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
interface State {
    dayHistoryList: Array<DayHistory>
    timeHistoryList: Array<TimeHistory>
    historyStatus: string
}
const initialState: State = {
  dayHistoryList: [],
  timeHistoryList: [],
  historyStatus: ''
};
const bhs = new BaramHistoryService();

export const requestBaramHistory = createAsyncThunk(
    'baram/history',
    async () => {
      const response = await bhs.requestBaramHistory()
      return response
    }
  );

const baramHistorySlice = createSlice({
  name: 'baramHistory',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
        builder
            .addCase(requestBaramHistory.pending, (state) => {
                state.historyStatus = 'loading';
            })
            .addCase(requestBaramHistory.fulfilled, (state, action) => {
                state.dayHistoryList = action.payload.dayHistoryList
                state.timeHistoryList = action.payload.timeHistoryList
                state.historyStatus = 'idle';
            })
            .addCase(requestBaramHistory.rejected, (state) => {
                state.historyStatus = 'failed';
            });
  }
});

export const { } = baramHistorySlice.actions
export default baramHistorySlice.reducer