import React from "react"
import styled from "styled-components"
import {PullRequest} from "../../model/PullRequest"
import {IntervalUpdateConnect} from "../../connect/IntervalUpdateConnect";

interface PullRequestStateProps {
    readonly pullRequests: ReadonlyArray<PullRequest>
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`

export const PullRequestListPresenter = ({pullRequests}: PullRequestStateProps) => <Container>
    <h4>{pullRequests.length} Open Pull Requests</h4>
    {pullRequests.map(pullRequest => <PullRequestLine pullRequest={pullRequest}/>)}
</Container>

const PullRequestLine = ({pullRequest}: { readonly pullRequest: PullRequest}) => <div>
    <span>{pullRequest.name}</span>
    <span>{pullRequest.timeOpened}</span>
    <span>{pullRequest.approvals}</span>
    <span>{pullRequest.commenters}</span>
</div>

export const PullRequestList = IntervalUpdateConnect(PullRequestListPresenter)
