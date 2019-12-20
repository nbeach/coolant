import React from "react"
import styled from "styled-components"
import {Build, BuildCardPresenter} from "./BuildCardPresenter"

interface BuildListStateProps {
    readonly data: ReadonlyArray<Build>
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`

export const BuildListPresenter = ({data}: BuildListStateProps) => <Container>
    {data.map(build => <BuildCardPresenter key={build.id} scaleFactor={data.length} {...build}/>)}
</Container>


