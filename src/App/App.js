import React, {useCallback, useMemo, useState} from 'react';
import {Col, Row} from 'antd';
import ListNotes from "../ListNotes/ListNotes";
import Workspace from "../Workspace/Workspace";

const defaultNote = {text: "New note", lastEditDate: null, id: null};

function App() {
    const [notes, setNotes] = useState([]);
    const [idSelectedNote, setIdSelectedNote] = useState(null);

    const addNewNote = useCallback(() => {
        const currentDate = new Date().getTime();
        const newNote = {...defaultNote, id: currentDate, lastEditDate: currentDate};
        setIdSelectedNote(currentDate);
        setNotes([newNote, ...notes]);
    }, [notes]);

    const editNote = useCallback((note) => {
        const {id} = note;
        const newNotes = notes.map(el => {
            if (el.id === id) {
                return note;
            }
            return el;
        });
        setNotes(newNotes);
    }, [notes]);

    const selectedNote = useMemo(() => notes.find(note => note.id === idSelectedNote), [notes, idSelectedNote]);

    return (
        <div>
            <Row>
                <Col xs={24} sm={6}>
                    <ListNotes notes={notes} addNewNote={addNewNote} setIdSelectedNote={setIdSelectedNote}
                               idSelectedNote={idSelectedNote}/>
                </Col>
                <Col xs={24} sm={18}>
                    {selectedNote && <Workspace selectedNote={selectedNote} editNote={editNote}/>}
                </Col>
            </Row>
        </div>
    );
}

export default App;