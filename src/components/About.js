import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa'

const About = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',  
    justifyContent: 'center', 
    height: 'auto', 
  };

  const goBackLinkStyle = {
    position: 'absolute',  
    top: '10px',  
    left: '10px',  
  };

  return (
    <div style={containerStyle}>
      <h4>LOL you just got rickrolled</h4>
      <div className="video-container">
        <video autoPlay controls>
          <source src="/rickroll.mp4" type="video/mp4" />
        </video>
      </div>
      <Link to='/TaskTracker' style={goBackLinkStyle}>
        <FaTimes />
      </Link>
    </div>
  );
}

export default About;
