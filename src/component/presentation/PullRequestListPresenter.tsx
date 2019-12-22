import React from "react"
import styled from "styled-components"
import {PullRequest} from "../../model"
import {PullRequestCardPresenter} from "./PullRequestCardPresenter"
import {ConnectedDataProp} from "../Connector"

export interface PullRequestCardPresenterProps {
    readonly fontSize?: string
}

const Container = styled.div`
    font-family: sans-serif;
    font-size: 1.15rem;
    width: 100%;
     display: flex;
    flex-direction: column;
`

export const PullRequestListPresenter = (props: ConnectedDataProp<readonly PullRequest[]> & PullRequestCardPresenterProps) =>
   <Container>
       { props.data.length === 0 ? <strong>No Open Pull Requests</strong> :
           props.data.map(pullRequest => <PullRequestCardPresenter key={pullRequest.id} pullRequest={pullRequest} fontSize={props.fontSize}/>)}
    </Container>
