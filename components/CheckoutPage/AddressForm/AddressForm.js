import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import { useForm } from "react-hook-form";

import * as styles from "./AddressForm.module.css";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { updateDeliveryDetails } from "../../../store/actions/app";
import { useEffect, useState } from "react";
import { isEmpty, logoutHandler } from "../../../utils/helperFunctions";
import { NumericFormat } from "react-number-format";

const AddressForm = (props) => {

  const router = useRouter();
  const { register, reset, handleSubmit, formState: { errors } } = useForm({ defaultValues });
  const content = useSelector(data => data.app.content)
  const dispatch = useDispatch()

  const [shippingLocation, setShippingLocation] = useState(null);

  const changeInputHandler = (e) => {
    setShippingLocation(JSON.parse(e.target.value));
  };

  const formatJSON = (obj) => { // to prevent typeerror - converting circular structure to JSON
    return JSON.stringify(obj, (key, value) => {
      if (typeof value === 'object' && value !== null) {
          if (value instanceof Array) {
              return value.map(
                  (item, index) => 
                  (index === value.length - 1 ? 
                      'circular reference' : item));
          }
          return { ...value, circular: 'circular reference' };
      }
      return value;
  });
  
  }

  const submitFormHandler  = async (data) => {
    if(props.cartLength === 0) {
      alert('Cart is empty!')
      return
    }
    if(!shippingLocation) {
      alert('Please select your shipping location')
      return
    }
    console.log(data)
    dispatch(updateDeliveryDetails({...data, shippingLocation: shippingLocation, deliveryType: props.deliveryType}))
    router.push('/order-summary')
  }
  const loggedUser = useSelector((data) => data.user);

  const defaultValues = {
    firstName: loggedUser.firstName,
    lastName: loggedUser.lastName,
    userEmail: loggedUser.email,
    mobile: '',
    state: 'Rivers',
    city: '',
    streetname: '',
    houseno: '',
    additionalInfo: '',
    deliveryType: props.deliveryType
  }


  useEffect(() => {
    if(!isEmpty(loggedUser)) {
      reset(defaultValues);
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      <h3>Select your area</h3>
      <div className={styles.locationContainer}>
        {content.shippingLocations.length !== 0 ? content.shippingLocations.map((item, index) => (
          <div key={index}>
             <input
                type="radio"
                id={item.locationName}
                name="shippingLocation"
                value={formatJSON(item)}
                onChange={(e) => changeInputHandler(e)}
              />
              <label htmlFor={item.locationName}>
                {item.locationName} - <span style={{ fontWeight: 'bold' }}><NumericFormat value={item.locationPrice} prefix="N" displayType="text" thousandSeparator="," /> </span>
              </label>
              <br />
          </div>
        )) : ''}
       </div>
      <span className={styles.info}>If you are outside Rivers state please contact us directly at support@delighthomewarestores.com</span>
      <div className={styles.formContainer}>
        <Input
          type="text"
          label="First Name*"
          inputName="firstName"
          minLength={3}
          required
          register={register}
          controlled={true}
        />
        <Input
          type="text"
          label="Last Name*"
          inputName="lastName"
          minLength={3}
          required
          register={register}
          controlled={true}
        />
        <Input type="email*" label="Email" inputName="userEmail" required
        controlled={true}
        register={register} />
        <Input type="text" label="Mobile Number*" inputName="mobile" required
        controlled={true}
        register={register} />
        <Input
          type="text"
          label="State"
          inputName="state"
          defaultValue="Rivers"
          disabled
          register={register}
          controlled={true}
        />
        <Input type="text" label="City*" inputName="city" required
        controlled={true}
        register={register} />
        <Input
          type="text"
          label="Street/Road Name*"
          inputName="streetname"
          required
          register={register}
          controlled={true}
        />
        <Input type="text" label="House No" inputName="houseno"
        controlled={true}
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
            controlled={true}
          ></textarea>
        </div>
      </div>
      <Button onClick={handleSubmit(submitFormHandler)}>Continue</Button>
    </div>
  );
};

export default AddressForm;
