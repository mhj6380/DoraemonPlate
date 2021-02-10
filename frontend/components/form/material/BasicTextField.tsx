import styled from "styled-components";
import { useField, FieldAttributes} from "formik"
import { TextField } from "@material-ui/core";

const FormInputWrapper = styled.div`
  width:100%;
  input{
    width:100% !important;
  }
`;

const BasicTextField: React.FC<FieldAttributes<{}>> = ({
  placeholder, 
  ...rest
}) => {
  const [field, meta] = useField<{}>(rest);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <FormInputWrapper>
        <TextField
          placeholder={placeholder}
          {...field}
        helperText={errorText}
        fullWidth
          error={!!errorText}
          />
      </FormInputWrapper>
  );
};

export default BasicTextField;