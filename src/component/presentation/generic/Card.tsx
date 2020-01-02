import React, {PropsWithChildren} from "react"
import styled from "styled-components"
import {Style} from "../../../util/Style"

const CardContainer = styled.div<{ readonly color: string, readonly scaleFactor: number}>`
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    align-items: center;

    padding: 1rem 3.5rem 1rem 3.5rem;
    margin: 0.25rem;

    background-color: ${({color}) => color};
    font-size: ${({scaleFactor}) => scaleFactor * Style.size.baseFontSize}rem;
`

export const Card = (props: PropsWithChildren<{ readonly color: string, readonly scaleFactor?: number}>) =>
    <CardContainer color={props.color} scaleFactor={props.scaleFactor ?? 1}>
        {props.children}
    </CardContainer>
