import React from 'react';
import styled from 'styled-components';

const ListWrapper = styled.div`
  width:100%;
  
`;

const ListItemWrapper = styled.div`
  width:100%;

`;

interface CommunityItemIF {
  id: number;
  title: string;
}

interface ListItemProp {
  item: CommunityItemIF;
}

const dummy = [
  { id:1,title: '테스트' },
  { id:2,title: '테스트' }
]

const CommunityList = () => {
  return (
    <ListWrapper>
      {dummy.map((item:CommunityItemIF) => ( 
        <ListItem key={item.id} item={item}/> 
      ))}
    </ListWrapper>
  ) 
}

const ListItem = ({ item }:ListItemProp) => {  
  return (
    <ListItemWrapper> 
        <div className="row">
          <div className='col-6 col-sm-6 col-md-4'>{item.title}</div>
          <div className='col-6 col-sm-6 col-md-4'>{item.title}</div> 
        </div>
    </ListItemWrapper>  
  )   
}
 

export default CommunityList;
