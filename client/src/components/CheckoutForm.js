import React from 'react'
import { CheckoutFormStyled } from './CheckoutFormStyled'
import {useFormik} from 'formik'
import {initialValues,validationSchema} from '../utils/formik.methods.objects'
function CheckoutForm({thankYouHandler}) {
  const g = ()=>{
    thankYouHandler()
  }
   const onSubmit= (values,f) =>{
    console.log(values)
    g();
    console.log(formik.isValid,formik.isSubmitting)
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  })
  return (
    <CheckoutFormStyled onSubmit={formik.handleSubmit} id="checkout">
      <h2>Checkout</h2>
      <fieldset>
        <h3>Billing details</h3>
        <div className="Field">
            <div className='label-wrapper'>
            <label htmlFor='name' style={{ color: formik.touched.name  && formik.errors.name ? "#FF0000" : "#000"}}>
            Name 
            </label> {  formik.touched.name  && formik.errors.name? <label className='error'>{  formik.touched.name  && formik.errors.name}</label> : null}
            </div>
            <input placeholder="Jude Kwofie"  type="text" id='name' name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}/>
          </div>
          <div className="Field">
            <div className='label-wrapper'>
            <label htmlFor='email' style={{ color: formik.touched.email  && formik.errors.email ? "#FF0000" : "#000"}}>
            Email Address  
            </label> {  formik.touched.email  && formik.errors.email? <label className='error'>{  formik.touched.email  && formik.errors.email}</label> : null}
            </div>
            <input placeholder="judekwofie@gmail.com" type="email" id='email' name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
          </div>
          <div className="Field">
            <div className='label-wrapper'>
                <label htmlFor='phone_number' style={{ color:   formik.touched.phone_number  && formik.errors.phone_number ? "#FF0000" : "#000"}}>
            Phone number
              </label> {  formik.touched.phone_number  && formik.errors.phone_number? <label className='error'>{  formik.touched.phone_number  && formik.errors.phone_number}</label> : null}
            </div>                    
            <input placeholder="+233-591-332-6567" type="tel" id='phone_number' name='phone_number' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone_number}/>
          </div>
      </fieldset>

      <fieldset>
        <h3> shipping Info</h3>
        <div className="Field address">
            <div className='label-wrapper'>
                <label htmlFor='address' style={{ color:   formik.touched.address  && formik.errors.address ? "#FF0000" : "#000"}}>
            Phone number
              </label> {  formik.touched.address  && formik.errors.address? <label className='error'>{  formik.touched.address  && formik.errors.address}</label> : null}
            </div>
            <input placeholder="1137 Williams Avenue"  type="text" id='address' name="address" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.address} />
          </div>
          <div className="Field">

            <div className='label-wrapper'>
                <label htmlFor='zipcode' style={{ color:   formik.touched.zipcode  && formik.errors.zipcode ? "#FF0000" : "#000"}}>
            Zip Code
              </label> {  formik.touched.zipcode  && formik.errors.zipcode? <label className='error'>{  formik.touched.zipcode  && formik.errors.zipcode}</label> : null}
            </div>
            <input placeholder="1001" type="text" id='zipcode' name="zipcode" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.zipcode}/>
          </div>
          <div className="Field">
      
            <div className='label-wrapper'>
                <label htmlFor='city' style={{ color:   formik.touched.city  && formik.errors.city ? "#FF0000" : "#000"}}>
            City
              </label> {  formik.touched.city  && formik.errors.city? <label className='error'>{  formik.touched.city  && formik.errors.city}</label> : null}
            </div>
            <input placeholder="takoradi" type="text" id='city' name='city' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.city}/>
          </div>
          <div className="Field">
            
            <div className='label-wrapper'>
                <label htmlFor='country' style={{ color:   formik.touched.country  && formik.errors.country ? "#FF0000" : "#000"}}>
            Country
              </label> {  formik.touched.country  && formik.errors.country? <label className='error'>{  formik.touched.country  && formik.errors.country}</label> : null}
            </div>
            <input placeholder="Ghana" type="text" id='country' name='country' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.country}/>
          </div>
      </fieldset>
      <fieldset>
        <h3>Payment details</h3>
        <div className="Field payment">
            <label>
            Payment method 
            </label>
            <div className='payment_wrapper'>
            <div className='radio-field'>
              <input   type="radio" id='e-money' name="payment_method" defaultChecked value='e-money'onChange={() => formik.setFieldValue("payment_method", "e-money")}  />
              <label htmlFor='e-money'>
              e-Money 
              </label>
            </div>
            <div className='radio-field'>
              <input   type="radio" id='cash' name="payment_method"  checked={formik.values.payment_method === "cash on delivery"} onChange={() => formik.setFieldValue("payment_method", "cash on delivery")}/>
              <label htmlFor='cash'>
              Cash on Delivery 
              </label>
            </div>
            </div>
            
          </div>
          {
            formik.values.payment_method === "e-money"?
           (<div className='e-money'>
              <div className="Field">
              <div className='label-wrapper'>
                <label htmlFor='e-money' style={{ color:   formik.touched.e_money_number  && formik.errors.e_money_number ? "#FF0000" : "#000"}}>
                e-Money Number 
              </label> {  formik.touched.e_money_number  && formik.errors.e_money_number  ? <label className='error'>{  formik.touched.e_money_number  && formik.errors.e_money_number}</label> : null}
            </div>
              <input placeholder="238521993" type="text" id='e-money' name="e_money_number" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.e_money_number}/>
          </div>
          <div className="Field"> 
            <div className='label-wrapper'>
                <label htmlFor='e-money_pin' style={{ color:   formik.touched.e_money_pin  && formik.errors.e_money_pin ? "#FF0000" : "#000"}}>
                e-Money Pin 
              </label> {  formik.touched.e_money_pin  && formik.errors.e_money_pin  ? <label className='error'>{  formik.touched.e_money_pin  && formik.errors.e_money_pin}</label> : null}
            </div>
            <input placeholder="6892" type="text" id='e-money_pin' name='e_money_pin' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.e_money_pin}/>
          </div>
            </div>):
            (<div className='cash-on-delivery'>
              <img src={require('./../assets/Shape.jpg')} alt='gear'/>
              <p>
              The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
              </p>
            </div>)
          }
          
      </fieldset>
    </CheckoutFormStyled>
  )
}

export default CheckoutForm
