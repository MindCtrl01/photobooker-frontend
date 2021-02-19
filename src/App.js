import { BrowserRouter as Router } from 'react-router-dom'
import Header from './layouts/header/header'
import Sidebar from './layouts/sidebar/sidebar'
import Body from './layouts/body/body'
import Footer from './layouts/footer/footer'

function App() {
  return (
    <Router>
        <Header></Header>
        <Sidebar></Sidebar>
        <Body></Body>
        <Footer></Footer>
    </Router>
  );
}

export default App;
