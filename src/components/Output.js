import React from 'react'

const Output = ({ outputDetails }) => {
        let statusId = outputDetails?.status?.id;
        const getOutput = () => {
                
                if (statusId === 6) {
                        // compilation error
                        return (
                                <pre style={{height:"100%", maxHeight:"100%" , width:"100%", overflow:"scroll", color: "red"}}>
                                        {atob(outputDetails?.compile_output)}
                                </pre>
                        );
                } else if (statusId === 3) {
                        return (
                                <pre  style={{height:"100%", maxHeight:"100%" , width:"100%", overflow:"scroll"}}>
                                        {atob(outputDetails.stdout) !== null
                                                ? `${atob(outputDetails.stdout)}`
                                                : null}
                                </pre>
                        );
                } else if (statusId === 5) {
                        return (
                                <pre style={{height:"100%", maxHeight:"100%" , width:"100%", overflow:"scroll", color: "red" }}>
                                        {`Time Limit Exceeded`}
                                </pre>
                        );
                } else {
                        return (
                                <pre style={{height:"100%", maxHeight:"100%" , width:"100%", overflow:"scroll", color: "red"}}>
                                        {atob(outputDetails?.stderr)}
                                </pre>
                        );
                }
        };
        return (
                <>
                        <pre style={{ fontSize: "large", overflow: "hidden", maxHeight: "390px",height:"100%" }} className='card-text'>
                                {outputDetails ? <>{getOutput()}</> : null}
                        </pre>
                </>
        );

}

export default Output
