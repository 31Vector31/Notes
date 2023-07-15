import React, {useCallback, useState} from 'react';
import {Col, Row} from 'antd';
import ListNotes from "../ListNotes/ListNotes";

const defaultNote = {title: "New note", lastEditDate: null, text: "", id: null};

function App() {
    const [notes, setNotes] = useState([]);

    const addNewNote = useCallback(() => {
        const currentDate = new Date().getTime();
        const newNote = {...defaultNote, id: currentDate, lastEditDate: currentDate};
        setNotes([newNote, ...notes]);
    }, [notes]);

    return (
        <div>
            <Row>
                <Col xs={24} sm={6}>
                    <ListNotes notes={notes} addNewNote={addNewNote}/>
                </Col>
                <Col xs={24} sm={18}></Col>
            </Row>
        </div>
    );
}

export default App;