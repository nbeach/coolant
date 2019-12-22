import React from "react"
import styled from "styled-components"
import {PullRequest} from "../../model"
import {PullRequestCardPresenter} from "./PullRequestCardPresenter"

interface PullRequestListPresenterStateProps {
    readonly data: ReadonlyArray<PullRequest>
}

const Container = styled.div`
    font-family: sans-serif;
    font-size: 1.15rem;
    width: 100%;
     display: flex;
    flex-direction: column;
`



export const PullRequestListPresenter = ({data}: PullRequestListPresenterStateProps) =>
   <Container>
       { data.length === 0 ? <strong>No Open Pull Requests</strong> :
           data.map(pullRequest => <PullRequestCardPresenter key={pullRequest.id} pullRequest={pullRequest} fontSize={undefined}/>)}
    </Container>
