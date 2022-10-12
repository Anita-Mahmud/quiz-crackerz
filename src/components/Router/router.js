import { createBrowserRouter } from 'react-router-dom';
import Error from '../Error';
import Home from '../Home';
import QuizQues from '../QuizQues';
import Root from '../Root';

const router= createBrowserRouter([
  {
   path:'/',
   element:<Root></Root>,
   errorElement:<Error></Error>,
   loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
   children:[
    {
      path: '/',
     
      element: <Home></Home>,
    },
    {
      path: 'home',
      element: <Home></Home>,
    },
    {
      path:'quiz/:id',
      element:<QuizQues></QuizQues>,
      loader:({params})=> fetch (`https://openapi.programming-hero.com/api/quiz/${params.id}`)
    },
   ]
    
  }
])
export default router;