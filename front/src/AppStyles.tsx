import styled from "styled-components";

export const App__Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    --color: #000000;
`;

export const Header__Container = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1em;
    background: #3884c3;
    box-shadow: 0px 15px 10px 2px rgba(34, 60, 80, 0.2);
`;
export const App__Wrapper = styled.div``;
export const Error__Wrapper = styled.div`
    position: absolute;
    padding: 10px;
    color: red;
`;
export const Input__Wrapper = styled.div`
    display: flex;
    padding: 2em;
`;
export const Todo__Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
`;
export const Div__Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
