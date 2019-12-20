import {ConnectedComponentProps, Connector} from "./Connector"
import {BuildListPresenter} from "./presentation/BuildListPresenter"
import React from "react"
import {Build} from "./presentation/BuildCardPresenter"

export const BuildList = (props: ConnectedComponentProps<ReadonlyArray<Build>>) => <Connector component={BuildListPresenter} {...props}/>
