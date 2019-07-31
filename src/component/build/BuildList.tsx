import React from "react"
import styled from "styled-components"
import {BuildCard} from "./BuildCard"
import {Build} from "../../model/Build";

interface BuildListStateProps {
    readonly builds: ReadonlyArray<Build>
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`

export const BuildListPresenter = ({builds}: BuildListStateProps) => <Container>
    {builds.map(build => <BuildCard key={build.id} scaleFactor={builds.length} {...build}/>)}
</Container>


