import { Blockchain } from "./blockchain";

export interface AppState {
    readonly blockchain: Blockchain[];
}