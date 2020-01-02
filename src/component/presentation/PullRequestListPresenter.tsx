import React from "react"
import styled from "styled-components"
import {PullRequest} from "../../model"
import {PullRequestCardPresenter} from "./PullRequestCardPresenter"
import {ConnectedDataProp} from "../Connector"
import {Style} from "../../util/Style"

export interface PullRequestCardPresenterProps {
    readonly scaleFactor?: number
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
`

const VariableSizeText = styled.span<{readonly scaleFactor: number }>`
    font-size: ${({scaleFactor}) => scaleFactor * Style.size.baseFontSize};
`

export const PullRequestListPresenter = (props: ConnectedDataProp<readonly PullRequest[]> & PullRequestCardPresenterProps) =>
   <Container>
       { props.data.length === 0 ? <VariableSizeText scaleFactor={props.scaleFactor ?? 1}>No Open Pull Requests</VariableSizeText> :
           props.data.map(pullRequest => <PullRequestCardPresenter key={pullRequest.id} pullRequest={pullRequest} scaleFactor={props.scaleFactor}/>)}
    </Container>
