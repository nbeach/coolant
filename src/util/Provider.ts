import {periodically} from "../event"

export type Provider<T> =  () => Promise<T>

export const cachingProvider = <T>(provider: Provider<T>, cacheDuration: number): Provider<T> => {
    let cache: Promise<T> | null = null
    periodically( () => {
        cache = provider()
    }, cacheDuration)

    return () => cache!
}
