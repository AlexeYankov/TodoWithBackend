import React from "react";
import styled from "styled-components";
import {Div__Container} from "../../AppStyles";

type AddTodoType = {
    name?: string;
    icon?: React.ReactNode;
    onClick?: () => void;
    onClickWithData?: (value: string) => void;
    tooltip?: string;
    disabled?: boolean;
};

const Todo__Button = styled.button<{$dark?: boolean}>`
    background: ${(props) => (props.$dark ? "#BF4F74" : "white")};
    font-size: 1em;
    margin-left: 1em;
    padding: 0em 1em;
    border-radius: 3px;
    border: 1px solid black;
    font-weight: 600;
    &:hover {
        transition: 0.2s;
        background: #3bc0aa;
    }
`;
const Todo__Icon = styled(Div__Container)<{$dark?: boolean}>`
    position: relative;
    background: ${(props) => (props.$dark ? "#BF4F74" : "white")};
    min-width: 20px;
    min-height: 20px;
    margin-left: 1em;
    padding: 0.2em;
    border-radius: 3px;
    border: 1px solid black;
    &:hover {
        transition: 0.2s;
        background: #3bc0aa;
    }
    /* &:hover span {
        visibility: visible;
        opacity: 1;
        transition: 0.2s;
    }
    & span {
        visibility: hidden;
        opacity: 0;
        position: absolute; 
        top: -85%;
        left: 15px;
        text-align: center; 
        padding: 5px; 
        height: auto; 
        background: #e8eb0e;
        color: #000000;
        font-size: 0.6em;
        width: 50px;
    } */
`;
const Todo__Icon__disabled = styled(Div__Container)<{$dark?: boolean}>`
    position: relative;
    background: ${(props) => (props.$dark ? "#BF4F74" : "white")};
    min-width: 20px;
    min-height: 20px;
    margin-left: 1em;
    padding: 0.2em;
    border-radius: 3px;
    border: 1px solid black;
    &:hover {
        transition: 0.2s;
        background: #3bc0aa;
    }
`;

export default function Button({name, onClick, icon, tooltip, disabled}: AddTodoType) {
    const regularIcon = <Todo__Icon onClick={onClick}>{icon}</Todo__Icon>;
    const disabledIcon = <Todo__Icon__disabled onClick={onClick}>{icon}</Todo__Icon__disabled>;
    const todoIcon = disabled ? regularIcon : disabledIcon;
    return name ? (
        <>
            <Todo__Button $dark={false} onClick={onClick} disabled={disabled}>
                {name}
            </Todo__Button>
        </>
    ) : (
        <>{todoIcon}</>
    );
}
