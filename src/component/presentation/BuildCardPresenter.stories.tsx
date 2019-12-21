import React from "react"
import {storiesOf} from "@storybook/react"
import {Build, BuildStatus} from "../../model"
import {BuildCardPresenter} from "./BuildCardPresenter"

const passingState: Build = {
    id: "1",
    number: "",
    name: "Example Project",
    status: BuildStatus.Passed,
}

const runningState: Build = {
    ...passingState,
    status: BuildStatus.Running,
}

const failingState: Build = {
    ...passingState,
    status: BuildStatus.Failed,
}

storiesOf("BuildCardPresenter", module)
    .add("passing build", () => <BuildCardPresenter scaleFactor={1} {...passingState}/>)
    .add("failing build", () => <BuildCardPresenter scaleFactor={1} {...failingState}/>)
    .add("running build", () => <BuildCardPresenter scaleFactor={1} {...runningState}/>)
