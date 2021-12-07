import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

export const FormContact = () => {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Muy corto!')
      .max(50, 'Demasiado largo!')
      .required('El nombre es requerido!'),
    subject: Yup.string()
      .min(2, 'Muy corto!')
      .max(100, 'Demasiado largo!')
      .required('El asunto es requerido!'),
    email: Yup.string()
      .email('Correo Electrónico invalido!')
      .required('El correo electrónico es requerido!'),
    phone: Yup.string()
      .matches(phoneRegExp, 'El número no es valido!')
      .required('El número es requerido!'),
    message: Yup.string()
      .min(10, 'Muy corto!')
      .max(200, 'Demasiado largo!')
      .required('El mensaje es requerido!')
  })

  const toggleSubmit = (values) => {
    console.log(values)
  }

  return (
      <Formik
        initialValues={{
          name: "",
          subject: "",
          email: "",
          phone: "",
          message: "",
        }}
        validationSchema={validationSchema}
        onSubmit={toggleSubmit}
      >
          <Form className="FormContact">
            <div className="input-box">
              <label>Nombre</label>
              <Field id="name" name="name" placeholder="Ingrese su nombre..." className="input"/>
              <ErrorMessage name="name">
                {(error) => <div className="alert">{error}</div>}
              </ErrorMessage>
            </div>
            <div className="input-box">
              <label>Asunto</label>
              <Field id="subject" name="subject" placeholder="Ingrese el asunto..." className="input" />
              <ErrorMessage name="subject">
                {(error) => <div className="alert">{error}</div>}
              </ErrorMessage>
            </div>
            <div className="input-box">
              <label>Correo electrónico</label>
              <Field id="email" name="email" placeholder="Ingrese  su correo electrónico..." className="input"/>
              <ErrorMessage name="email">
                {(error) => <div className="alert">{error}</div>}
              </ErrorMessage>
            </div>
            <div className="input-box">
              <label>Celular</label>
              <Field id="phone" name="phone" placeholder="Ingrese su número de celular..." className="input"/>
              <ErrorMessage name="phone">
                {(error) => <div className="alert">{error}</div>}
              </ErrorMessage>
            </div>
            <div className="input-box">
              <label>Mensaje</label>
              <Field as="textarea" id="message" name="message" placeholder="Ingrese el mensaje..." className="input"/>
              <ErrorMessage name="message">
                {(error) => <div className="alert">{error}</div>}
              </ErrorMessage>
            </div>
            <input type="submit" className="btn primary" />
          </Form>
      </Formik>
  );
};
