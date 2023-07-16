import styles from "./NoteCard.module.css";
import classNames from "classnames";
import React from "react";

const maxTextLength = 10;

function NoteCard({note, onClick, isActive}) {
    const {text, lastEditDate} = note;

    const validText = text.length <= maxTextLength ? text : text.slice(0, maxTextLength) + "...";

    return (
        <div className={classNames([styles.note, (isActive ? styles.active : null)])} onClick={onClick}>
            <span>{validText}</span>
            <span>{new Date(lastEditDate).toLocaleString()}</span>
        </div>
    );
}

export default NoteCard;