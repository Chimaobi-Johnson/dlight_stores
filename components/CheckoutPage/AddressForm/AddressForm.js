import Input from "../../ui/Input/Input";
import * as styles from "./AddressForm.module.css";

const AddressForm = (props) => {
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
        />
        <Input
          type="text"
          label="Last Name"
          inputName="lastName"
          minLength={3}
          required
        />
        <Input type="email" label="Email" inputName="email" required />
        <Input type="text" label="Mobile Number" inputName="mobile" required />
        <Input
          type="text"
          label="State"
          inputName="state"
          defaultValue="Rivers"
          disabled
        />
        <Input type="text" label="City" inputName="city" required />
        <Input
          type="text"
          label="Street/Road Name"
          inputName="streetname"
          required
        />
        <Input type="text" label="House No" inputName="houseno" />
        {/* <label for="additionalInfo">Additional Info</label> */}
        <div className={styles.additionalInfo}>
          <span>
            Let us know anything that will make delivery to your location easier
          </span>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
