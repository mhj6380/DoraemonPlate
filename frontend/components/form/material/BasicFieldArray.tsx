import { FieldArray } from "formik"; 
import styled from 'styled-components';
import BasicTextField from "./BasicTextField"; 
import BasicCheckbox from "./BasicCheckbox";  
import { MdCancel } from 'react-icons/md';

const FieldTile = styled.div`
  width:100%;
  padding:15px 30px;
  border 1px solid #1a1a1a;
  margin-bottom:15px;
  .toolbox{
    width:100%;
    position: relative;
    height:40px;
    .title{
      font-size:20px;
    }
    .remove{
      background:none;
      position:absolute;
      right:0;
      top:-3.5px;
      color: #ff1d8e;
      font-size: 30px;
    }
  }
`;

const AddItemBtn = styled.button` 
  width:100%;
  height:40px;
`;

const BasicFieldArray = ({ datas }) => {
  return (

    <FieldArray name="friends">
    {({ remove, push }) => ( 
      <div>
        {datas.length > 0 &&
          datas.map((friend, index) => ( 
            <FieldTile>
              <div className="toolbox">
                <div className="title">Item_{index}</div>
                <button
                  type="button"
                  className="remove"
                  onClick={() => remove(index)}
                >
                  <MdCancel/>
                </button>
              </div>
 
              <BasicTextField name={`friends.${index}.name`} />
              <BasicTextField name={`friends.${index}.email`} />
              {/* {JSON.stringify(friend)} */}
              <BasicCheckbox name={`friends.${index}.isCheck`} value='on' label="React" type="checkbox" /> 
              <div>
                { JSON.stringify(friend)}
              </div>
            </FieldTile>
          ))}
        <AddItemBtn
          type="button"
          className="secondary"
          onClick={() => push({ name: '', email: '', isbool:false })}
        >
          Add Item
        </AddItemBtn> 
      </div>
    )}
  </FieldArray>

  )
}


export default BasicFieldArray; 