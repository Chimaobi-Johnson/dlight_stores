import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import { useForm } from "react-hook-form";

import * as styles from "./AddressForm.module.css";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { updateDeliveryDetails } from "../../../store/actions/app";

const AddressForm = (props) => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch()
  const submitFormHandler  = async (data) => {
    dispatch(updateDeliveryDetails({...data, deliveryType: props.deliveryType}))
    router.push('/order-summary')
  }

  return (
    <div className={styles.wrapper}>
      <h3>Delivery Address</h3>
      <span className={styles.info}>If you are outside Rivers state please contact us directly at inquiries@delighthomewarestores.com</span>
      <div className={styles.formContainer}>
        <Input
          type="text"
          label="First Name"
          inputName="firstName"
          minLength={3}
          required
          register={register}
          controlled
        />
        <Input
          type="text"
          label="Last Name"
          inputName="lastName"
          minLength={3}
          required
          register={register}
          controlled
        />
        <Input type="email" label="Email" inputName="email" required
        controlled
        register={register} />
        <Input type="text" label="Mobile Number" inputName="mobile" required
        controlled
        register={register} />
        <Input
          type="text"
          label="State"
          inputName="state"
          defaultValue="Rivers"
          disabled
          register={register}
          controlled
        />
        <Input type="text" label="City" inputName="city" required
        controlled
        register={register} />
        <Input
          type="text"
          label="Street/Road Name"
          inputName="streetname"
          required
          register={register}
          controlled
        />
        <Input type="text" label="House No" inputName="houseno"
        controlled
        register={register} />
        {/* <label for="additionalInfo">Additional Info</label> */}
        <div className={styles.additionalInfo}>
          <span>
            Let us know anything that will make delivery to your location easier
          </span>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            {...register('additionalInfo')}
            controlled
          ></textarea>
        </div>
      </div>
      <Button onClick={handleSubmit(submitFormHandler)}>Continue</Button>
    </div>
  );
};

export default AddressForm;
