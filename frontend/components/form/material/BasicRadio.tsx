import { useField, FieldAttributes} from "formik" 
import { FormControlLabel, Radio } from "@material-ui/core";

type RadioProps = { label: string } & FieldAttributes<{}>;

const LabeledRadio: React.FC<RadioProps> = ({ label, ...rest }) => {
  const [field,] = useField(rest);
  return (
    <FormControlLabel control={<Radio />} label={label} {...field} />
  )
} 

export default LabeledRadio;