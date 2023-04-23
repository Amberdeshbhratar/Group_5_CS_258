import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = ({username}) => {
    const navigate = useNavigate();
    const [roomId, setRoomId] = useState('');
    // const [username, setUsername] = useState('');
    const createNewRoom = (e) => {
        if(!username){
            toast.error("Please login before entering room")
            return;
        }
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id);
        toast.success('Created a new room');
    };

    const joinRoom = () => {
        if(!username){
            toast.error("Please login before entering room")
            return;
        }
        if (!roomId ) {
            toast.error('Please Enter your room id');
            return;
        }
        // Redirect
        navigate(`/editor/${roomId}`, {
            state: {
                username,
            },
        });
    };

    const handleInputEnter = (e) => {
        if (e.code === 'Enter') {
            joinRoom();
        }
    };
    return (
        <div className='homePageWrapper'>
            <div className="formWrapper">
                {/* <img
                    className="homePageLogo"
                    src="/code-sync.png"
                    alt="code-sync-logo"
                /> */}
                <h4 className="mainLabel">Paste invitation ROOM ID</h4>
                <div className="inputGroup">
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="ROOM ID"
                        onChange={(e) => setRoomId(e.target.value)}
                        value={roomId}
                        onKeyUp={handleInputEnter}
                    />
                    {/* <input
                        type="text"
                        className="inputBox"
                        placeholder="USERNAME"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        onKeyUp={handleInputEnter}
                    /> */}
                    <div style={{display:"flex"}}>
                        <button
                            //  classNanme="btn joinBtn" 
                            onClick={joinRoom}
                            style={{ width: "30%",backgroundColor:"rgb(0,225,0)" }}
                            className='btn'
                        >
                            Join
                        </button>
                        <button
                            className='btn btn-primary'
                            style={{ width: "30%",marginLeft:"20px"}}
                            // className="createNewBtn createInfo"
                            onClick={createNewRoom}>
                            {/* <a
                            onClick={createNewRoom}
                            href=""
                            className="createNewBtn"
                        > */}
                            new room
                            {/* </a> */}
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;
