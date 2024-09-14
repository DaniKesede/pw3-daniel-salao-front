import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home"
import Container from "./components/layout/Container"
import CreateTime from "./components/pages/CreateTime";
import NavBar from "./components/layout/NavBar";
import "./App.css"


function App() {
  
  return (

    <>

        <BrowserRouter >

        <Container>

          <Routes>

            <Route path='/' element={<NavBar/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='/createTime' element={<CreateTime/>}/>

            </Route>

          </Routes>

        </Container>

        </BrowserRouter>

    </>

    );
  };
  
  export default App