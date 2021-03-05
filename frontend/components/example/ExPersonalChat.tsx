import React, { useState,useEffect } from 'react';
import { TRoom } from "types/chat"; 
import { TUser } from 'types/user';
import { FaUser } from 'react-icons/fa';
import { HiDotsHorizontal } from 'react-icons/hi';
import { dateFormet } from "globalFunction"; 
import dayjs from 'dayjs';
import { ExPersonalChatWrapper, PersonalList, PChatItemWrapper, UserList, SectionTitle,UserItemWrapper } from 'components/styled/example'; 
import axios from 'axios';
import { BACKEND_URL } from 'config';
import Link from 'next/link';
// seen 처리를 쿠키로 하면 어떨까?
// 채팅방 UI에 마지막으로 접속한 시간 (datetime) 을 기록해두었다가, 채팅방 목록의 last_datetime 과 비교하여 처리 (천잰가?) 
  

interface Props { 

}


interface PCItemProps { 
  readonly item: TRoom; 
}

interface PUserItem {
  readonly item: TUser;
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

const ExPersonalChat = ({ }: Props): JSX.Element => {
  
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    axios.get(`${BACKEND_URL}/auth`).then((res: any) => {
      setUsers(res.data); 
    })
  },[])

  return (
    <ExPersonalChatWrapper> 
      
      {personals.length === 0 && <p>No Data</p>}   
      <PersonalList>
          <SectionTitle>나의 채팅방 (0)</SectionTitle>
          {personals.map((item: TRoom) => (
            <PersonalChatItem key={item.id} item={item}/> 
          ))}  
      </PersonalList>

      <UserList>
        <SectionTitle>유저 목록 (0)</SectionTitle> 
        {users.map((item: TUser) => (
          <UserItem key={item.id} item={item}/>
        ))}
      </UserList>
    </ExPersonalChatWrapper> 
  )
}

const PersonalChatItem = ({ item }: PCItemProps): JSX.Element => {   
  
  const [openOpt, setOpenOpt] = useState(false);
  const itemRef = React.useRef(null); 

  const handleOpenOpt = () => {
    setOpenOpt(true); 
    return;
  }
  const handleCloseOpt = () => {
    setOpenOpt(false);
    return;
  }

  const useOutsideAlerter = (ref: any) => {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) { 
          setOpenOpt(false); 
        }
      } 
 
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
        
      };
    }, [ref]);
  };
  useOutsideAlerter(itemRef);
  

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
        {!openOpt && (
        <div className="time_box"> 
          { dateFormet(dayjs(item.lastDatetime).format('HH:mm'))} 
        </div> 
        )}
        <div className="option" onClick={ handleOpenOpt }>
          <HiDotsHorizontal />  
        </div>
        {openOpt && (<div ref={itemRef} className="option_detail">
                  <ul>
                    <li>채팅방 나가기</li>
                    <li onClick={handleCloseOpt}>취소</li>
                  </ul>
                </div>)}
      </div> 
    </PChatItemWrapper>
  );
}





const UserItem = ({ item }: PUserItem): JSX.Element => {    

  return (
    <UserItemWrapper> 
      
      <div className="avatar">
        { item.profile ? (<img src={item.profile}  alt='avatar'/>) : (<div className="anonimous"><FaUser /></div>)}
      </div>
      <div className="info"> 
        <Link href={`/dm/${item.user_id}`}>
        <a>
        <div className="nickname">{item.nickname}</div>
        <div className="about">{item.about}</div>
          </a>
        </Link>
        </div>
       
    </UserItemWrapper>
  );
}

export default ExPersonalChat;