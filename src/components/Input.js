import React, { useState } from 'react'
import Output from './Output'
import BeatLoader from "react-spinners/BeatLoader";
import { render } from 'react-dom';
const Input = ({ customInput, setCustomInput, outputDetails, loading,handleEditorChange }) => {
        // function downloadFile(filename, content) {
        //         // It works on all HTML5 Ready browsers as it uses the download attribute of the <a> element:
        //         const element = document.createElement('a');

        //         //A blob is a data type that can store binary data
        //         // "type" is a MIME type
        //         // It can have a different value, based on a file you want to save
        //         const blob = new Blob([content], { type: 'plain/text' });

        //         //createObjectURL() static method creates a DOMString containing a URL representing the object given in the parameter.
        //         const fileUrl = URL.createObjectURL(blob);

        //         //setAttribute() Sets the value of an attribute on the specified element.
        //         element.setAttribute('href', fileUrl); //file location
        //         element.setAttribute('download', filename); // file name
        //         element.style.display = 'none';

        //         //use appendChild() method to move an element from one element to another
        //         document.body.appendChild(element);
        //         element.click();

        //         //The removeChild() method of the Node interface removes a child node from the DOM and returns the removed node
        //         document.body.removeChild(element);
        // };
        // const dfile = () => {
        //         // document.getElementById('download').addEventListener('click', e => {
        //         console.log("itna ho raha hai")
        //         //The value of the file name input box
        //         // const filename = document.getElementById('filename').value;

        //         //The value of what has been input in the textarea
        //         // const content = document.getElementById('text').value;

        //         // The && (logical AND) operator indicates whether both operands are true. If both operands have nonzero values, the result has the value 1 . Otherwise, the result has the value 0 .
        //         var filename = "hi.cpp"
        //         if (filename && code) {
        //                 downloadFile(filename, code);
        //         }
        //         // });
        // };
        const handleinputfilechange = e => {
                const file = e.target.files[0]
                const reader = new FileReader();
                reader.readAsText(file);
                reader.onload = () => {
                        setCustomInput(reader.result);
                        console.log(reader.result);
                }
        }
        const handlecodefilechange = e => {
                const file = e.target.files[0]
                const reader = new FileReader();
                reader.readAsText(file);
                reader.onload = () => {
                        handleEditorChange(reader.result);
                        console.log(reader.result);
                }
        }
        
        return (
                <div>
                        {/* <div className="output rounded m-3" style={{ height: "30%", border: "2px solid black", overflow: "auto" }}>
                                {(outputDetails) ? atob(outputDetails.stdout) : "compilation error"}
                        </div>
                        <div className="floating-form m-3">
                                <textarea
                                        value={customInput}
                                        onChange={(e) => setCustomInput(e.target.value)}
                                        placeholder={`Custom input`}
                                        className="form-control disabled" style={{ border: "2px solid black" }} id="txtArea"
                                >
                                {(outputDetails) ? atob(outputDetails.stdout) : ""}
                                </textarea>
                                <label htmlFor="floatingTextarea">Custum Input</label>
                        </div> */}
                        {/* <Output outputDetails={outputDetails} loading={loading} ></Output> */}
                        {/* <pre className="card m-3 " style={{padding:"3px", width:"100%", maxHeight: "40%", height: "40%", border: "2px solid black", overflowX:"scroll", overflowY: "scroll" }}>
                                        <h5 className=" m-3 card-title">Output</h5> */}
                                {/* <div className="card-body" style={{ overflowX: "auto", overflowY: "auto" }}>
                                        <Output outputDetails={outputDetails}></Output>
                                </div> */}
                                
                                {/* <div className='mx-3 '> */}
                                {/* {atob(outputDetails.stdout) !== null
                                                ? `${atob(outputDetails.stdout)}`
                                        : ""} */}
                                        {/* <BeatLoader loading={loading} speedMultiplier={0.5}></BeatLoader>      
                                        <Output outputDetails={outputDetails}></Output>
                                </div> */}
                                {/* <label className='m-3' style={{fontSize:".5 rem"}} htmlFor="floatingTextarea">Custum Input</label> */}
                        {/* </pre> */}
                        <div className="card m-3 w-100" style={{ padding:"3%",overflow:"hidden" , height: "45%", border: "2px solid black"}}>
                                <h5 className='m-3'>Output</h5>
                                {/* <div className='  mx-3 ' style={{ overflow: "auto" }}> */}
                                        <BeatLoader loading={loading} speedMultiplier={0.5}></BeatLoader>
                                        <Output outputDetails={outputDetails}></Output>
                                {/* </div> */}
                        </div>

                        {/* <div className='m-3 mb-3' style={{ background: "white" }}>
                                <input id="uploadfilebtn" type="file" onChange={handlefilechange}>
                                        input file
                                </input>
                                <i color='red' className="bi bi-file-earmark-arrow-up"></i>
                        </div> */}
                        <div class="input-group m-3 mb-3">
                                <label class="input-group-text" htmlFor="inputGroupFile01">Upload Code file</label>
                                <input id="uploadfilebtn" placeholder='inputfile' onChange={handlecodefilechange} type="file" class="form-control"></input>
                        </div>
                        <div className="form-floating m-3 " style={{width:"100%",}} >
                                <textarea

                                        value={customInput}
                                        onChange={(e) => setCustomInput(e.target.value)}
                                        placeholder={`Custom input`}
                                        className="form-control h-200" style={{ height: "200px", border: "2px solid black" }} id="txtArea"
                                ></textarea>
                                <label htmlFor="floatingTextarea">Custum Input</label>
                        </div>
                        <div class="input-group m-3 mb-3">
                                <label class="input-group-text" htmlFor="inputGroupFile01">Upload Input file</label>
                                <input accept=".txt" id="uploadfilebtn" placeholder='inputfile' onChange={handleinputfilechange} type="file" class="form-control"></input>
                        </div>
                </div>
        )
}

export default Input
