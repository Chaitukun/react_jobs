
import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import HomePage from './Pages/HomePage';
import JobsPage from './Pages/JobsPage';
import JobPage, {jobLoader}from './Pages/JobPage';
import NotFoundPage from './Pages/NotFoundPage';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
  < Route index element = {<HomePage />}/>
  <Route path='jobs' element={<JobsPage/>} />
  <Route path='jobs/:id' element={<JobPage/> } loader={jobLoader}  />

  <Route path='*' element={<NotFoundPage/>} />

    </Route>
)
);
const App = () => {
  return <RouterProvider router={router} />;
    }
    
 



export default App
