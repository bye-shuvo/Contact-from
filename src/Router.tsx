import { createBrowserRouter } from "react-router";
import App from "./App";
import EmployeeValidationForm from "./components/EmployeeValidationFrom";

const router = createBrowserRouter([
    {
        path : "/",
        element : <App />
    },
    {
        path : "/employeeform",
        element : <EmployeeValidationForm />
    }
])