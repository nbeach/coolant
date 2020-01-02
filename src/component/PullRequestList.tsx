import {ConnectorProps, Connector} from "./Connector"
import React from "react"
import {PullRequest} from "../model"
import {PullRequestCardPresenterProps, PullRequestListPresenter} from "./presentation/PullRequestListPresenter"

export const PullRequestList = (props: ConnectorProps<readonly PullRequest[]> & PullRequestCardPresenterProps) =>
    <Connector component={PullRequestListPresenter} otherComponentProps={{ scaleFactor: props.scaleFactor}} {...props}/>
