import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoList from './TodoList';
import Alan from './Alan' 

import NavBar from './nav';

function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/todo' element={<TodoList/>} />
      <Route path='/navBar' element={<NavBar/>}/>
      <Route path='/'  element={<Alan name="alan"/>} />
    </Routes>
  </BrowserRouter>
  );
}




export default App