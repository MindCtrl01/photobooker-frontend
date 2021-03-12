import Header from './layouts/header/header'
import Sidebar from './layouts/sidebar/sidebar'
import Body from './layouts/body/body'
import Footer from './layouts/footer/footer'
import { Fragment } from 'react'

function App() {
  return (
    <Fragment>
      <div className="flex flex-col container mx-auto h-screen">
        <Header></Header>
        <div className="grid grid-cols-3 mb-auto">
          <Body></Body>
          <Sidebar></Sidebar>
        </div>
        <Footer></Footer>
      </div>
    </Fragment>
  )
}

export default App
