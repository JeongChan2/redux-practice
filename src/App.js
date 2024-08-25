import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';
import GrandSonBOx from './component/GrandSonBOx';
import { Container, Row } from 'react-bootstrap';


function App() {
  const count = useSelector(state => state.count);
  const id = useSelector(state => state.id);
  const password = useSelector(state => state.password);

  const dispatch = useDispatch();


  const increase = () => {
    dispatch({type:"INCREMENT", payload: {num:10}})
    
  }

  const decrease = () => {
    dispatch({type:"DECREASE", payload: {num:2}})
  }

  const login = () => {
    dispatch({type:"LOGIN", payload:{id:"noo",password:"123"}})
  }

  return (

    <Container>
      <Row>
        <div>
          <h1>{id} {password}</h1>
          <h1>{count}</h1>
          <button onClick={increase}>증가</button>
          <button onClick={decrease}>감소</button>
          <Box />
          <GrandSonBOx/>
          <button onClick={login}>login</button>
      </div>
      </Row>
    </Container>

  );
}

export default App;
