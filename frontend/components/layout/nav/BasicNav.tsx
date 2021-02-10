import React,{useState} from "react";
import Link from 'next/link';
import styled from "styled-components";
import { RiMenu3Line } from "react-icons/ri";
 
const BasicNavigation = styled.ul`
  
  .menu_icon{
    padding:0 10px 10px 10px;
    font-size:25px;
    position:absolute;
    right:15px;
    top:0px;
    cursor:pointer;
  }
  .nav_list{
    transition: all 0.3s;
    position:fixed;
    top:0;
    right:-320px;
    width:300px;
    height:100vh;
    background:#fff;
  }
  .nav_list.active{
    right:0;
  }


  @media (min-width: 992px) { 
    .nav_list{
      width:auto;
      height:auto;
      position:absolute;
      right:20px;
      top:7px;
      line-height:40px;
      li{
        display:inline-block;
        a{
          padding: 0 10px;
          margin-right:20px;
        }
      }
    }
  }
  @media (min-width: 1200px) { 
  
  }
`;


const BasicNav = () => {
  const [open, setOpen] = useState(false); 

  const handleOpenNavi = () => {
    setOpen(true);
  }

  return (
    <BasicNavigation>
      <div className='menu_icon no_pc' onClick={handleOpenNavi}>   
        <RiMenu3Line/>
      </div>
      <ul className={"nav_list " + (open && 'active')}> 
        <li><Link href='/community'><a>커뮤니티</a></Link></li>
        <li><Link href='/board'><a>게시판</a></Link></li> 
        <li><Link href='/chat'><a>채팅</a></Link></li> 
        <li><Link href='/material'><a>UI/UX</a></Link></li>  
        <li><Link href='/adm'><a>관리자</a></Link></li>  
      </ul>
      
    </BasicNavigation> 
  )
}

export default BasicNav;