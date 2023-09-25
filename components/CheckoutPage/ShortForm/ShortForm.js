import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import { useForm } from "react-hook-form";

import * as styles from "../AddressForm/AddressForm.module.css";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { updateDeliveryDetails } from "../../../store/actions/app";

const ShortForm = (props) => {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch()
    const submitForm = async (data) => {
        dispatch(updateDeliveryDetails({...data, deliveryType: props.deliveryType}))
        router.push('/order-summary')
    }


  return (
    <div className={styles.wrapper}>
      <h3>Contact Info</h3>
      <div className={styles.formContainer}>
        <Input type="email" label="Email" inputName="email" register={register} controlled />
        <Input type="text" label="Mobile Number" inputName="mobile" required register={register} controlled />
        <Button onClick={handleSubmit(submitForm)}>Continue</Button>
      </div>
    </div>
  );
};

export default ShortForm;
