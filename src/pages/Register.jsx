import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/appContext";
import { Navigate } from "react-router-dom";
import FormRow from "../components/FormRow";
import logo from "../assets/logo.svg";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    isMember: true,
  });

  const { user, register, login, isLoading, showAlert } = useGlobalContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;

    if (isMember) {
      login({ email, password });
    } else {
      register({ name, email, password });
    }
  };

  return (
    <>
      {user && <Navigate to="/dashboard" />}
      <Wrapper>
        <div className="container">
          {showAlert && (
            <div className="alert alert-danger">
              there was an error, please try again
            </div>
          )}
          <form className="form" onSubmit={onSubmit}>
            <img src={logo} alt="logo" />
            <h4>{values.isMember ? "Login" : "Register"}</h4>
            {/* Name field */}
            {!values.isMember && (
              <FormRow
                type="name"
                name="name"
                value={values.name}
                handleChange={handleChange}
              />
            )}
            {/* Single form row */}
            <FormRow
              type="email"
              name="email"
              value={values.email}
              handleChange={handleChange}
            />
            {/* Single form row */}
            <FormRow
              type="password"
              name="password"
              value={values.password}
              handleChange={handleChange}
            />
            <button
              type="submit"
              className="btn btn-block"
              disabled={isLoading}
            >
              {isLoading ? "Fetching User..." : "Submit"}
            </button>
            <p>{values.isMember ? "Not a member yet?" : "Already a member?"}</p>
            <button type="button" className="member-btn" onClick={toggleMember}>
              {values.isMember ? "Register" : "Login"}
            </button>
          </form>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
display: grid;
align-items: center;
.logo {
  display: block;
  margin: 0 auto;
  margin-bottom: 1.38rem;
}
.form {
  max-width: 400px;
  border-top: 5px solid var(--primary-500);
}
h4 {
  text-align: center;
}
p {
  margin: 0;
  margin-top: 1rem;
  text-align: center;
}
.btn {
  margin-top: 1rem;
}
.member-btn {
  background: transparent;
  border: transparent;
  color: var(--primary-500);
  cursor: pointer;
}
`;

export default Register;
