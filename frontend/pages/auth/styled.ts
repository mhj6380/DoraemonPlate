import styled from "styled-components";

export const Title = styled.div`
width: 100%;
font-size: 30px;
font-weight: 700;
`;
export const ViewWrapper = styled.form`
display: flex;
flex-flow: row wrap;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
padding: 10px;
background: #ededed;
`;
export const LoginFormWrapper = styled.div`
position: relative;
width: 500px;
height: auto;
background: white;
border-radius: 5px;
padding: 60px 25px;
@media (min-width: 768px) {
  padding: 80px 40px;
}
@media (min-width: 1024px) {
  padding: 90px 60px;
}
`;

export const NoAccount = styled.div`
width: 100%;
position: absolute;
text-align: center;
bottom: -35px;
left: 0;
`;

export const CheckboxWrapper = styled.div`
font-size: 14px;
input {
  margin-left: 6px;
  position: relative;
  top: 2px;
}
`;

export const ForgotPassword = styled.div`
width: 100%;
text-align: center;
margin-top: 20px;
`;



export const FieldWrapper = styled.div`
  width: 100%;
  padding: 5px;
  margin-bottom: 15px;
`;
 


export const SubmitBtn = styled.button`
  box-shadow: none;
  border: none;
  width: 100%;
  line-height: 45px;
  background: #0abab5;
  color: #fff;
  font-size: 16px;
  margin-top: 30px;

  @media (min-width: 768px) {
    font-size: 17px;
  }
  @media (min-width: 1024px) {
    line-height: 50px;
    font-size: 18px;
  }
`;


export const ValidationAlert = styled.div`
  color: red;
  font-size:13px;
  position:relative;
  top:-15px;
  padding-left:10px;
`;