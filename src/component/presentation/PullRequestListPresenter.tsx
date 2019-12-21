import React from "react"
import styled from "styled-components"
import moment, {Moment} from "moment"
import {Style} from "../../util/Style"
import {PullRequest, PullRequestStatus} from "../../model/PullRequest"


interface PullRequestListPresenterStateProps {
    readonly pullRequests: ReadonlyArray<PullRequest>
}

const Container = styled.div`
    font-family: sans-serif;
    font-size: 1.15rem;
    width: 100%;
`

const Item = styled.div`
    display: flex;
    flex-direction: column;
`

const statusColorMap = {
    [PullRequestStatus.New]: Style.color.state.new,
    [PullRequestStatus.UnderReview]: Style.color.state.underReview,
    [PullRequestStatus.ReadyToMerge]: Style.color.state.readyToMerge,
}

const PullRequestCard = styled.div<{ readonly status: PullRequestStatus}>`
    background-color: ${({status}) => statusColorMap[status]};
    padding: 1.5rem;
    margin: 0.5rem;
    box-shadow: 0.10rem 0.10rem 0.30rem rgb(136, 136, 136);
    display: flex;
`

const NameField = styled.div`width: 25%;`
const TimeField = styled.div`width: 25%;`
const ApprovalsField = styled.div`width: 15%;`
const CommentersField = styled.div`width: 35%;`



export const PullRequestListPresenter = ({pullRequests}: PullRequestListPresenterStateProps) =>
   <Container>
       { pullRequests.length === 0 ? <strong>No Open Pull Requests</strong> :  <Item>
           <h4>{pullRequests.length} Open Pull Requests</h4>

           {pullRequests.map(pullRequest => <PullRequestLine pullRequest={pullRequest}/>)}
       </Item>}
    </Container>

const PullRequestLine = ({pullRequest}: { readonly pullRequest: PullRequest}) => <PullRequestCard status={pullRequest.status}>
    <NameField><strong>{pullRequest.name}</strong></NameField>&nbsp;
    <TimeField>Submitted <strong>{timeElapsed(pullRequest.timeOpened)}</strong> ago</TimeField>&nbsp;
    <ApprovalsField><strong>{pullRequest.approvals}</strong> approvals</ApprovalsField>&nbsp;
    <CommentersField>Open comments by <strong>{pullRequest.commenters.join(", ")}</strong></CommentersField>
</PullRequestCard>


export const timeElapsed = (startTime: string): string => {
    const timeDifference = moment().diff(moment(startTime))
    const elapsedMinutes =  moment.duration(timeDifference).asMinutes()

    const days = Math.floor(elapsedMinutes / (60 * 24))
    const daysRemainder = elapsedMinutes % (60 * 24)
    const hours = Math.floor(daysRemainder / 60)
    const hoursRemainder = daysRemainder % 60
    const minutes = Math.floor(hoursRemainder)

    const formattedDays = days > 0 ? `${days}d ` : ""
    const formattedHours = hours > 0 ? `${hours}h ` : ""
    const formattedMinutes = minutes > 0 ? `${minutes}m` : ""

    return formattedDays + formattedHours + formattedMinutes
}

