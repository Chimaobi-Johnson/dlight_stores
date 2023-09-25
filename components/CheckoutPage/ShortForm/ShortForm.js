import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import { useForm } from "react-hook-form";

import * as styles from "../AddressForm/AddressForm.module.css";

const ShortForm = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitForm = async (data) => {
        console.log(data)
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
