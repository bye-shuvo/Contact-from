import React, { useEffect, useState } from "react";

function EmployeeValidationForm() {
  const [name, setName] = useState<string>("");
  const [nameValidation, setNameValidation] = useState(true);
  const [email, setEmail] = useState("");
  const [emailValidation, setEmailValidation] = useState(true);
  const [employeeId, setEmployeeId] = useState("");
  const [employeeIdValidation, setEmployeeIdValidation] = useState(true);
  const [joiningDate, setJoiningDate] = useState("");
  const [joiningDateValidation, setJoiningDateValidation] = useState(true);
  const [formData, setFormData] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setName("");
    setNameValidation(true);
    setEmail("");
    setEmailValidation(true);
    setEmployeeId("");
    setEmployeeIdValidation(true);
    setJoiningDate("");
    setJoiningDateValidation(true);
    setFormData({ name, employeeId, email, joiningDate });
    console.log({ name, employeeId, email, joiningDate });
  }

  useEffect(() => {
    if (name.length > 4 && name.match(/^[a-zA-Z\s]*$/)) {
      setNameValidation(false);
    }
    else {
      setNameValidation(true);
    }
  }, [name]);

  useEffect(() => {
    if (email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    )) {
      setEmailValidation(false);
    }
    else {
      setEmailValidation(true);
    }
  }, [email]);

  useEffect(() => {
    if (employeeId.length === 6) {
      setEmployeeIdValidation(false);
    } else {
      setEmployeeIdValidation(true);
    }
  }, [employeeId]);

  useEffect(() => {
    const REFERENCE_DATE = new Date("2025-01-01").getTime();
    if (Date.parse(joiningDate) < REFERENCE_DATE) {
      setJoiningDateValidation(false);
    }
    else {
      setJoiningDateValidation(true);
    }
  }, [joiningDate]);

  useEffect(() => {
    if (!nameValidation && !emailValidation && !employeeIdValidation && !joiningDateValidation) {
      setIsDisabled(false);
    }
    else{
      setIsDisabled(true);
    }
  }, [nameValidation, emailValidation, employeeIdValidation, joiningDateValidation]);

  return (
    <div className="App layout-column align-items-center mt-20 ">
      <h1>Employee From</h1>
      <form onSubmit={handleSubmit}>
        <div className="layout-column align-items-start mb-10 w-50" data-testid="input-name">
          <input
            className="w-100"
            type="text"
            name="name"
            placeholder="Name"
            data-testid="input-name-test"
            onChange={(e) => { setName(e.target.value) }}
          />
          {nameValidation && <p className="error mt-2">
            Name must be at least 4 characters long and only contain letters and spaces
          </p>}
        </div>
        <div className="layout-column align-items-start mb-10 w-50" data-testid="input-email">
          <input
            className="w-100"
            type="text"
            name="email"
            placeholder="Email"
            onChange={(e) => { setEmail(e.target.value) }}
          />
          {emailValidation && <p className="error mt-2">Email must be a valid email address</p>}
        </div>
        <div className="layout-column align-items-start mb-10 w-50" data-testid="input-employee-id">
          <input
            className="w-100"
            type="text"
            name="employeeId"
            placeholder="Employee ID"
            onChange={(e) => { setEmployeeId(e.target.value) }}
          />
          {employeeIdValidation && <p className="error mt-2">Employee ID must be exactly 6 digits</p>}
        </div>
        <div className="layout-column align-items-start mb-10 w-50" data-testid="input-joining-date">
          <input
            className="w-100"
            type="date"
            name="joiningDate"
            placeholder="Joining Date"
            onChange={(e) => { setJoiningDate(e.target.value) }}
          />
          {
            joiningDateValidation &&
            <p className="error mt-2">Joining Date cannot be in the future</p>}
        </div>
        <button data-testid="submit-btn" type="submit" disabled={isDisabled}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default EmployeeValidationForm;
