import './video.css';


import medium from '../../../../assets/image/212453_medium.mp4';
import ReactPlayer from 'react-player'

const Video = () => {
  return (
   <div className="boxxs border-y-4 border-indigo-500 ml-10 rounded-md">
     {/* <video className="boxxs banner-video video" autoPlay loop muted>
      <source className='' src={medium} />
    </video> */}
    <ReactPlayer controls={true}   url={medium}/>
    <h1 className='uppercase text-center font-semibold text-base text-cyan-500'>My work is fully responsive  including desktops and real devices</h1>
   </div>
  );
};

export default Video;