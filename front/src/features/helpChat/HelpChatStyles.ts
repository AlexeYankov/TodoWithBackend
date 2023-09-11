import styled, {keyframes} from "styled-components";
import { Div__Container } from "../../AppStyles";

const scaleBottom = keyframes`
    from {
      transform: scale(0.5);
      transform-origin: 100% 100%;
    }
    to {
      transform: scale(1);
      transform-origin: 100% 100%;
    }
  `;

export const Modal__Help = styled.div`
    position: absolute;
    top: 70%;
    left: 80%;
    width: 300px;
    height: 200px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    /* border: 1px solid blue; */
    /* background-color: #fff; */
    color: var(--color);
    border-radius: var(--border-radius);
    & textarea {
        resize: none;
    }
`;

export const Modal__Help__Opened = styled.div<{$modal: boolean}>`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    flex-wrap: wrap;
    width: ${(p) => (p.$modal ? "calc(100% - 30px)" : "")};
    border-radius: var(--border-radius);
    animation: ${scaleBottom} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    box-shadow: 0px 15px 10px 2px rgba(34, 60, 80, 0.2);
    background: #3bc0aa;
`;
export const Modal__Help__Closed = styled.div<{$modal: boolean}>`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    flex-wrap: wrap;
    width: ${(p) => (p.$modal ? "calc(60% - 30px)" : "")};
    border-radius: var(--border-radius);
    box-shadow: 0px 15px 10px 2px rgba(34, 60, 80, 0.2);
    background: #3bc0aa;
`;

export const Modal__Help__Header = styled(Div__Container)`
    justify-content: space-between;
    width: 100%;
`;
export const Modal__Help__Input = styled(Div__Container)`
    display: flex;
    width: 100%;
    & textarea {
        width: 100%;
        border-radius: var(--border-radius);
        padding: 10px 10px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
            "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    }
`;
export const Modal__Help__Texting__Area = styled(Div__Container)`
    width: 100%;
    height: 160px;
    margin: 10px 0px;
    flex-wrap: wrap;
    border-radius: var(--border-radius);
    overflow: hidden;
    &:hover {
        overflow-y: scroll;
    }
    &::-webkit-scrollbar {
        width: 0px;
    }
`;
export const Modal__Help__Messages = styled(Div__Container)`
    width: 100%;
    flex-direction: column;
    border-radius: var(--border-radius);
`;
export const Chat__Support = styled(Modal__Help__Messages)`
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
`;
export const Modal__Help__Chat = styled(Div__Container)<{$user: boolean}>`
    z-index: 10;
    padding: 5px 10px;
    margin: 5px 0px;
    width: 90%;
    flex-direction: column;
    /* border: 1px solid red; */
    justify-content: ${(p) => (p.$user ? "flex-start" : "space-between")};
    align-items: ${(p) => (p.$user ? "flex-start" : "flex-end")};
    background-color: ${(p) => (p.$user ? "brown" : "#62a3c9")};
    border-radius: var(--border-radius);
`;