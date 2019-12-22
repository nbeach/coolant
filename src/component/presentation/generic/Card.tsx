import React, {PropsWithChildren} from "react"
import styled from "styled-components"

const CardContainer = styled.div<{ readonly color: string, readonly fontSize: string}>`
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    align-items: center;

    padding: 1rem 3.5rem 1rem 3.5rem;
    margin: 0.25rem;

    background-color: ${({color}) => color};
    color: rgb(255,255,255);

    font-family: sans-serif;
    font-size: ${({fontSize}) => fontSize};
`

export const Card = (props: PropsWithChildren<{ readonly color: string, readonly fontSize?: string}>) =>
    <CardContainer color={props.color} fontSize={props.fontSize ?? "2rem"}>
        {props.children}
    </CardContainer>
