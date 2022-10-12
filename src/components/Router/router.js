import { createBrowserRouter } from 'react-router-dom';
import Blog from '../Blog';

import Error from '../Error';
import Home from '../Home';
import QuizQues from '../QuizQues';
import Root from '../Root';
import Statistics from '../Statistics';
import Topics from '../Topics';

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
      path: 'quiz',
      element: <Topics></Topics>,
    },

    {
      path:'quiz/:id',
      element:<QuizQues></QuizQues>,
      loader:({params})=> fetch (`https://openapi.programming-hero.com/api/quiz/${params.id}`)
    },
    {
      path:'statistics',
      element:<Statistics></Statistics>
    },
    {
      path:'blog',
      element:<Blog></Blog>
    }
    
   ]
    
  }
]);
export default router;