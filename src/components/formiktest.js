
import React from 'react';
 import { Formik, Field, Form, ErrorMessage } from 'formik';
 import styles from '../styles/formikstyles.module.scss';

 
  const SignupForm  =({fn, id, status}) =>  (
    
    <div>
    <Formik
      initialValues={{
        status: status,
      }}
      onSubmit={async (values) => {
        if(values.status.lenght === 0) alert('select a status');
        await fn(id, values.status);
      }}
    >


{({values})=> (
       <Form>
          <Field name="status" as="select" className={styles.select}>
            <option value=""></option>
            <option value="Not Contacted">Not Contacted</option>
            <option value="Contacted">Contacted</option>
            <option value="Responded">Responded</option>
            <option value="Meeting">Meeting</option>
            <option value="Closed">Closed</option>
          </Field>
        <ErrorMessage name="status" />
         <button type="submit" >Update</button>
       </Form>
       )}
    </Formik>
  </div>

   );

  export default SignupForm;