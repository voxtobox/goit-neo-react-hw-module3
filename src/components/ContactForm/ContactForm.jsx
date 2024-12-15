import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

export default function ContactForm({ onSubmit }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Required')
      .min(3, 'Too short!')
      .max(50, 'Too long!'),
    number: Yup.string()
      .required('Required')
      .min(3, 'Too short!')
      .max(50, 'Too long!'),
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field name="name" id={nameFieldId} />
        <ErrorMessage className={css.error} name="name" component="span" />
        <br />
        <label htmlFor={numberFieldId}>Number</label>
        <Field name="number" id={numberFieldId} />
        <ErrorMessage className={css.error} name="number" component="span" />
        <br />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
