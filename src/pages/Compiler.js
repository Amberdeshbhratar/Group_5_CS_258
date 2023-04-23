import EditorWindow from "../components/EditorWindow";
import React, { useState,useEffect } from "react";
import Input from "../components/Input";
import axios from "axios";
import toast from 'react-hot-toast';
import { languages } from "../components/Languages";
function Compiler() {
  const [code, setCode] = useState(
`#include <iostream>
using namespace std;    
    
int main() {
    // your code goes here
    cout<<"hi";
    return 0;
}
`
  );
  const [language, setLanguage] = useState(languages[0]);
  const [customInput, setCustomInput] = useState("");
  const [outputDetails, setOutputDetails] = useState(null);
  const handleCompile = () => {
    setOutputDetails(null);
    setloading(true);
    const formData = {
      language_id: language.id,
      // encode source code in base64
      source_code: btoa(code),
      stdin: btoa(customInput),
    };
    const options = {
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}`,
      params: { base64_encoded: 'true', fields: '*' },
      headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
        'X-RapidAPI-Host': `${process.env.REACT_APP_API_HOST}`
      },
      data: formData,
    };
    axios
      .request(options)
      .then(function (response) {
        console.log("res.data", response.data);
        const token = response.data.token;
        checkStatus(token);
      })
      .catch((err) => {
        toast.error("Failed to compile")
        setloading(false);
        console.log(err.message)
        // console.log("yaha pe error dega");
        
      });
  };
  const checkStatus = async (token) => {
    const options = {
      method: "GET",
      url: `${process.env.REACT_APP_API_URL + "/" + token}`,
      params: { base64_encoded: 'true', fields: '*' },
      headers: {
        'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
        'X-RapidAPI-Host': `${process.env.REACT_APP_API_HOST}`
      },
    };
    setloading(false);
    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id;

      if (statusId === 1 || statusId === 2) {
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
        return;
      } else {
        setOutputDetails(response.data);
        if(statusId === 3){
          toast.success("Compiled successfully")
        }
        if(statusId === 6){
          toast.error("compilation error")
        }
        if(statusId === 5){
          toast.error("Time Limit Exceeded")
        }
        console.log("response.data", response.data);
        return;
      }
    } catch (err) {
      toast.error("Failed to compile")
      console.log("err", err);
    }
  };
  const onChange = (action, data) => {
    switch (action) {
      case "code": {
        setCode(data);
        break;
      }
      case "lang": {
        setCode(data);
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };
  const [value, setValue] = useState(code || "");
  const [loading, setloading] = useState(false);
  const handleEditorChange = (value) => {
    setValue(value);
    onChange("code", value);
    console.log(value);
  };


  
  function downloadFile(filename, content) {
    const element = document.createElement('a');
    const blob = new Blob([content], { type: 'plain/text' });
    const fileUrl = URL.createObjectURL(blob);

    element.setAttribute('href', fileUrl); 
    element.setAttribute('download', filename); 
    element.style.display = 'none';

    document.body.appendChild(element);
    element.click();

    document.body.removeChild(element);
  };
  const dfile = () => {
    console.log("itna ho raha hai")
    var filename = document.getElementById("File_Name").value + language.extension;
    document.getElementById("File_Name").value = null;
    if (filename && code) {
      downloadFile(filename, code);
    }
  };
  // let upload  = document.getElementById("uploadfilebtn")
  // upload.addEventListener('change',() => {
    // let fr = new FileReader();
    // console.log(upload);
    // fr.readAsText(upload.files[0]);
    // fr.onload = function(){
      // setCustomInput(fr.result);
      // console.log(fr.result);
    // }
  // })


  return (
    <div className="wrapper" style={{ minheight: "max-content", height: "100vh", display: "grid", gridTemplateColumns: "70% 25%", padding: "5px" }}>
      <div className="btn-group" style={{ gridColumnStart: "1", gridColumnEnd: "3", height: "40px", margin: "auto" }} role="group" aria-label="Basic mixed styles example">
        <button className="btn btn-success" onClick={handleCompile}>Run code &nbsp; <i className="bi bi-play-fill"></i></button>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Please enter your file name</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">Enter your file name</label>
                    <input type="text" id="File_Name" className="form-control" placeholder="Filename"></input>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={dfile}>Start Downloading</button>
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" >Download &nbsp; <i className="bi bi-file-earmark-arrow-down-fill"></i></button>
        
        <div className="btn-group" role="group">
          <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            {language.name}
          </button>
          <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
            {languages.map((lang) => {
              return (
                <li id={lang.id} ><button onClick={() => {
                  setLanguage(lang)
                  if (lang.defaultcode != null) {
                    handleEditorChange(lang.defaultcode)
                  }
                  else {
                    handleEditorChange("")
                  }
                }} className="dropdown-item">{lang.name}</button></li>
              );
            })}
          </ul>
          
        </div>
        {/* themes */}
        
        {/* <button className="btn btn-success"  >
          <input id="uploadfilebtn" name="file" type="file" >
          </input>
          <i className="bi bi-file-earmark-arrow-up"></i>
        </button> */}
      </div>
      <div className="editor-container" style={{ width: "100%" }}>
        <div className="editor m-3" style={{ height: 'calc(100%-40px)', border: '2px solid black', innerWidth: '100%' }}>
          <EditorWindow language={language} id="window" code={code} onChange={onChange} value={value} setValue={setValue} handleEditorChange={handleEditorChange} />
        </div>
      </div>
      <Input
        handleEditorChange={handleEditorChange}
        customInput={customInput}
        setCustomInput={setCustomInput}
        outputDetails={outputDetails}
        loading={loading}
      />
    </div>
  );
}
export default Compiler;