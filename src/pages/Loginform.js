import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Loginform = () => {
  const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
  );
  const [passtype, setpasstype] = useState("password")
  const [loginform, setloginform] = useState({
    email: '',
    password: '',
  })
  const [errors, seterrors] = useState({
    email: null,
    password: null,
  })
  const submitForm = (e) => {
    e.preventDefault();
    for (var item in loginform) {
      console.log(item)

      if (loginform[item] === '') {
        seterrors({
          ...errors,
          email: loginform.email === '' ? "this field is required" : null,
          password: loginform.password === '' ? "this field is required" : null
        })
        return 0
      }

    }
    console.log(loginform)
  }
  function update(e) {
    if (e.target.name === "email") {
      setloginform({
        ...loginform,
        email: e.target.value
      })
      seterrors({
        ...errors,
        email:
          validEmail.test(e.target.value) === false ? "please write a vaild email !" : null
      })


    }
    else if (e.target.name === "password") {
      setloginform({
        ...loginform,
        password: e.target.value
      })
      seterrors({
        ...errors,
        password:
          e.target.value.length < 8 ? "password should have more than 8 charctricts" : null
      })
    }
  }

  function showpass(e) {

    if (e.target.checked === true) {
      setpasstype("text")
      console.log(passtype)
    } else {
      setpasstype("password")
    }
  }
  return (
    <>
      <div className="container d-flex justify-content-center  align-items-center justify-content-center " style={{ height: '80vh' }}>
        <form className='col-7 text-center border p-3 rounded' onSubmit={(e) => submitForm(e)}>
          <div>
            <label htmlFor="email" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="you@example.com"
              value={loginform.email}
              name="email"
              onChange={(e) => update(e)}
            />
            <div class="text-danger text-left mt-1">
              {errors.email}
            </div>
            <label htmlFor="password" class="form-label mt-2">
              password
            </label>
            <input
              type={passtype}
              class="form-control"
              id="password"
              name="password"
              onChange={(e) => update(e)}
            />
            <div class="text-danger">
              {errors.password}
            </div>

          </div>
          <button type='submit' className='btn btn-dark m-2 mt-3' disabled={errors.email && errors.password == null ? true : false} > Login </button>
          <Link className='btn btn-outline-dark mt-3 m-2 ' to={'/register'}>  New user </Link>
        </form>
      </div>
    </>
  );
};
export default Loginform;
