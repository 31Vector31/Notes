import styles from "./NoteCard.module.css";

function NoteCard({note}) {
    const {title, lastEditDate, text} = note;

    return (
        <div className={styles.note}>
            <div className={styles.header}>
                <span className={styles.title}>{title}</span>
                <span>{new Date(lastEditDate).toLocaleString()}</span>
            </div>
            <div>{text}</div>
        </div>
    );
}

export default NoteCard;