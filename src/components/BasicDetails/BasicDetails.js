import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import {uniqBy} from 'lodash';

const FormBox = styled.div`
display:flex;
flex-direction:column;
padding:0.5rem 0;
`;

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

const BasicDetails = ( {data,handleStateChange,handleCityChange,cities,history} ) => {
   return (<div>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        history.push('/checker');
      }}
    >
      {({ errors, touched, handleChange }) => (
        <Form name="basic-details">
        <FormBox>
        <label for="fname">First Name</label>
        <Field name="firstName" />
        {errors.firstName && touched.firstName ? (
          <div>{errors.firstName}</div>
        ) : null}
        </FormBox>
        <FormBox>
        <label for="lname">Last Name</label>
        <Field name="lastName" />
        {errors.lastName && touched.lastName ? (
          <div>{errors.lastName}</div>
        ) : null}
        </FormBox>

        <FormBox>
        <label for="email">Email</label>
        <Field name="email" type="email" />
        {errors.email && touched.email ? <div>{errors.email}</div> : null}
        </FormBox>

        <FormBox>
        <label for="mobile">Mobile</label>
        <Field name="mobile" type="mobile" />
        {errors.mobile && touched.mobile ? <div>{errors.mobile}</div> : null}
        </FormBox>

        <FormBox>
        <label for="state">State</label>
        <Field as="select" name="state" onChange={(e) => handleStateChange(e)}>
           {
               data && uniqBy(data,"State").map((value,key) => {
                   return <option value={value.State}>{value.State}</option>
               })
           }
        </Field>
        {errors.state && touched.state ? <div>{errors.state}</div> : null}
        </FormBox>

        <FormBox>
        <label for="city">City</label>
        <Field as="select" name="city" onChange={(e) => handleCityChange(e)}>
           {
               cities && cities.map((value,key) => {
                   return <option value={value.City}>{value.City}</option>
               })
           }
        </Field>
        {errors.city && touched.city ? <div>{errors.city}</div> : null}
        </FormBox>
    
        <FormBox><button type="submit">Submit</button>
        </FormBox>
        </Form>
      )}
    </Formik>
  </div>);
}


BasicDetails.propTypes = {
  children: PropTypes.node.isRequired
};

export default BasicDetails;
