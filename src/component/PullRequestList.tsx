import {ConnectedComponentProps, Connector} from "./Connector"
import React from "react"
import {PullRequest} from "../model"
import {PullRequestListPresenter} from "./presentation/PullRequestListPresenter"

export const PullRequestList = (props: ConnectedComponentProps<ReadonlyArray<PullRequest>>) => <Connector component={PullRequestListPresenter} {...props}/>
