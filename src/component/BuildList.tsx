import {ConnectorProps, Connector} from "./Connector"
import {BuildListPresenterProps, BuildListPresenter} from "./presentation/BuildListPresenter"
import React from "react"
import {Build} from "../model"

export const BuildList = (props: ConnectorProps<readonly Build[]> & BuildListPresenterProps) =>
    <Connector component={BuildListPresenter} otherComponentProps={{ fontSize: props.fontSize}} {...props}/>
