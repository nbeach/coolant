import moment from "moment"

const invokeAction = (action: () => void | Promise<void>) => {
    const result = action()

    if (result !== undefined) {
        result.then()
    }
}

export const periodically = (action: () => void | Promise<void>, intervalSeconds: number = 5): NodeJS.Timeout => {
    invokeAction(action)
    return setInterval(() => invokeAction(action), intervalSeconds * 1000) as any // TODO: Remove this case when storybook issue resolved
}

const isPromise = <T>(value: T | Promise<T>): value is Promise<T> => (value as Promise<T>).then !== undefined

export const periodicallyWithState = <T>(action: (state: T) => T | Promise<T>, initialState: T, intervalSeconds?: number): NodeJS.Timeout => {
    let state = initialState
    return periodically(async () => {
        const result = action(state)
        state = isPromise(result) ? await result : result
    }, intervalSeconds)
}

export const atTime = (time: string, action: () => void) => {
    periodicallyWithState(({ alreadyTriggered}) => {
        const desiredMoment = moment(time, "hh:mm")
        const isDesiredMoment = moment().isSame(desiredMoment, "minute")

        if (isDesiredMoment && !alreadyTriggered) {
            action()
        }

        return { alreadyTriggered: isDesiredMoment }
    }, { alreadyTriggered: false })

}
