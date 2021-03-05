
import styled from "styled-components";

export const UserItemWrapper = styled.div`
width:100%;
display:flex;
flex-flow: row wrap;
padding: 7px 7px 0 7px;
cursor:pointer;

:hover{
  background: #fafafa;
}

.avatar{
  width:70px;
  height:70px;
  display:flex;
  justify-content: center;
  // margin-top:10px;
  img{width:50%; height:50%;object-fit:cover; border-radius:50%;}
  .anonimous{
    width:50%;
    height:50%;
    font-size:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#359cdb;
    color: #fff;
    border-radius:50%;
  }
}
.info{
  width: calc(100% - 70px);
  padding:3px 10px;
  

  .nickname{
    font-size:16px;
    font-weight:700;
    margin-bottom:4px;
  }
  .about{
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* 라인수 */
    -webkit-box-orient: vertical;
    word-wrap:break-word; 
    line-height: 1.2em;
    height: 30px; 
  }
}



`;

export const ExPersonalChatWrapper = styled.div`   
width:100%;
height:100%;
display:flex;
flex-flow: row wrap;

`;

export const PersonalList = styled.div`
background: #fff;
width: 100%;

@media (min-width: 992px) { 
  padding-right:15px;
  width: 50%; 
  max-height:600px;
  overflow-y: scroll;
}
`; 

export const PChatItemWrapper = styled.div`
width: 100%;
padding: 7px 7px 0 7px;
display:flex;
flex-flow: row wrap;
position:relative;
transition: all .3s;
cursor:pointer;


:hover{
  background: #fafafa;
  .time_box{
    display:none;
  }
  .option{
    display:block;
    color: grey;
  }
}
.option{
  position:absolute;
  top:10px;
  right:10px;
  font-size:20px;
  display:none;
}

.option_detail{
  width:140px;
  background:#fff;
  position:absolute;
  right:5px;
  top:5px;
  font-size:14px;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  z-index:99;
  ul{
    width:100%;
    li{
        padding:10px;
        cursor: pointer;
        :hover{
          background:	#0080ff;
          color: #fff;
        }
    }
  }
}

.avatar{
  width:70px;
  height:70px;
  display:flex;
  justify-content: center;
  // margin-top:10px;
  img{width:50%; height:50%;object-fit:cover; border-radius:50%;}
  .anonimous{
    width:50%;
    height:50%;
    font-size:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#359cdb;
    color: #fff;
    border-radius:50%;
  }
}
.info{
  width: calc(100% - 70px);
  padding:3px 10px;
  

  .room_name{
    font-size:16px;
    font-weight:700;
    margin-bottom:4px;
  }
  .last_msg{
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* 라인수 */
    -webkit-box-orient: vertical;
    word-wrap:break-word; 
    line-height: 1.2em;
    height: 30px; 
  }
  .time_box{
    font-size:12px; 
    position:absolute;
    right:10px;
    top:10px;
    color:grey;
  }
}
`;  


export const UserList = styled.div`
width:100%;
margin-top:30px;
@media (min-width: 992px) { 
  width: 50%; 
  margin-top:0px;
  padding-left:15px;
  max-height:600px;
overflow-y: scroll;
}
`;


export const SectionTitle = styled.div`
width:100%;
font-size:17px;
font-weight:700;
margin-bottom:20px;
`;


export const ExGroupChatWrapper = styled.div` 
  width:100%;
  height:100%;
  display:flex;
  flex-flow: row wrap;
  .groups{
    width:100%;
    max-width:550px;
    margin: 0 auto;
    li{
      width:100%;
      
      text-align: center;
      background: #1a1a1a;
      margin-bottom:10px;
      a{
        display:block;
        width:100%;
        line-height:40px;
        color: #fff;
      }
    }
  }

`;