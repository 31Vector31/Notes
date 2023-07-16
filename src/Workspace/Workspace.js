import React, {useCallback, useState} from 'react';
import styles from "./Workspace.module.css";
import {Button, Modal} from "antd";
import TextEditor from "../TextEditor/TextEditor";
import ReactMarkdown from 'react-markdown'

function Workspace({selectedNote, editNote, deleteNote}) {
    const {text, id} = selectedNote;
    const [isEditMode, setIsEditMode] = useState(false);
    const [isModalConfirmOpen, setIsModalConfirmOpen] = useState(false);

    const saveNote = useCallback((text) => {
        const currentDate = new Date().getTime();
        const newNote = {...selectedNote, lastEditDate: currentDate, text};
        editNote(newNote);
        setIsEditMode(false);
    }, [selectedNote]);

    const enableEditMode = useCallback(() => {
        setIsEditMode(true);
    }, []);

    const openModalConfirm = useCallback(() => {
        setIsModalConfirmOpen(true);
    }, []);

    const closeModalConfirm = useCallback(() => {
        setIsModalConfirmOpen(false);
    }, []);

    const handleOkModalConfirm = useCallback(() => {
        closeModalConfirm();
        deleteNote(id);
    },[id]);

    return (
        <div className={styles.workspace}>
            {isEditMode ?
                <div>
                    <TextEditor text={text} saveNote={saveNote}/>
                </div> :
                <div>
                    <div className={styles.header}>
                        <Button onClick={enableEditMode} type="primary">Edit</Button>
                        <Button onClick={openModalConfirm} type="primary">Delete</Button>
                    </div>
                    <Modal title="Delete note?" open={isModalConfirmOpen} onOk={handleOkModalConfirm} onCancel={closeModalConfirm}/>
                    <ReactMarkdown>{text}</ReactMarkdown>
                </div>}
        </div>
    );
}

export default Workspace;