import React from 'react';
 import { Formik, Field, Form, ErrorMessage } from 'formik';
 
  const SignupForm  =({fn, id, status}) =>  (
    <div>
    <Formik
      initialValues={{
        name: 'mochi',
      }}
      onSubmit={async (values) => {
        // console.log('defaultvalue', status);
        if(values.status.lenght === 0) alert('select a status');
        await fn(id, values.status);
    

      }}
    >


{({values})=> (
       <Form>
       <label htmlFor="colors">{values.status}</label>
          <Field name="status" as="select" className="my-select">
            <option value=""></option>
            <option value="Not Contacted">Not Contacted</option>
            <option value="Contacted">Contacted</option>
            <option value="Responded">Responded</option>
            <option value="Meeting">Meeting</option>
            <option value="Closed">Closed</option>
          </Field>
        <ErrorMessage name="status" />
         <button type="submit">Change status</button>
       </Form>
       )}
    </Formik>
  </div>

   );

  export default SignupForm;