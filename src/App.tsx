import './App.css'
import { Button, Center, Container, Heading } from '@chakra-ui/react'
import NavBar from 'components/navbar'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Calculator from 'pages/calculator'
import Scum from 'pages/scum'

const Main: React.FC<{}> = ({}) => {

  return (
    <>
      <Center mt={4}>
        <Heading as='h2' size='xl'>Hello Everyone</Heading>
      </Center>
    </>
  )
}

function App() {

  return (
    <>
      <NavBar />
      <Container maxW='container.lg'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main /> } />
            <Route path='/calculator' element={<Calculator /> } />
            <Route path='/scum' element={<Scum /> } />
          </Routes>
        </BrowserRouter>
        
      </Container>
    </>
  )
}

export default App
