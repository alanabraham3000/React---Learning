import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoList from './TodoList';
import Alan from './Alan' 
import NavBar from './nav';
import { ThemeProvider } from './context/light';

function App(){
  return(
    <ThemeProvider>
    <BrowserRouter>
    <Routes>
      
      <Route path='/todo' element={<TodoList/>} />
      <Route path='/navBar' element={<NavBar/>}/>
      <Route path='/'  element={<Alan name="alan"/>} />
      
    </Routes>
  </BrowserRouter>
  </ThemeProvider>
  );
}




export default App

