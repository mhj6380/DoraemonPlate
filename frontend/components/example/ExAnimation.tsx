import styled from "styled-components";
import { useRouter } from 'next/router';
import { Transition, TransitionGroup } from 'react-transition-group'; 

const ExAnimationWrapper = styled.div` 
  width:100%;
  height:100%;
  display:flex;
  flex-flow: row wrap;

`;

interface Props { 

}

const ExAnimation = ({  }:Props):JSX.Element=> { 
  const Router = useRouter();

  return (
    <ExAnimationWrapper> 
      {/* <TransitionGroup>
        <Transition
                  key={Router.pathname}
                  // appear={true}
                  // onEnter={(node, appears) => play(pathname, node, appears)}
                  // onExit={(node, appears) => exit(node, appears)}
                  timeout={{enter: 750, exit: 150}}
        >
          <div>HELLOG</div>
        </Transition>
        </TransitionGroup> */}
    </ExAnimationWrapper> 
  )

}

export default ExAnimation; 