import Sidebar from "component/Sidebar"
import BottomBar from "component/BottomBar"
import Content from "component/Content"
import { BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <Router>

      <div className="wrapper">

        <Sidebar/>
        <Content/>

      </div>
      
      <BottomBar/>
    
    </Router>
  );
}

export default App;
