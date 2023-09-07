import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h4>LOL you just got rick rolled</h4>
        <div className="video-container">
          <video autoPlay controls>
            <source src="/rickroll.mp4" type="video/mp4" />
          </video>
        </div>
        <Link to='/'>Go back</Link>
    </div>
  )
}

export default About