import { Route, Routes } from "react-router-dom";
import AddEmployee from "./features/employees/AddEmployee";
import EditEmployee from "./features/employees/EditEmployee";
import EmployeeList from "./features/employees/EmployeeList";

function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className="text-center font-bold text-2xl text-gray-700">
        Employee Management
      </h1>
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/edit-employee/:id" element={<EditEmployee />} />
      </Routes>
    </div>
  );
}

export default App;
