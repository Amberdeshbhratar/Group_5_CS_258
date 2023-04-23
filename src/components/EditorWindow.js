import React from "react";
import Editor from "@monaco-editor/react";

const EditorWindow = ({ onChange, code,value,setValue,handleEditorChange,language}) => {
        return (
                <div>
                        <Editor
                                value={value}
                                theme={'vs-dark'}
                                height={'80vh'}
                                width={'100%'}
                                defaultValue={"//enter some thing"}
                                language={language.value}
                                onChange={handleEditorChange}
                        />
                </div>
        );
};
export default EditorWindow;