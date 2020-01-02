import React from "react"
import styled from "styled-components"
import {Build} from "../../model"
import {BuildCardPresenter} from "./BuildCardPresenter"
import {ConnectedDataProp} from "../Connector"

export interface BuildListPresenterProps {
    readonly scaleFactor?: number
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`

export const BuildListPresenter = (props: ConnectedDataProp<readonly Build[]> & BuildListPresenterProps) => <Container>
    {props.data.map(build => <BuildCardPresenter key={build.id} scaleFactor={props.scaleFactor} {...build}/>)}
</Container>


