import { ErrorMessage } from "formik";
import PropTypes from "prop-types";
import Select from "react-select";
import { FormFeedback, FormGroup, Label } from "reactstrap";

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array,
};

SelectField.defaultProps = {
  label: "",
  placeholder: "",
  disabled: false,
  options: [],
};

function SelectField(props) {
  const { field, form, label, placeholder, disabled, options } = props;

  const { name, value, onBlur } = field;

  const { errors, touched } = form;
  const showErrors = errors[name] && touched[name];

  const selectedOption = options.find((option) => option.value === value);
  console.log("selectedOption: ", selectedOption);

  const handleSelectedOptionChange = (selectedOption) => {
    const selectedValue = selectedOption
      ? selectedOption.value
      : selectedOption;

    const changeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    };
    field.onChange(changeEvent);
  };

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}

      <Select
        id={name}
        name={name}
        value={selectedOption}
        onChange={handleSelectedOptionChange}
        onBlur={onBlur}
        placeholder={placeholder}
        isdisabled={disabled.toString()}
        options={options}
        className={showErrors ? "is-invalid" : ""}
      />

      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

export default SelectField;
