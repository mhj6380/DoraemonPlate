import styled from "styled-components";
import { Formik, Form} from "formik"
import { Button } from "@material-ui/core";
import BasicTextField from "./material/BasicTextField"; 
import BasicCheckbox from "./material/BasicCheckbox"; 
import BasicRadio from "./material/BasicRadio"; 
import BasicFieldArray from "./material/BasicFieldArray";

const TestWrapper = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-flow: row wrap;
  form{width:100%;}
`;

interface Props { 

}

 
const Test = ({  }:Props):JSX.Element=> {
  
  return (
    <TestWrapper>
      <Formik initialValues={{ text: "", isbool: false, checks: [], nation: '', friends: [
    {
      name: '',
      email: '', 
      isCheck:'',
    },
  ], }}
        validate={values => {
          const errors: Record<string, string> = {} 
          // text에  !나 ? 가 들어가면 에러를 뿜는 예제 
          if (values.text.includes("!") || values.text.includes("?")) {  
            errors.text = "! or ? cannot be username" 
          }
          return errors;
        }}
        onSubmit={(data, { setSubmitting }) => {
              setSubmitting(true) 

              console.log(data)
        
              setSubmitting(false) 
            }}>

            { 
                ({ isSubmitting, values }) => (
                <Form> 
                      <div>
                      <BasicTextField name="text" />  
                    </div>
                    <div>
                      <BasicCheckbox name="checks" value="React" label="React" type="checkbox" />
                      <BasicCheckbox name="checks" value="Redux" label="Redux" type="checkbox" />
                      <BasicCheckbox name="checks" value="Vue" label="Vue" type="checkbox" />
                      <BasicCheckbox name="checks" value="MobX" label="MobX" type="checkbox" /> 
                    </div>
                    <div>
                      <div>
                        <BasicRadio name="nation" value="Korea" label="Korea" type="radio" /> 
                        <BasicRadio name="nation" value="Japan" label="Japan" type="radio" />
                        <BasicRadio name="nation" value="China" label="China" type="radio" />
                      </div> 
                    </div>

                    <h3>Upload Form</h3>   
                    
                    <h3>Dynamic Form</h3>  
                      <BasicFieldArray datas={values.friends} /> 
                      {/* {JSON.stringify(values)}  */}
                      <Button style={{border: "2px solid black"}} type="submit" color="default" disabled={isSubmitting} disableElevation disableRipple fullWidth>Submit</Button>
                </Form> 
                )  
              }

            </Formik>
    </TestWrapper>
  )

}

export default Test;