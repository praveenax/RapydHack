import React, { useEffect, useState, useRef } from 'react';
import './style.css';
import ProgressBar from './progress';
import { BsPlay, BsPause } from 'react-icons/bs'

const Dashboard = () => {

    const vidRef = useRef(null);
    const [playState, setPlayState] = useState('pause')
    const [elapsedTime, setElapsedTime] = useState(0)
    const [lastPlay, setLastPlay] = useState(0)

    

    const playVideo = () => {
        console.log(vidRef.current.currentTime)
        setLastPlay(vidRef.current.currentTime)
        vidRef.current.play();
        setPlayState('playing')
    }
    const pauseVideo = () => {
        console.log(vidRef.current.currentTime )
        vidRef.current.pause();
        setPlayState('pause')
        setElapsedTime(elapsedTime+ vidRef.current.currentTime - lastPlay)
    }

    const roundToTwo =(num)=> {    
        return +(Math.round(num + "e+2")  + "e-2");
    }

    const jumpVideo = (val) => {
      
        if(vidRef.current){
       

            setElapsedTime(elapsedTime+ vidRef.current.currentTime - lastPlay)

            vidRef.current.currentTime = val
            setLastPlay(val)
            vidRef.current.pause();
            vidRef.current.play();
            setPlayState('playing')
            console.log(vidRef.current.currentTime)

        }
        

    }


    return <main className="dashboard-section">

        <div style={{ width: '50%',display: 'block', position: 'relative' }}>
            <video id="videoPlayer" ref={vidRef} 
            style={{ width: '100%', top: '0px', bottom: "0px", left: "0px", right: "0px" }}  >
                <source src="http://localhost:3000/video" type="video/mp4" />
            </video>

            <div style={{ position: 'absolute', width: '100%', top: '0px', bottom: "0px", left: "0px", right: "0px", background: 'transparent' }}>
                {
                    playState === 'pause' && (
                        <BsPlay onClick={() => playVideo()} color="#fff" size={40} style={{ position: 'absolute', bottom: '20px', right: '20px' }} />

                    )
                }
                {
                    playState === 'playing' && (
                        <BsPause onClick={() => pauseVideo()} color="#fff" size={40} style={{ position: 'absolute', bottom: '20px', right: '20px' }} />

                    )
                }

                <div onClick={()=>jumpVideo(0)} style={{ position: 'absolute', top: '15px', height: '5px', left: "2%", width: '30%', background: 'grey' }}>

                    <ProgressBar />
                    {
                        (vidRef && vidRef.current && vidRef.current.currentTime) && (
                            <span style={{ color: '#fff' }}>{vidRef.current.currentTime}</span>
                        )
                    }
                </div>
                <div onClick={()=>jumpVideo(100)} style={{ position: 'absolute', top: '15px', height: '5px', left: "34%", width: '30%', background: 'grey' }}>
                    <ProgressBar  />
                    {
                          <span style={{ color: '#fff' }}>{elapsedTime}</span>
                        
                    }
                </div>
                <div onClick={()=>jumpVideo(200)} style={{ position: 'absolute', top: '15px', height: '5px', left: "66%", width: '30%', background: 'grey' }}>
                    <ProgressBar />
                </div>
            </div>
        </div>

        Total Cost:
        {roundToTwo(elapsedTime * 0.003) } $


    </main>;
}

export default Dashboard;