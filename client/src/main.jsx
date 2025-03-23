import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";        
import HomePage from "./pages/homePage/homePage.jsx";
import SigninPage from "./pages/signinPage/signinPage.jsx";
import SignupPage from "./pages/signupPage/signupPage.jsx";
import StudentDash from "./pages/studentDash/studentDash.jsx";
import TeacherDash from "./pages/teacherDash/teacherDash.jsx";
import AdminDash from "./pages/adminDash/adminDash.jsx";

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path : "/",
        element: <HomePage/>
      },
      {
     path: "/sign-in",
        element: <SigninPage />
      },
      {
        path: "/sign-up",
        element: <SignupPage />
      },
      {
        path: "/teacher-dash",
        element: <TeacherDash />
      },
      {
        path: "/student-dash",
        element: <StudentDash />
      },
      {
        path: "/admin-dash",
        element: <AdminDash />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
