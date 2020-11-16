import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { Formik, useFormikContext, FormikProps } from "formik"
import { Canvas } from "react-three-fiber"
import { Vector3 } from "three"
import { object, string } from "yup"

import Blob from "../../../webgl/blob"
import { StyledContainer, StyledFlex } from "../../styled-utils"
import Button from "../../../button"
import { Provider, ReactReduxContext } from "react-redux"

const StyledForm = styled.form`
  position: relative;
  z-index: 1;
  width: 100%;
  /* max-width: 600px; */
  border-radius: 8px;
  color: #fff;
  /* height: fit-content; */
`

const StyledLabel = styled.label`
  font-size: 15px;
  font-weight: 700;
  margin-left: 20px;
  margin-bottom: 12px;
  display: block;
  transition: all 0.3s;
`

const StyledInput = styled.input<{ isInvalid?: boolean }>`
  font-size: 15px;
  font-family: inherit;
  color: inherit;
  padding: 15px 20px;
  border: none;
  background: transparent;
  border-bottom: ${({ isInvalid }) =>
    isInvalid
      ? `2px solid rgba(236, 46, 255, 1)`
      : `2px solid rgba(255, 255, 255, 1)`};
  width: 100%;
  display: block;
  resize: vertical;

  transition: box-shadow 0.3s, border-bottom 0.3s, color 0.3s;

  &:focus {
    outline: none;
    border-bottom: ${({ isInvalid }) =>
      isInvalid
        ? `2px solid rgba(236, 46, 255, 1)`
        : `2px solid rgba(0, 255, 184, 1)`};
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`

const StyledTextArea = StyledInput.withComponent("textarea")

const StyledFormGroup = styled.div`
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &:hover input,
  &:hover textarea {
    outline: none;
  }
`

const FormButton = styled(Button)<{ isInvalid?: boolean }>`
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 1);
  color: rgba(255, 255, 255, 1);

  transition: background 0.4s;

  &:hover,
  &:focus {
    outline: none;
    background: ${({ isInvalid }) =>
      isInvalid ? `rgba(236, 46, 255, 0.4)` : `rgba(0, 255, 184, 0.4)`};
  }
`

const StyledContactContent = styled.div`
  width: 40%;
  min-width: 450px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
`

const StyledBlobContainer = styled.div`
  display: inline-block;
  width: 120px;
  height: 600px;
`

const Lights: FunctionComponent = () => {
  return (
    <group>
      <ambientLight intensity={0.2} />
      <directionalLight
        intensity={2}
        position={[0, -20, 10]}
        color={0x591515}
      />
      {/* <pointLight intensity={1.2} position={[-6, 3, -6]} color="#ffcc77" /> */}
      <pointLight intensity={0.3} position={[6, 3, 6]} color={0x0fa} />
      {/* <pointLight intensity={1.5} position={[6, 3, 6]} color="#0b1118" /> */}
    </group>
  )
}

const BlobScene: FunctionComponent = () => {
  const { touched, errors, values, initialValues } = useFormikContext<
    FormValues
  >()
  return (
    <ReactReduxContext.Consumer>
      {({ store }) => (
        <Canvas
          camera={{
            zoom: 1,
            position: [0, 0, 10],
          }}
        >
          <Provider store={store}>
            <Blob
              position={new Vector3(0, 6, 0)}
              isInvalid={!!(touched.fullName && errors.fullName)}
              isModified={values.fullName !== initialValues.fullName}
              segments={15}
              sizeFactor={0.8}
              wireframe
            />
            <Blob
              position={new Vector3(0, 3, 0)}
              isInvalid={!!(touched.email && errors.email)}
              isModified={values.email !== initialValues.email}
              segments={15}
              sizeFactor={0.8}
              wireframe
            />
            <Blob
              position={new Vector3(0, 0, 0)}
              isInvalid={!!(touched.message && errors.message)}
              isModified={values.message !== initialValues.message}
              segments={15}
              sizeFactor={0.8}
              wireframe
            />
            {/* <Blob
              position={new Vector3(0, 3, -150)}
              isInvalid={!!(touched.fullName && errors.fullName)}
              isModified={values.fullName !== initialValues.fullName}
              wireframe
            />
            <Blob
              position={new Vector3(2, 1, -100)}
              isInvalid={!!(touched.email && errors.email)}
              isModified={values.email !== initialValues.email}
              wireframe
            />
            <Blob
              position={new Vector3(-0.25, -0.75, 0)}
              isInvalid={!!(touched.message && errors.message)}
              isModified={values.message !== initialValues.message}
              wireframe
            /> */}
            <Lights />
          </Provider>
        </Canvas>
      )}
    </ReactReduxContext.Consumer>
  )
}

interface FormValues {
  fullName: string
  email: string
  message: string
}

const Form: FunctionComponent<FormikProps<FormValues>> = ({
  getFieldProps,
  handleSubmit,
}) => {
  const { touched, errors, isValid } = useFormikContext<FormValues>()

  return (
    <StyledForm
      data-netlify="true"
      method="post"
      // netlify-honeypot="bot-field"
      name="contact"
      onSubmit={handleSubmit}
    >
      {/* <input type="hidden" name="form-name" value="contact" /> */}
      <StyledFormGroup>
        <StyledLabel htmlFor="fullName">Full name</StyledLabel>
        <StyledInput
          {...getFieldProps("fullName")}
          type="text"
          placeholder="Full name"
          name="fullName"
          isInvalid={!!(touched.fullName && errors.fullName)}
        />
      </StyledFormGroup>
      <StyledFormGroup>
        <StyledLabel htmlFor="email">Email address</StyledLabel>
        <StyledInput
          {...getFieldProps("email")}
          type="email"
          placeholder="Email address"
          name="email"
          isInvalid={!!(touched.email && errors.email)}
        />
      </StyledFormGroup>
      <StyledFormGroup>
        <StyledLabel htmlFor="message">Message</StyledLabel>
        <StyledTextArea
          {...getFieldProps("message")}
          name="message"
          rows={5}
          cols={33}
          placeholder="Say hello!"
          isInvalid={!!(touched.message && errors.message)}
        />
      </StyledFormGroup>
      <FormButton type="submit" isInvalid={!isValid}>
        Send
      </FormButton>
    </StyledForm>
  )
}

const encode = (data: { [key: string]: any }) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Contact = () => {
  return (
    <StyledContainer>
      <h2>SAY HELLO</h2>
      <Formik<FormValues>
        initialValues={{
          fullName: "",
          email: "",
          message: "",
        }}
        validationSchema={object<FormValues>({
          fullName: string().required("Required"),
          email: string().email("Invalid email address").required("Required"),
          message: string().required("Required"),
        })}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...values }),
          })
            .then(() => {
              resetForm()
            })
            .catch(() => {
              alert("Error")
            })
            .finally(() => setSubmitting(false))
        }}
      >
        {formik => (
          <StyledFlex justifyContent="left">
            <StyledBlobContainer>
              <BlobScene />
            </StyledBlobContainer>
            <StyledContactContent>
              <Form {...formik} />
            </StyledContactContent>
          </StyledFlex>
        )}
      </Formik>
    </StyledContainer>
  )
}

export default Contact
