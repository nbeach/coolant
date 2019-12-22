import React, {FunctionComponent} from "react"
import {periodically} from "../event"
import {Provider} from ".."

export interface ConnectedDataProp<T> {
    readonly data: T
}

export interface ConnectorProps<T> {
    readonly provider: Provider<T>
    readonly updateIntervalSeconds?: number
}

export interface ConnectorComponentProps<T, C> {
    readonly otherComponentProps: C
    readonly component: FunctionComponent<ConnectedDataProp<T> & C>
}

export class Connector<T, C> extends React.Component<ConnectorProps<T> & ConnectorComponentProps<T, C>, { readonly data: T | null }> {
    // tslint:disable-next-line:readonly-keyword
    private intervalId: NodeJS.Timeout | null = null

    constructor(props: ConnectorProps<T> & ConnectorComponentProps<T, C>) {
        super(props)
        this.state = { data: null }
    }


    public render() {
        const ComponentToConnect = this.props.component
        return this.state.data === null ? <></> : <ComponentToConnect data={this.state.data} {...this.props.otherComponentProps}/>
    }

    public componentDidMount(): void {
        this.intervalId = periodically(() => this.updateState(), this.props.updateIntervalSeconds)
    }

    public componentWillUnmount(): void {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId)
        }
    }

    private async updateState() {
        const data = await this.props.provider()
        this.setState({ data })
    }
}
