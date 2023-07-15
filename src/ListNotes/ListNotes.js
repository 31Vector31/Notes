import NoteCard from "../NoteCard/NoteCard";
import {Button} from 'antd';
import styles from "./ListNotes.module.css";

function ListNotes({notes, addNewNote}) {
    return (
        <div className={styles.listNotes}>
            <div className={styles.header}><Button onClick={addNewNote}>New note</Button></div>
            {notes.map((note) => {
                const {id} = note;
                return (<NoteCard note={note} key={id}/>);
            })}
        </div>
    );
}

export default ListNotes;