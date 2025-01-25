import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import HomePage from "./Pages/HomePage";
import JobsPage from "./Pages/JobsPage";
import JobPage, { jobLoader } from "./Pages/JobPage";
import NotFoundPage from "./Pages/NotFoundPage";
import AddJobPage from "./Pages/AddJobPage";
import EditJobPage from "./Pages/EditJobPage";

const App = () => {
  const addJob = async (newJob) => {
    //addnew job to the database
    const res = await fetch('/api/jobs' , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  }
  //delete job
  const deleteJob = async (id) => {
    //delete job from the database
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return; 
  }
  //update job
  const updateJob = async (job) => {
    //update job in the database
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  }


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob}/>} />
        <Route path="/edit-job/:id" element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />
        <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob } />} loader={jobLoader} />
  
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
