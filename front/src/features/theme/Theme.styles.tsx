import styled from "styled-components";

export const Theme__Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 25px;
    height: 25px;
    opacity: 1;
    /* transition: 0.2s ease-out; */
    box-sizing: border-box;
    &.active {
        /* border: 1px solid red; */
        /* transition: 0.2s ease-in; */
        opacity: 0;
    }
`;
export const Theme__Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;