import React, {useEffect,useState} from 'react';
import './style.css';
import ProgressBar from './progress';
import {BsPlay} from 'react-icons/bs'

const Dashboard = () => {

    // const [progress,setProgess] = useState(0)

    // useEffect(()=>{
    //     //timer => update the progressbar -> 1,2,3
    //     setInterval(()=>{
    //         let tmp = progress +1
    //         setProgess(tmp)
    //         console.log(progress)
    //     },1000)

    // },[])


    return <main className="dashboard-section">

    <div  style={{width: '50%',margin: 'auto',display: 'block',position:'relative'}}>
        <video id="videoPlayer" style={{width:'100%',top:'0px',bottom:"0px",left:"0px",right:"0px"}}  controls >
            <source src="http://localhost:3000/video" type="video/mp4" />
        </video>

        <div style={{position:'absolute',width:'100%',top:'0px',bottom:"0px",left:"0px",right:"0px",background:'transparent'}}>
            <BsPlay />
            <div style={{position:'absolute',top:'15px',height:'5px',left:"2%",width:'30%',background:'grey'}}>
                
                <ProgressBar />
                <span>Intro</span>
            </div>
            <div style={{position:'absolute',top:'15px',height:'5px',left:"34%",width:'30%',background:'grey'}}>
            <ProgressBar />
            </div>
            <div style={{position:'absolute',top:'15px',height:'5px',left:"66%",width:'30%',background:'grey'}}>
            <ProgressBar />
            </div>
        </div>
    </div>
    
   
    
    </main>;
}

export default Dashboard;