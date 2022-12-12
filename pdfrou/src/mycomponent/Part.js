import React,{useState} from 'react'
import { useFormik } from "formik";
import { signUpSchema } from '../schemas/Resgister';
const initialValues = {
  name: "",
  age:"",
  email: "",
  phone:" ",
  add:"",
 gender:"",
 gridRadios:"",
 payment:"",


};

export default function Part() {
  let name,user;
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      console.log(
       
        values
      );
      action.resetForm();
    },
    
    onChange:(e)=>
    {
      console.log(e);
      name=e.target.name;
      user=e.target.user;
      setUser({...values ,[name]:user})
    }
  });
console.log(
  
  errors
);
/*let name ,user;
 handleChange=(e)=>
 {
console.log(e);
name=e.target.name;
user=e.target.user;
setUser({...values,[name]:user})
 }*/
const[setUser]=useState({
name: "",
  age:"",
  email: "",
  phone:" ",
  add:"",
 gender:"",
 gridRadios:"",
 payment:"",
});
  return (
    <div className='part'>
      
<form className='mainpart'  onSubmit={handleSubmit}>
<div className="row mb-3 first">
<label htmlFor="inputName3"  className="col-sm-4 col-form-label">Full Name</label>
  <div className="col-sm-8">
    <input type="text" className="form-control" placeholder="Name"  value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur} aria-label="First name" id='inputName3' name='name' required autoComplete='off'/>
  </div>
  {errors.name && touched.name ? (
                      <p className="form-error">{errors.name}</p>
                    ) : null}</div>
<div className="form-outline row mb-3 first">
  
<label className="form-label col-sm-4" htmlFor="typeNumber">Age</label>
<div  className="col-sm-8">
  <input type="number" id="typeNumber" placeholder="Age"  value={values.age}
                      onChange={handleChange}
                      onBlur={handleBlur} className="form-control"name='age' required autoComplete='off'/>
 
</div>
{errors.age && touched.age ? (
                      <p className="form-error">{errors.age}</p>
                    ) : null}</div>
  <div  className="row mb-3 first">
    <label htmlFor="inputEmail3"  className="col-sm-4 col-form-label">Email</label>
    <div  className="col-sm-8">
      <input type="email"  className="form-control" name='email' placeholder="Email"  value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}id="inputEmail3"required autoComplete='off'/>
    </div>
    {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
  </div>
  <div className="form-outline row mb-3 first">
  <label className="form-label col-sm-4" htmlFor="typePhone">Phone Number</label>
 
  <div  className="col-sm-8">
  <input type="tel" id="typePhone" placeholder="eg: 8760001113"className="form-control " name='phone' required  autoComplete='off'/>
</div>
{errors.phone && touched.phone ? (
                      <p className="form-error">{errors.phone}</p>
                    ) : null}
</div>
  <div  className="row mb-3 first">
  <label htmlFor="inputAddress" className="form-label col-sm-4" >Address</label>
    <div  className="col-sm-8">
    <input type="text" className="form-control" id="inputAddress"  name='add'placeholder=" Main St, 654 Indore"  value={values.add}
                      onChange={handleChange}
                      onBlur={handleBlur}required autoComplete='off'/>
    </div>
    {errors.add && touched.add ? (
                      <p className="form-error">{errors.add}</p>
                    ) : null}
  </div>
  <div  className="row mb-3 first">
  <label htmlFor="inputgender" className="form-label col-sm-4" >Gender</label>
  <div  className="col-sm-8">
  <select className="form-select" aria-label="Default select example"name='gender' id='inputgender'autoComplete='off'>
  <option defaultValue>Your Gender</option>
  <option value="1">Female</option>
  <option value="2">Male</option>
  <option value="3">Other</option>
</select></div>
{errors.gender && touched.gender ? (
                      <p className="form-error">{errors.gender}</p>
                    ) : null}</div>
  
  <fieldset  className="row mb-3 ">
    <legend  className="col-form-label col-sm-4 pt-0 ">Batch</legend>
    <div  className="col-sm-8">
      <div  className="form-check">
        <input  className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" defaultChecked autoComplete='off'/>
        <label  className="form-check-label" htmlFor="gridRadios1">
        6:00-7:00 AM
        </label>
      </div>
      <div  className="form-check">
        <input  className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"autoComplete='off'/>
        <label  className="form-check-label" htmlFor="gridRadios2">
        7:00-8:00 AM
        </label>
      </div>
      <div  className="form-check">
        <input  className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option3"autoComplete='off'/>
        <label  className="form-check-label" htmlFor="gridRadios2">
        8:00-9:00 AM
        </label>
      </div> 
      <div  className="form-check">
        <input  className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option"autoComplete='off'/>
        <label  className="form-check-label" htmlFor="gridRadios2">
        5:00-6:00 PM
        </label>
      </div> 
     
    </div>{errors.gridRadios && touched.gridRadios ? (
                      <p className="form-error">{errors.gridRadios}</p>
                    ) : null}
  </fieldset>
  <div className="input-group mb-3 first">
  
    <label htmlFor="inputpayment3"  className="col-sm-4 col-form-label" >Payment</label>
    
  <span  className="input-group-text">&#8377;</span>

  <input type="text" className="  form-control col-sm-8 container" id="inputpayment3"  placeholder='500/-'  value={values.payment}
                      onChange={handleChange}
                      onBlur={handleBlur}name='payment' required/>
{errors.payment && touched.payment ? (
                      <p className="form-error">{errors.payment}</p>
                    ) : null}
</div>

  <button type="submit"  className="bbutn">Submit</button>
</form>

</div>
  )
}

     
   