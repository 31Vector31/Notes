import NoteCard from "../NoteCard/NoteCard";
import {Button} from 'antd';
import styles from "./ListNotes.module.css";

function ListNotes({notes}) {
    return (
        <div>
            {notes.map((note, index) => (<NoteCard note={note} key={index}/>))}
        </div>
    );
}

export default ListNotes;