import React, {useCallback, useState} from 'react';
import styles from "./Workspace.module.css";
import {Button} from "antd";
import TextEditor from "../TextEditor/TextEditor";
import ReactMarkdown from 'react-markdown'

function Workspace({selectedNote, editNote}) {
    const {text} = selectedNote;
    const [isEditMode, setIsEditMode] = useState(false);

    const saveNote = useCallback((text) => {
        const currentDate = new Date().getTime();
        const newNote = {...selectedNote, lastEditDate: currentDate, text};
        editNote(newNote);
        setIsEditMode(false);
    }, [selectedNote]);

    return (
        <div className={styles.workspace}>
            {isEditMode ?
                <div>
                    <TextEditor text={text} saveNote={saveNote}/>
                </div> :
                <div>
                    <Button onClick={() => setIsEditMode(true)} type="primary">Edit</Button>
                    <ReactMarkdown>{text}</ReactMarkdown>
                </div>}
        </div>
    );
}

export default Workspace;