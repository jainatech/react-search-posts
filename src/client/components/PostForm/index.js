import React from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const PostForm = (props) => {
  const {editItem,editPost} = props;
  return (
    <Formik
      enableReinitialize
      initialValues={{
          title: editItem.title,
          body: editItem.body                   
      }}
      validationSchema={Yup.object().shape({
          title: Yup.string()
              .required('Title is required'),
          body: Yup.string()
              .required('Body is required'),
      })}
      onSubmit={fields => {
          alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));
          const updatedData = { ...editItem, title: fields.title, body: fields.body }
          editPost(updatedData);
      }}
      >
      {({ errors, status, touched }) => (
          <Form>
            <div className="form-row">
                <div className="form-group col-11">
                    <label htmlFor="title">Title : </label>
                    <Field name="title" type="text" className={'form-control' + (errors.title && touched.title ? ' is-invalid' : '')} />
                    <ErrorMessage name="title" component="div" className="invalid-feedback" />
                </div>
                <div className="form-group col-11">
                    <label htmlFor="body">Body : </label>
                    <Field name="body" type="text" className={'form-control' + (errors.body && touched.body ? ' is-invalid' : '')} />
                    <ErrorMessage name="body" component="div" className="invalid-feedback" />
                </div>
            </div>
            <div className="form-group">
                <Button type="submit" className="btn btn-primary mr-2">Save</Button>
            </div>
          </Form>
      )}
    </Formik>
  );
}

PostForm.propTypes = {
  editItem: PropTypes.object,
  editPost: PropTypes.func
};

export default PostForm;