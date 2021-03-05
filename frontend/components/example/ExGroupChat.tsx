import Link from 'next/link'; 
import { ExGroupChatWrapper } from 'components/styled/example';

interface Props { 

} 

const ExGroupChat = ({  }:Props):JSX.Element=> {
  
  return (
    <ExGroupChatWrapper> 
      <ul className="groups">  
        <li><Link href="/chat/group01"><a>1번방</a></Link></li> 
        <li><Link href="/chat/group02"><a>2번방</a></Link></li>  
        <li><Link href="/chat/group03"><a>3번방</a></Link></li> 
        <li><Link href="/chat/group04"><a>4번방</a></Link></li> 
      </ul>
    </ExGroupChatWrapper>
  ) 

}

export default ExGroupChat;