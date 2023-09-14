import '../Forms.css';
import { Link } from 'react-router-dom';

function FormsLayout({ children }) {
  const goBackLinkStyle = {
        position: 'absolute',  
        top: '10px',  
        left: '10px',  
    };

  return (
    <div>
      <Link to='/' style={goBackLinkStyle}>
          Back to Home
        </Link>
      {children}
    </div>
  );
}

export default FormsLayout;
