import type { RootState } from '../store'

// Other code such as selectors can use the imported `RootState` type
export const loginActivityRecords = (state: RootState) => state.activityRecord.loginActivityRecords

export const securityActivityRecords = (state: RootState) => state.activityRecord.securityActivityRecords
