import styled from 'styled-components';
import { Canvas } from '@react-three/fiber'

import './App.css'
import Experience from './components/Experience';

const StyledCanvas = styled(Canvas)`
    position: fixed;
    width: 100vw;
    height: 100vh;
`;

function App() {
  
  return (
    <StyledCanvas 
      camera={{
        fov: 45,
        near: 0.1,
        far: 2000,
        position: [-3, 2.5, 4],
      }}>
      <Experience />
    </StyledCanvas>
  )
}

export default App;
