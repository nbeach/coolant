import React, {FunctionComponent} from "react"

export type Provider<T> =  () => Promise<T>

export interface ConnectedComponentProps<T> {
    readonly provider: Provider<T>
    readonly updateIntervalSeconds?: number
}

export interface ConnectorProps<T, C> {
    readonly provider: Provider<T>,
    readonly updateIntervalSeconds?: number
    readonly component: FunctionComponent<{ readonly data: T }>
}

export class Connector<T, C> extends React.Component<ConnectorProps<T, C>, { readonly data: T }> {
    // tslint:disable-next-line:readonly-keyword
    private intervalId: NodeJS.Timeout | null = null

    public render() {
        const ComponentToConnect = this.props.component
        return <ComponentToConnect data={this.state.data}/>
    }

    public componentDidMount(): void {
        const updateIntervalMilliseconds = (this.props.updateIntervalSeconds || 5) * 1000

        this.intervalId = setInterval(() => {
            this.props.provider().then(data => this.setState({ data }))
        }, updateIntervalMilliseconds)
    }

    public componentWillUnmount(): void {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId)
        }
    }
}
