import React from "react"
import {storiesOf} from "@storybook/react"
import {BuildListPresenter} from "./BuildListPresenter"
import {Build, BuildStatus} from "./BuildCardPresenter"

const builds: ReadonlyArray<Build> = [
    { id: "1", number: "", name: "Lorem ipsum",  status: BuildStatus.Passed },
    { id: "2", number: "", name: "Dolor sit amet", status: BuildStatus.Running },
    { id: "3", number: "", name: "Quis nostrud", status: BuildStatus.Failed },
    { id: "4", number: "", name: "Consectetur adipiscing", status: BuildStatus.Passed },
    { id: "5", number: "", name: "Duis aute irure", status: BuildStatus.Passed },
    { id: "6", number: "", name: "Non proident", status: BuildStatus.Running },
    { id: "7", number: "", name: "Excepteur sint", status: BuildStatus.Failed },
    { id: "8", number: "", name: "Officia deserunt", status: BuildStatus.Passed },
]

storiesOf("BuildListPresenter", module)
    .add("one build", () => <BuildListPresenter data={[builds[0]]}/>)
    .add("many builds", () => <BuildListPresenter data={builds}/>)
