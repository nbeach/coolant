import styled from "styled-components"
import {Style} from "../util/Style"

export const Radiator = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${Style.color.background};
    color: ${Style.color.font};
    font-family: sans-serif;
`

export const Muted = styled.span`
    color: ${Style.color.muted};
`
