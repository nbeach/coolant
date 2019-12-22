import React from "react"
import styled from "styled-components"
import {PullRequest} from "../../model"
import {PullRequestCardPresenter} from "./PullRequestCardPresenter"
import {ConnectedDataProp} from "../Connector"
import {Style} from "../../util/Style"

export interface PullRequestCardPresenterProps {
    readonly fontSize?: string
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
`

const VariableSizeText = styled.span<{readonly fontSize: string }>`
    font-size: ${({fontSize}) => fontSize};
`

export const PullRequestListPresenter = (props: ConnectedDataProp<readonly PullRequest[]> & PullRequestCardPresenterProps) =>
   <Container>
       { props.data.length === 0 ? <VariableSizeText fontSize={props.fontSize ?? Style.size.defaultFontSize}>No Open Pull Requests</VariableSizeText> :
           props.data.map(pullRequest => <PullRequestCardPresenter key={pullRequest.id} pullRequest={pullRequest} fontSize={props.fontSize}/>)}
    </Container>
