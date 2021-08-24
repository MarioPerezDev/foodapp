import './PaymentForm.css'
import React, {Fragment} from 'react';
import { useForm } from "react-hook-form";

function PaymentForm(props) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        fetch("https://foodapp-e29dc-default-rtdb.europe-west1.firebasedatabase.app/", {
            method: "POST",
            body: JSON.stringify({
                
            })
        })
        console.log(data);
    }

    function getClass(inputName){
        if(errors[inputName]) return "invalid";
        return ""
    }
    return (
        <Fragment>
            <form className="personal-data-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="personal-data-row">
                    <label>Name</label>
                    {errors.name?.type === "required" && <span className="invalid-input-text">You must fill in a name</span>}
                    <input className={`${getClass("name")}`} {...register("name", { required: true, minLength: { value: 4, message: 'Nickname must be at least 4 characters long' } })} type="text" placeholder="Insert your name here..."></input>
                </div>
                <div className="personal-data-column">
                    <div className="personal-data-row">
                        <label>First Surname</label>
                        {errors.firstSurname?.type === "required" && <span className="invalid-input-text">You must fill in a surname</span>}
                        {errors.firstSurname?.type === "minLength" && <span className="invalid-input-text">Surname must be at least 2 characters long</span>}
                        <input className={`${getClass("firstSurname")}`} {...register("firstSurname",  { required: true, minLength: { value: 2, message: 'Surname must be at least 2 characters long' } })} type="text" placeholder="Insert your first surname here..."></input>  
                    </div>
                    <div className="personal-data-row">
                        <label>Second Surname</label>
                        <input className={`${getClass("secondSurname")}`} {...register("secondSurname",  { required: false })} type="text" placeholder="Insert your second surname here..."></input>
                    </div>
                </div>   
                <div className="personal-data-row">
                    <label>Email</label>
                    {errors.email?.type === "required" && <span className="invalid-input-text">You must fill in an email</span>}
                    <input className={`${getClass("email")}`} {...register("email", { required: true })} type="email" placeholder="Insert your email here..."></input>
                </div>                
                <div className="personal-data-row">
                    <label>Address</label>
                    {errors.address?.type === "required" && <span className="invalid-input-text">You must fill in an address</span>}
                    {errors.address?.type === "minLength" && <span className="invalid-input-text">Address must be at least 4 characters long</span>}
                    <input className={`${getClass("address")}`} {...register("address",  { required: true, minLength: { value: 4, message: "Street can't be that short, it must be at least 4 characters long" } })} type="text" placeholder="Insert your address here..."></input>
                </div>
                <div className="form-footer-buttons">
                    <button onClick={props.onClose} className="button-cancel">Cancel</button>
                    <button type="submit" className="button-pay" >Proceed to pay</button>
                </div>                 
            </form>
        </Fragment>
       
    );
}

export default PaymentForm;