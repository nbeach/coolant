import React, {FunctionComponent} from "react"

const sleep = (milliseconds: number): Promise<void> =>  {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export type StateProvider<T> = () => Promise<T>

export interface IntervalUpdateConnectProps<T> {
    readonly stateProvider: StateProvider<T>
    readonly updateInterval: number
}

export const IntervalUpdateConnect = <T extends {}>(Component: FunctionComponent<T>) => {
    return class ConnectorComponent extends React.Component<IntervalUpdateConnectProps<T>, { readonly unmounted: boolean, readonly wrappedProps: T | null}> {

        constructor(props: IntervalUpdateConnectProps<T>) {
            super(props)
            this.state = {
                unmounted: false,
                wrappedProps: null,
            }
            this.setupInterval().then()
        }

        public componentWillUnmount(): void {
            this.state = {
                ...this.state,
                unmounted: true,
            }
        }

        public render() {
            const wrappedProps = this.state.wrappedProps
            return wrappedProps === null ? <span/> : <Component {...wrappedProps}/>
        }

        public async setupInterval() {
            while (true) {
                const newState = await this.props.stateProvider()
                this.setState({ ...this.state, wrappedProps: newState})
                await sleep(this.props.updateInterval)
                if (this.state.unmounted) { break }
            }
        }

    }
}

