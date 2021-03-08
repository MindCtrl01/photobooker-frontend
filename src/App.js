import Header from './layouts/header/header'
import Sidebar from './layouts/sidebar/sidebar'
import Body from './layouts/body/body'
import Footer from './layouts/footer/footer'
import { Fragment } from 'react'

function App() {
  return (
    <Fragment>
      <Header></Header>
      <Sidebar></Sidebar>
      <Body></Body>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
