import React from 'react';
import TransitionLayout from 'components/layout/TransitionLayout';
import BasicPageTitle from 'components/layout/pagetitle/BasicPageTitle';
import ExPersonalChat from 'components/example/ExPersonalChat';
import ExGroupChat from 'components/example/ExGroupChat';
// import { useChatState } from 'lib/providers/chatProvider';

const ChatPage = (): JSX.Element => {
  // const chat = useChatState();

  return (
    <>
      <TransitionLayout title="채팅" requiredLogin={true}>
        <BasicPageTitle
          title="채팅"
          description="여러개의 브라우저 창으로 테스트하시면 좋습니다."
        />
        <ExPersonalChat />
        <ExGroupChat />
      </TransitionLayout>
    </>
  );
};

export default ChatPage;
