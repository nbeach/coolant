import moment, {Moment} from "moment"
import {PullRequest, PullRequestStatus} from "../../model"
import React from "react"
import {Style} from "../../util/Style"
import {Card} from "./generic/Card"

export const PullRequestCardPresenter = (props: { readonly pullRequest: PullRequest, readonly fontSize?: string}) =>
    <Card color={statusColorMap[props.pullRequest.status]} fontSize={props.fontSize}>
        <div>{props.pullRequest.name}</div>
        <div>
            {timeElapsed(props.pullRequest.timeOpened)}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            +{props.pullRequest.approvals}
        </div>
    </Card>

const statusColorMap = {
    [PullRequestStatus.New]: Style.color.state.failed,
    [PullRequestStatus.UnderReview]: Style.color.state.running,
    [PullRequestStatus.ReadyToMerge]: Style.color.state.passed,
}
const timeElapsed = (startTime: Moment): string => {
    const timeDifference = moment().diff(startTime)
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
