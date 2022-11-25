import {validateEmail} from  '../utils/email.validator'
import * as Yup from 'yup'
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const initialValues= {
    name:'mx',
    email:'',
    phone_number:'',
    address:'',
    zipcode:'',
    city:'',
    country:'',
    e_money_number:'',
    e_money_pin:'',
    payment_method:'e-money'

  };
 export const onSubmit= (values) =>{
    console.log(values)
  };

  export const validationSchema =Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().email('wrong format').required('Required!'),
    phone_number: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    address: Yup.string().required('required!'),
    zipcode: Yup.string().required('required!'),
    city: Yup.string().required('required!'),
    country: Yup.string().required('required!'),
    e_money_number: Yup
    .string()
    .when("payment_method", (payment_method, field) =>
    payment_method==="e-money" ? field.required('Required!') : field),
    e_money_pin: Yup
    .string()
    .when("payment_method", (payment_method, field) =>
    payment_method==="e-money" ? field.required('Required!') : field)

  })
 export const  validate= (values) =>{
    console.log("gfg")

    let errors ={}
    if(!values.name){
      console.log("kk")
        errors.name = 'Required'
    }
    if(!values.email){
        errors.email = 'Required'
    }else{
      if(!validateEmail(values.email)){
         errors.email ='wrong format'
      }
    }
    if(!values.phone_number){
        errors.phone_number = 'Required'
    }
    if(!values.address){
        errors.address = 'Required'
    }
    if(!values.zipcode){
        errors.zipcode = 'Required'
    }
    if(!values.city){
        errors.city = 'Required'
    
    }
    if(!values.country){
        errors.country = 'Required'
    }
    if(!values.e_money_number && values.payment_method ==="e-money"){
        errors.e_money_number = 'Required'
    }
     if(!values.e_money_pin && values.payment_method ==="e-money"){
        errors.e_money_pin = 'Required'
    
    }
    
    return  errors;
  }