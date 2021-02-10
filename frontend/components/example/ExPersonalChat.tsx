import styled from "styled-components";
import { TRoom } from "../../types/chat"; 
import { FaUser } from 'react-icons/fa';
import { dateFormet } from "../../globalFunction";
import dayjs from 'dayjs';

 
const ExPersonalChatWrapper = styled.div` 
  width:100%;
  height:100%;
  display:flex;
  flex-flow: row wrap;
`;

const PersonalList = styled.div`
  width: 100%;

`; 

const PChatItemWrapper = styled.div`
  width: 100%;
  padding: 7px;
  display:flex;
  flex-flow: row wrap;
  position:relative;
  .avatar{
    width:70px;
    height:70px;
    display:flex;
    justify-content: center;
    align-items: center;
    img{width:90%; height:90%;object-fit:cover; border-radius:10px;}
    .anonimous{
      width:90%;
      height:90%;
      font-size:30px;
      display:flex;
      justify-content:center;
      align-items:center;
      background:#359cdb;
      color: #fff;
      border-radius:10px;
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
      right:0;
      top:10px;
      color:grey;
    }
  }
`;  


interface Props { 

}


interface PCItemProps { 
  readonly item: TRoom; 
}
// dateFormet
const personals: TRoom[] = [ 
  {
    id: 0,
    roomKey: 'roombot1',
    roomName: '챗봇01',
    lastMsg: '반갑습니다 ^^',
    lastDatetime: '2021-02-10 14:00:00',
    seen: false,
    profile:''
  },
  {
    id: 0,
    roomKey: 'roombot2',
    roomName: '챗봇02',
    lastMsg: '반갑습니다 ^^',
    lastDatetime: '2021-02-10 14:00:00',
    seen: false,
    profile:'https://images.mypetlife.co.kr/content/uploads/2019/09/04222847/dog-panting-1024x683.jpg'
  },
  {
    id: 0,
    roomKey: 'roombot3',
    roomName: '챗봇03', 
    lastMsg: '반갑습니다 ^^ 반갑습니다 ^^ 반갑습니다 ^^ 반갑습니다 ^^ 반갑습니다 ^^ 반갑습니다 ^^ 반갑습니다 ^^ 반갑습니다 ^^ 반갑습니다 ^^ 반갑습니다 ^^ 반갑습니다 ^^ 반갑습니다 ^^ 반갑습니다 ^^ 반갑습니다 ^^ 반갑습니다 ^^ 반갑습니다 ^^ 반갑습니다 ^^ 반갑습니다 ^^ ',
    lastDatetime: '2021-02-10 14:00:00',
    seen: false,
    profile:'https://images.mypetlife.co.kr/content/uploads/2019/09/04222847/dog-panting-1024x683.jpg'
  }

];

const ExPersonalChat = ({  }:Props):JSX.Element=> {
  
  return (
    <ExPersonalChatWrapper> 
      {personals.length === 0 && <p>No Data</p>}   
      <PersonalList>
          {personals.map((item: TRoom) => (
            <PersonalChatItem item={item}/>
          ))}  
      </PersonalList>
    </ExPersonalChatWrapper> 
  )

}



const PersonalChatItem = ({ item }: PCItemProps): JSX.Element => {   
  return (
    <PChatItemWrapper>
      <div className="avatar">
        { item.profile ? (<img src={item.profile}  alt='avatar'/>) : (<div className="anonimous"><FaUser /></div>)}
      </div>
      <div className="info"> 
        <div className="room_name">
          {item.roomName}
        </div>
        <div className="last_msg">
          {item.lastMsg} 
        </div>
        <div className="time_box"> 
          { dateFormet(dayjs(item.lastDatetime).format('HH:mm'))} 
        </div> 
      </div> 
    </PChatItemWrapper>
  );
}


export default ExPersonalChat;