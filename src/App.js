import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import TaskTracker from './pages/TaskTracker'
import Forms from './pages/Forms'
import Error404 from './pages/Error404'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/TaskTracker/*' index element={<TaskTracker />} />
        <Route path='/Forms' element='Forms' />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </Router>
  );

}

export default App;
