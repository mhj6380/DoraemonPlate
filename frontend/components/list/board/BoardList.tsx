import React from 'react';
import styled from 'styled-components';
import { FiHeart,FiBookmark } from "react-icons/fi";
import { AiOutlineShareAlt } from 'react-icons/ai';


interface IBoardItem {
  title: string;
  tags: string;
  wr_datetime: string;
  like_count: number;
  share_count: number;
  scrab_count: number;
}

const BoardListWrapper = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-flow: row wrap;
  background:#F6F6F6;
`;
const BoardListItemWrapper = styled.div`
  position:relative;
  width:100%;
  paddin:10px;
  display:flex; 
  flex-flow: row wrap;
  border-top:1px solid #e3e3e3;
  border-bottom:1px solid #e3e3e3;
  margin-bottom:10px;
  background:#fff;

  .tile_aside{
    width:30px; height:100%;
    text-align: center;
    border-right:1px solid #e3e3e3;
    display:flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;    
    color :#00cccc;
    span{
      color :#00cccc;
      font-size:12.5px;
      display:block;
    }
  }
  .tile_main{
    padding:10px;
    width: calc(100% - 30px);
     
    .head_title{
       font-size: 18px;
        font-weight:500;
        cursor:pointer;
     }
  }

  .tag_wrap{
    margin-bottom:15px;
    .tag{
      padding:4px 10px;
      background: #eeeeee;
      margin-right:5px;
      border-radius:10px;
      font-size:12px;
    }
  }

  .date_wrap{color: #888888;font-size:12px; font-weight: 500;}
  .count_wrap{
    position:absolute;
    right:10px; 
    bottom:10px;
    .share_label{
      svg{margin-right:3px;}
      font-size:14px;
      color: #888888;
    }
    .scrab_label{
      svg{margin-right:3px;}
      font-size:14px;
      margin-left:10px;
      color: #888888;
    }
  }

  @media (min-width: 992px) {
    border:1px solid #e3e3e3;
    border-radius: 5px;

    .tile_aside{
      width:80px; 
      height:100%;
      border-right:1px solid #e3e3e3;
      position:relative;
      p{
        background:#F4F4F4;
        width:50px;height:80px;
        padding-top:20px;
        position:absolute;
        top:0;
        border-radius: 0 0 15px 15px;
        
      }
    }
    .tile_main{
      padding:15px 20px;
      width: calc(100% - 80px);
    }
  }

`;


const dummy = [
  {
    title: "쓰레기통 안에 로또 당첨 복권 소유 권한은 누구한테 있나요?",
    tags: "법률|생활",
    wr_datetime: "2021-01-09 12:55:00",
    like_count: 291,
    share_count: 38,
    scrab_count: 22
  },
  {
    title: "쓰레기통 안에 로또 당첨 복권 소유 권한은 누구한테 있나요?",
    tags: "법률|생활",
    wr_datetime: "2021-01-09 12:55:00",
    like_count: 291,
    share_count: 38,
    scrab_count: 22
  },{
    title: "쓰레기통 안에 로또 당첨 복권 소유 권한은 누구한테 있나요?",
    tags: "법률|생활",
    wr_datetime: "2021-01-09 12:55:00",
    like_count: 291,
    share_count: 38,
    scrab_count: 22
  },{
    title: "쓰레기통 안에 로또 당첨 복권 소유 권한은 누구한테 있나요?",
    tags: "법률|생활",
    wr_datetime: "2021-01-09 12:55:00",
    like_count: 291,
    share_count: 38,
    scrab_count: 22
  },{
    title: "쓰레기통 안에 로또 당첨 복권 소유 권한은 누구한테 있나요?",
    tags: "법률|생활",
    wr_datetime: "2021-01-09 12:55:00",
    like_count: 291,
    share_count: 38,
    scrab_count: 22
  },{
    title: "쓰레기통 안에 로또 당첨 복권 소유 권한은 누구한테 있나요?",
    tags: "법률|생활",
    wr_datetime: "2021-01-09 12:55:00",
    like_count: 291,
    share_count: 38,
    scrab_count: 22
  },
];

const BoardList = () => {
  return (
    <BoardListWrapper>
      {dummy.map((item:IBoardItem):JSX.Element => (
        <BoardListItem item={item}/>
      ))}
    </BoardListWrapper>
  )
}

const BoardListItem = ({ item }):JSX.Element => {
  return (
    <BoardListItemWrapper>
      <div className='tile_aside'>
        <p>
          <FiHeart />
          <span>{item.like_count}</span>
        </p>
      </div>
      <div className='tile_main'>
        <p className="head_title">{item.title}</p>
        <div className="tag_wrap">
          {item.tags.split("|").map((item: string) => (
            <span className='tag'>{item}</span> 
          ))}
        </div>
        <div className='date_wrap'>{item.wr_datetime}</div>
        <div className='count_wrap'>
          <span className='share_label'><AiOutlineShareAlt />{item.share_count}</span>
          <span className='scrab_label'><FiBookmark />{item.scrab_count}</span> 
        </div>
      </div>
    </BoardListItemWrapper>
  )
}

export default BoardList;
