import React, {useEffect, useState} from "react";
import {ReactComponent as Moon} from "./../../asserts/theme/moon-solid.svg";
import {ReactComponent as Sun} from "./../../asserts/theme/sun-regular.svg";
import {Theme__Container, Theme__Wrapper} from "./Theme.styles";

export default function Theme() {
    const [state, setTheme] = useState(1);

    useEffect(() => {
        document.documentElement.dataset.theme = state + "";
    }, [state]);

    const changeTheme = () => {
        state === 1 ? setTheme(2) : setTheme(1);
    };
    return (
        <Theme__Container onClick={changeTheme}>
            <Theme__Wrapper className={state === 1 ? "" : "active"}>
                <Sun fill="black" />
            </Theme__Wrapper>

            <Theme__Wrapper className={state === 2 ? "" : "active"}>
                <Moon fill="white" />
            </Theme__Wrapper>
        </Theme__Container>
    );
}
