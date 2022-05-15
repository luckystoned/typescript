import { type } from "os"

export interface Sub {
    nick: string,
    subsMonths: number,
    avatar: string,
    description?: string
}

export type SubsResponseFromApi = Array<{
    nick: string,
    subsMonths: number,
    avatar: string,
    description?: string
}>