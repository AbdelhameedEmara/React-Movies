import { useState } from "react"
import { useEffect } from "react"


 const Registerform = ()=>{
    const validEmail = new RegExp(
        '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
     );
     var validpassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$.%^&*])");

const [registerForm , setRegisterForm] = useState({
     name : '',
     email : '',
     username : '',
     password : '',
})
const [errregisterForm , seterrRegisterForm] = useState({
    name : null,
    email : null,
    username : null,
    password : null,
    confpassword : null
})
  useEffect(() => {
      console.log(errregisterForm)
      console.log("there is update")
  }, [errregisterForm])

    const update =(e) => {
        if ( e.target.name === "name"){
            setRegisterForm({
                ...registerForm,
                name : e.target.value
            })
            seterrRegisterForm({
               ...errregisterForm ,
              name : 
               e.target.value === ''? "this field is required" : null
            })
            
        }
        if ( e.target.name === "email"){
            setRegisterForm({
                ...registerForm,
                email : e.target.value
            })
            seterrRegisterForm({
               ...errregisterForm ,
               email: 
               e.target.value === ''? "this field is required" : !validEmail.test(e.target.value) ? "email is not vaild !" : null
            })
            
        }
        if ( e.target.name === "username"){
            setRegisterForm({
                ...registerForm,
                username : e.target.value
            })
            seterrRegisterForm({
               ...errregisterForm ,
               username: 
               e.target.value === ''? "this field is required"  : registerForm.username.includes(' ') ? "the user name should have no spaces" : null
            })
            
        }
        if ( e.target.name === "password"){
            setRegisterForm({
                ...registerForm,
                password : e.target.value
            })
            seterrRegisterForm({
               ...errregisterForm ,
               password: 
               e.target.value === ''? "this field is required"  : e.target.value.length < 8 ? "the password should have more than 8 characters" : 
               !validpassword.test(e.target.value) ? " the password is shoud have contains at least one lowercase , one uppercase , at least one digit and special character" : null
            })
            
        }
        if ( e.target.name === "confpassword"){
            seterrRegisterForm({
               ...errregisterForm ,
               confpassword: 
               e.target.value === ''? "this field is required"  : e.target.value !== registerForm.password ? "passwords dont match !" : null
            })
            
        }
}
const send = (e) => {
    e.preventDefault();
    for (var item in registerForm){
        console.log(item)
        console.log(registerForm[item])
          
        if (registerForm[item] === ''){
           seterrRegisterForm({
            ...errregisterForm , 
            name : registerForm.name === ''? "this field is required": null,
            email : registerForm.email === ''? "this field is required": null,
            username : registerForm.username === ''? "this field is required": null,
            password : registerForm.password === ''? "this field is required": null
           })
           return 0;
        }
       
    }
    console.log(registerForm)
}
return (<>
<div className="container mt-5">
<h1 className="mt-3"> Register Form</h1>
<form onSubmit={(e) => send(e)} className="border rounded p-3">
<div class="mb-3">
    <label  class="form-label"> Name </label>
    <input type="text" value={registerForm.name} className={errregisterForm.name != null? "border border-danger form-control" : "form-control"} onChange={(e)=> update(e)} name="name" />
    <div  class="form-text text-danger">{errregisterForm.name}</div>
  </div>
  <div class="mb-3">
    <label class="form-label">Email address</label>
    <input type="email"  className={errregisterForm.email != null? "border border-danger form-control" : "form-control"} onChange={(e)=> update(e)} name="email"/>
    <div id="emailHelp" class="form-text text-danger">{errregisterForm.email} </div>
  </div>
  <div class="mb-3">
    <label  class="form-label">User name</label>
    <input type="text" className={errregisterForm.username != null? "border border-danger form-control" : "form-control"} onChange={(e)=> update(e)} name="username"/>
    <div id="emailHelp" class="form-text text-danger">{errregisterForm.username}</div>
  </div>
  <div class="mb-3">
    <label class="form-label">Password</label>
    <input type="password" className={errregisterForm.password != null? "border border-danger form-control" : "form-control"} onChange={(e)=> update(e)} name="password" id="exampleInputPassword1"/>
    <div id="emailHelp" class="form-text text-danger">{errregisterForm.password}</div>
  </div>
  <div class="mb-3">
    <label  class="form-label"> Confirm Password </label>
    <input type="password"className={errregisterForm.confpassword != null? "border border-danger form-control" : "form-control"}  onChange={(e)=> update(e)} name="confpassword" />
    <div  class="form-text"><div  class="form-text text-danger">{errregisterForm.confpassword}</div></div>
  </div>
  <button type="submit" class="btn btn-dark" disabled={errregisterForm.name || errregisterForm.confpassword || errregisterForm.password 
    || errregisterForm.email|| errregisterForm.username }> Submit</button>
</form>

</div>
</>)
}
export default Registerform;
