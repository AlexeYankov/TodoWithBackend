import styled from "styled-components";

export const Todo__Input__Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const Todo__Input = styled.input`
    height: 2em;
    box-shadow: 0px 5px 10px 2px rgba(71, 80, 34, 0.2);
    border-radius: 4px;
    padding: 0px 15px;
    font-size: 1em;
    font-weight: 700;
    border: none;
    &:focus {
        outline: 3px solid rgba(54, 98, 152, 0.2);
    }
`;
