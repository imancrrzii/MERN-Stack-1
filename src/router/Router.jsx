import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import CreateJob from "../pages/CreateJob";
import Home from "../pages/Home";
import MyJobs from "../pages/MyJobs"; 
import SalaryEstimate from "../pages/SalaryEstimate";
import UpdateJob from "../pages/UpdateJob";
import Login from "../components/login";
import JobDetails from "../pages/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/my-job",
        element: <MyJobs />,
      },
      {
        path: "/post-job",
        element: <CreateJob />,
      },
      {
        path: "/salary",
        element: <SalaryEstimate />,
      },
      {
        path: "/edit-job/:id",
        element: <UpdateJob />,
        loader: ({params}) => fetch(`http://localhost:3000/all-jobs/${params.id}`)
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login/>
  }
]);

export default router;
