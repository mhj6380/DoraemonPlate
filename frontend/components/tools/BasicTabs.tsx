import { ReactElement } from 'react';
import styled from "styled-components";

const BasicTabsWrapper = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-flow: row wrap;
  margin-bottom:20px;
  div{
    padding:4px 10px;
    background: #ededed;
    margin-right:10px;
    cursor:pointer;
  }
  div.active{
    background: #1a1a1a;
    color: #fff;
  } 
`;

interface Test {
  key: string;
  title: string;
}
 
interface Props { 
  tabArray: Array<Test>;
  focus: string;
  handleChangeFocus: any; 
}

const BasicTabs = ({ tabArray, focus, handleChangeFocus }:Props):JSX.Element=> {
  
  return (
    <BasicTabsWrapper>  
      {tabArray.map((item: Test):ReactElement => ( 
        <div key={item.key} className={`tab ` + (focus === item.key && 'active')} onClick={ ()=>{handleChangeFocus(item.key)}}>{item.title}</div>
      ))}
    </BasicTabsWrapper>
  ) 

}
 
export default BasicTabs;