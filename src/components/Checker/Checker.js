import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { uniqBy } from 'lodash';
import { ChevronLeft, ChevronRight } from '@styled-icons/boxicons-solid'

const Container = styled.div`
position: absolute;
left: 50%;
top: 50%;
margin-top: -225px;
width: 49%;
height: 50%;
`;

const Label = styled.label`
position: absolute;
  display: inline-block;
  cursor: pointer;
  font-size: 1.5em;
  bottom: 0;
  width:5%;
  nth-child(odd){
    right: 120px;
  }
  nth-child(even){
    left: 120px;
  }
`;

const Section = styled.section
  `display: none;
height: 100%;
padding: 15px;
color: #fff;
background: #449DF5;
text-align: center;
& ${Label}:nth-child(odd) {
  right: 120px;
};
& ${Label}:nth-child(even) {
  left: 120px;
};
`;

const SectionTwo = styled(Section)`
background: grey;
`

const Heading = styled.h1
  `margin-bottom: 0;
  font-family: 'Nunito', sans-serif;
  font-weight: lighter;
  font-size: 2em;
`;

const Para = styled.p
  `width: 75%;
  margin: 0 auto;
  padding: 10px;
`;

const Icon = styled.i`
font-size: 6em !important;
  margin-top: 50px;
  margin-bottom: 25px;
  color: black;
`;

const Radio = styled.input`
&[type="radio"]{
  display:none;
}
&:checked + section {
  display:block;
}
`;

const SquareRadio = styled.div`
border: 1px solid black;
    margin: 2px;
    width: 40px;
    height: 40px;
    position: relative;
`;

const Checker = ({ history, questionData }) => {
  return (<div>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={values => {
        // same shape as initial values
        history.push('/checker');
      }}
    >
      {({ errors, touched, handleChange }) => (
        <Form name="basic-details">
          <Container>
            {
              questionData && questionData.map((each, index) => {
                return (<Fragment>
                  {
                    each.id === 1 && <Radio id={`rad${each.id}`}
                      value={each.id}
                      type="radio" name="rad" defaultChecked></Radio>
                  }
                  {
                    each.id > 1 && <Radio id={`rad${each.id}`} value={each.id} type="radio" name="rad"></Radio>
                  }
                  <Section>
                    <Heading>Question {each.id}</Heading>
                    <Para>{each.text}
                    <div class="custom-radios">
  <div>
    <input type="radio" id={`color-${each.id}`} name="color" class="color-3" value={`color-${each.id}`}/>
    <label for={`color-${each.id}`}>
      <span>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
      </span>
    </label>
    <span>Yes</span>

  </div>

  <div>
    <input type="radio" id={`colors-${each.id}`} name="color" class="color-4" value={`colors-${each.id}`}/>
    <label for={`colors-${each.id}`}>
      <span>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
      </span>
    </label>
    <span>No</span>
  </div>
</div>
                    
                    </Para>
                    
                    


                    <Label for={`rad${each.id + 1}`}><ChevronRight /></Label>
                    <Label for={`rad${each.id - 1}`}><ChevronLeft /></Label>
                  </Section>
                </Fragment>);
              })
            }
          </Container>
        </Form>
      )}
    </Formik>
  </div>);
}


Checker.propTypes = {
  children: PropTypes.node.isRequired
};

export default Checker;
