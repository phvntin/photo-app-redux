import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import Images from "constants/images";
import InputField from "custom-fields/InputField";
import RandomPhotoField from "custom-fields/RandomPhotoField";
import SelectField from "custom-fields/SelectField";
import { FastField, Form, Formik } from "formik";
import { Button, FormGroup, Label } from "reactstrap";

PhotoForm.propTypes = {};

function PhotoForm(props) {
  const initialValues = {
    title: "",
    categoryId: null,
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log("Submit: ", values)}
    >
      {(formikProps) => {
        // do sthing ...

        const { values, errors, touched } = formikProps;
        console.log({ values, errors, touched });

        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Eg: Wow nature ..."
            />

            <FastField
              name="categoryId"
              component={SelectField}
              label="Category"
              placeholder="What's your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            />

            <FastField
              name="photo"
              component={RandomPhotoField}
              label="Photo"
            />

            <FormGroup>
              <Button color="primary">Add to album</Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
