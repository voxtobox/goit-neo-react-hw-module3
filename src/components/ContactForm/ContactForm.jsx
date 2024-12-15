import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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
      <Form>
        <div>
          <label htmlFor={nameFieldId}>Name</label>
          <Field name="name" id={nameFieldId} />
          <ErrorMessage name="name" component="span"></ErrorMessage>
        </div>
        <div>
          <label htmlFor={numberFieldId}>Number</label>
          <Field name="number" id={numberFieldId} />
          <ErrorMessage name="number" component="span"></ErrorMessage>
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
