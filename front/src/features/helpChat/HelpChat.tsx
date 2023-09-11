import React, {useEffect, useRef, useState} from "react";
import {
    Modal__Help,
    Modal__Help__Opened,
    Modal__Help__Closed,
    Modal__Help__Input,
    Modal__Help__Header,
    Modal__Help__Texting__Area,
    Modal__Help__Chat,
    Chat__Support,
} from "./HelpChatStyles";
import {SomeMessages} from "../../messageData";
import Button from "../common/Button";
import {closeBtn} from "../todos/Todo.styles";
import io from "socket.io-client";

type ModalHelpType = {
    modal: boolean;
    setModal: (value: boolean) => void;
};

const socket = io("http://localhost:3001");

export default function HelpChat({modal, setModal}: ModalHelpType) {
    const [messages, setMessages] = useState("");
    const [msg, setMsg] = useState<SomeMessages[]>([]);
    useEffect(() => {
        socket.on("init-messages-published", (msg) => {
            setMsg(msg);
        });
    }, []);

    let nodeMessages = useRef<HTMLInputElement | null>(null);

    const scrollToLastMessage = async () => {
        const lastChildElement = await nodeMessages.current?.lastElementChild;
        lastChildElement?.scrollIntoView({behavior: "smooth"});
    };
    const chatHandler = () => {
        setModal(!modal);
    };
    const sendMessage = () => {
        if (messages.trim()) {
            console.log("send");
            socket.emit("chat message", messages);
            setMessages("");
        }
        return;
    };

    const mappedJSX = (
        <Modal__Help__Texting__Area ref={nodeMessages}>
            {msg.map((el: SomeMessages) => {
                scrollToLastMessage().then(() => scrollToLastMessage());
                return el.manager ? (
                    <Modal__Help__Chat $user={true} key={new Date().getTime() + el.time}>
                        <Chat__Support>
                            <strong>{el.author}</strong>
                            <pre>{el.message}</pre>
                        </Chat__Support>
                        <pre>{el.time}</pre>
                    </Modal__Help__Chat>
                ) : (
                    <Modal__Help__Chat $user={false} key={new Date().getTime() + el.time}>
                        {el.message}
                        <pre>{el.time.slice(0, 5)}</pre>
                    </Modal__Help__Chat>
                );
            })}
        </Modal__Help__Texting__Area>
    );

    return (
        <Modal__Help>
            {modal ? (
                <Modal__Help__Opened $modal>
                    <Modal__Help__Header>
                        <strong>help</strong>
                        <Button icon={closeBtn} onClick={chatHandler} />
                    </Modal__Help__Header>
                    {mappedJSX}
                    <Modal__Help__Input>
                        <textarea
                            name=""
                            id=""
                            onChange={(value) => setMessages(value.currentTarget.value + "")}
                            value={messages}
                        />
                        <Button name="send" onClick={sendMessage} />
                    </Modal__Help__Input>
                </Modal__Help__Opened>
            ) : (
                <Modal__Help__Closed $modal onBlur={chatHandler} onClick={chatHandler}>
                    <strong>help</strong>
                    <Button icon={closeBtn} onClick={chatHandler} />
                </Modal__Help__Closed>
            )}
        </Modal__Help>
    );
}
