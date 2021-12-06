import React from "react";
import { Formik, Form, Field } from "formik";

export const FormContact = () => {
  return (
      <Formik
        initialValues={{
          name: "",
          subjet: "",
          email: "",
          phone: "",
          message: "",
        }}
      >
        <Form className="FormContact">
          <div className="input-box">
            <label>Nombre</label>
            <Field id="name" name="name" placeholder="Ingrese su nombre..." className="input"/>
          </div>
          <div className="input-box">
            <label>Asunto</label>
            <Field id="subjet" name="subjet" placeholder="Ingrese el asunto..." className="input" />
          </div>
          <div className="input-box">
            <label>Correo electrónico</label>
            <Field id="email" name="email" placeholder="Ingrese  su correo electrónico..." className="input"/>
          </div>
          <div className="input-box">
            <label>Celular</label>
            <Field id="phone" name="phone" placeholder="Ingrese su número de celular..." className="input"/>
          </div>
          <div className="input-box">
            <label>Mensaje</label>
            <Field id="message" name="mesagge" placeholder="Ingrese el mensaje..." className="input"/>
          </div>
          <input type="submit" className="btn primary" />
        </Form>
      </Formik>
  );
};
