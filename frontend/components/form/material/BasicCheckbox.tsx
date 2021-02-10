import { useField, FieldAttributes} from "formik"
import { Checkbox, FormControlLabel } from "@material-ui/core";

type CheckboxProps = { label: string } & FieldAttributes<{}>;

const BasicCheckbox: React.FC<CheckboxProps> = ({ label, ...rest }) => { 
  const [field,] = useField(rest);
  return (
    <FormControlLabel control={<Checkbox />} label={label} {...field} />
  )
}

export default BasicCheckbox;