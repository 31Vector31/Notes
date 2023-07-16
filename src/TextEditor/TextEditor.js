import React, {useCallback, useState} from 'react';
import {SimpleMdeReact} from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {Button} from "antd";

function TextEditor({text, saveNote}) {
    const [value, setValue] = useState(text || "");

    const onChange = useCallback((value) => {
        setValue(value);
    }, []);

    const save = useCallback(() => {
        saveNote(value);
    }, [value]);

    return (
        <div>
            <SimpleMdeReact value={value} onChange={onChange}/>
            <Button onClick={save} type="primary">Save</Button>
        </div>
    );
}

export default TextEditor;