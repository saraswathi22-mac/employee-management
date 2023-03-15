import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { editEmployee } from "./employeeSlice";

const EditEmployee = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const employees = useSelector((store) => store.employees);
  const navigate = useNavigate();
  const existingEmployee = employees.filter(
    (employee) => employee.id === params.id
  );
  const { name, email } = existingEmployee[0];
  const [values, setValues] = useState({
    name,
    email,
  });

  const handleEditEmployee = () => {
    setValues({ name: "", email: "" });
    dispatch(
      editEmployee({
        id: params.id,
        name: values.name,
        email: values.email,
      })
    );
    navigate("/");
  };

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: "text", placeholder: "Jhon Doe" }}
      />
      <br />
      <TextField
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: "email", placeholder: "jhondoe@mail.com" }}
      />
      <Button onClick={handleEditEmployee}>Edit</Button>
    </div>
  );
};

export default EditEmployee;
