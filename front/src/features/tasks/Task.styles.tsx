import {Div__Container} from "../../AppStyles";
import styled from "styled-components";
import {Task__Error__Wrapper} from "../todos/Todo.styles";

export const Task__Label = styled(Div__Container)<{$isDone?: boolean}>`
    text-decoration: ${(props) => (props.$isDone ? "line-through" : "none")};
    flex-direction: column;
    padding: 0.5em;
    width: 70%;
`;

export const Task__Name__Wrapper = styled(Div__Container)<{$width?: string}>`
    width: ${(props) => (props.$width ? props.$width : "")};
    padding: 0.5em 0em;
    margin: 0.5em 0em;
    justify-content: flex-start;
`;

export const Task__Container = styled(Task__Name__Wrapper)<{$width?: string}>`
    width: ${(props) => (props.$width ? props.$width : "")};
    background-color: #fff;
    color: black;
    padding: 0.5em 0em;
    margin: 0.5em 0em;
    border-radius: var(--border-radius);
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

export const Task__Input__Wrapper = styled(Task__Name__Wrapper)<{$width?: string}>`
    justify-content: center;
    padding: 0.65em 0em;
`;
export const Task__Name__Error__Wrapper = styled(Task__Error__Wrapper)`
    position: absolute;
    margin-top: 60px;
    margin-left: -60px;
    color: red;
`;
