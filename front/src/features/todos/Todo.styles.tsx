import {Div__Container} from "../../AppStyles";
import styled from "styled-components";

export const Button__Container = styled(Div__Container)<{$width?: string}>`
    width: ${(props) => (props.$width ? props.$width : "")};
    min-height: 50px;
`;
export const Todo__Container = styled(Div__Container)<{$width?: string}>`
    width: ${(props) => (props.$width ? props.$width : "")};
    padding: 1em 2em;
`;
export const Todo__Label = styled(Div__Container)<{$width?: string}>`
    width: ${(props) => (props.$width ? props.$width : "")};
    padding: 0.5em;
    background-color: #fff;
    color: black;
    border-radius: var(--border-radius);
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;
export const Todo__Container__Wrapper = styled(Div__Container)<{$width?: string}>`
    width: ${(props) => (props.$width ? props.$width : "")};
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    padding: 1em;
    flex-wrap: wrap;
    border-radius: var(--border-radius);
    background-color: #3184a2;
`;

export const Task__Container = styled.div`
display: flex;
padding-top: 12px;
width: 80%;
flex-direction: column;
`

export const Task__Error__Wrapper = styled.div`
    position: absolute;
    padding: 5px;
`;
export const closeBtn = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="10px">
        <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
    </svg>
);
export const addBtn = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="10px" transform="rotate(45)" fill="#3884c3">
        <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
    </svg>
);

export const editBtn = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
    </svg>
);
