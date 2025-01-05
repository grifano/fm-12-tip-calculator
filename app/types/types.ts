// Store State
export interface InputDataState {
  bill: string;
  tip: string;
  persons: string;
}
export interface ResultDataState {
  tipAmount: string;
  totalAmount: string;
}
export type ResetDataState = InputDataState & ResultDataState;
