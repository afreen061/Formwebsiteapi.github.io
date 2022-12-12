import * as Yup from "yup";

export const signUpSchema = Yup.object({

  name: Yup.string().min(2).max(25).required(" !Please enter name"),
  age: Yup.number().min(18) .max(65).required("!enter age"),
  email: Yup.string().email().required("!Please enter  emaill"),
  phone: Yup.string().required("!Please enter Addres "),
  add: Yup.string().min(2).max(25).required("!Please enter Address"),
  paymemt: Yup.number().min(500).required("!Please enter Addres"),
 
  
});