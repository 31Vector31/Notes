import React, {useState} from 'react';
import {Col, Row} from 'antd';
import ListNotes from "../ListNotes/ListNotes";

function App() {
    const [notes, setNotes] = useState([{
        title: "title", lastEditDate: "12.12.12", text: "text"
    },
        {
            title: "title2", lastEditDate: "12.12.12", text: "text2"
        }]);

    return (
        <div>
            <Row>
                <Col xs={24} sm={6}>
                    <ListNotes notes={notes}/>
                </Col>
                <Col xs={24} sm={18}></Col>
            </Row>
        </div>
    );
}

export default App;