import React from "react"
import styled from "styled-components"
import {FaCheck, FaClock, FaExclamation} from "react-icons/fa"
import {Style} from "../../util/Style"
import {Build, BuildStatus} from "../../model"
import {Card} from "./generic/Card"

const statusColorMap = {
    [BuildStatus.Passed]: Style.color.state.success,
    [BuildStatus.Running]: Style.color.state.inProgress,
    [BuildStatus.Failed]: Style.color.state.failed,
}

const statusGlpyhMap = {
    [BuildStatus.Passed]: <FaCheck/>,
    [BuildStatus.Running]: <FaClock/>,
    [BuildStatus.Failed]: <FaExclamation/>,
}

const Name = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const BuildCardPresenter = ({ name, status, fontSize }: Build & { readonly fontSize?: string }) =>
    <Card color={statusColorMap[status]} fontSize={fontSize}>
       <Name>{name}</Name> {statusGlpyhMap[status]}
    </Card>
