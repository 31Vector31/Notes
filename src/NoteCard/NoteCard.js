import styles from "./NoteCard.module.css";
import classNames from "classnames";

function NoteCard({note, onClick, isActive}) {
    const {text, lastEditDate} = note;

    return (
        <div className={classNames([styles.note, (isActive ? styles.active : null)])} onClick={onClick}>
            <div className={styles.header}>
                <span className={styles.title}>{text}</span>
                <span>{new Date(lastEditDate).toLocaleString()}</span>
            </div>
            <div>{text}</div>
        </div>
    );
}

export default NoteCard;