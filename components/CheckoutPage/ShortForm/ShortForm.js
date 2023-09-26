import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import { useForm } from "react-hook-form";

import * as styles from "../AddressForm/AddressForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { updateDeliveryDetails } from "../../../store/actions/app";
import { isEmpty } from "../../../utils/helperFunctions";
import { useEffect } from "react";

const ShortForm = (props) => {
    const router = useRouter()
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch()
    const submitForm = async (data) => {
        dispatch(updateDeliveryDetails({...data, deliveryType: props.deliveryType}))
        router.push('/order-summary')
    }

    const loggedUser = useSelector((data) => data.user);

    const defaultValues = {
      firstName: loggedUser.firstName,
      lastName: loggedUser.lastName,
      email: loggedUser.email,
      mobile: '',
    }
  
  
    useEffect(() => {
      if(!isEmpty(loggedUser)) {
        reset(defaultValues);
      }
  
    
    }, [])


  return (
    <div className={styles.wrapper}>
      <h3>Contact Info</h3>
      <div className={styles.formContainer}>
      <Input
          type="text"
          label="First Name*"
          inputName="firstName"
          minLength={3}
          required
          register={register}
          controlled
        />
        <Input
          type="text"
          label="Last Name*"
          inputName="lastName"
          minLength={3}
          required
          register={register}
          controlled
        />
        <Input type="email" label="Email" inputName="email" register={register} controlled />
        <Input type="text" label="Mobile Number*" inputName="mobile" required register={register} controlled />
        <Button onClick={handleSubmit(submitForm)}>Continue</Button>
      </div>
    </div>
  );
};

export default ShortForm;
