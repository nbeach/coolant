import React from "react"
import {PullRequest} from "../../model"
import {PullRequestCardPresenter} from "./PullRequestCardPresenter"
import {ConnectedDataProp} from "../Connector"
import {Style} from "../../util/Style"
import {styled} from "../styled"

export interface PullRequestCardPresenterProps {
    readonly scaleFactor?: number
}

const Container = styled("div", () => ({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    textAlign: "center",
}))

const VariableSizeText = styled<{readonly scaleFactor: number }>("span", (config) => ({
    fontSize: `${config.scaleFactor * Style.size.baseFontSize}rem`,
}))

export const PullRequestListPresenter = (props: ConnectedDataProp<readonly PullRequest[]> & PullRequestCardPresenterProps) =>
   <Container>
       { props.data.length === 0 ? <VariableSizeText scaleFactor={props.scaleFactor ?? 1}>No Open Pull Requests</VariableSizeText> :
           props.data.map(pullRequest => <PullRequestCardPresenter key={pullRequest.id} pullRequest={pullRequest} scaleFactor={props.scaleFactor}/>)}
    </Container>
