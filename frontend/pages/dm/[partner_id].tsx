import React, { useEffect, useState } from 'react';
import TransitionLayout from 'components/layout/TransitionLayout';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useChatDispatch } from 'lib/providers/chatProvider';
import ChatList from 'components/chat/ChatList';
import ChatForm from 'components/chat/ChatForm';
// import { useChatState } from 'lib/providers/chatProvider';
import { TChatMessage } from 'types/chat';
import { useAuthState } from 'lib/providers/authProvider';
import dayjs from 'dayjs';
import useSWR from 'swr';
import { BACKEND_URL } from 'config';
import axios from 'axios';

const DirectMessageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  background: #ededed;
`;

interface Props {}

const DirectMessage = ({}: Props): JSX.Element => {
  const router = useRouter();
  const { partner_id } = router.query;
  const dispatch = useChatDispatch();
  const [message, setMessage] = useState('');
  const me = useAuthState();
  // const chat = useChatState();
  const usersArr = [me.userInfo.user_id, partner_id];
  usersArr.sort();
  const room_key = `${usersArr[0]}:${usersArr[1]}`;

  const fetcher = async (url: string) => {
    const resp = await axios.get(url);
    return resp.data;
  };

  const { data, mutate, error } = useSWR(
    `${BACKEND_URL}/chat/message/${room_key}`,
    fetcher
  );

  const test = () => {
    // 기존 캐시 업데이트
    mutate(
      [
        ...data,
        {
          id: 16,
          room_key: '111857151517954391058:ttt24522',
          message: '파하',
          from_user: 'test',
          to_user: 'test',
          nickname: '',
          profile: '',
          insert_datetime: '2021-02-15T12:01:49.000Z',
          message_type: 'text',
          source: '',
        },
      ],
      false
    );
  };

  useEffect(() => {
    if (!partner_id) return;

    dispatch({ type: 'JOIN_ROOM', payload: room_key });
  }, []);

  const handleSendMessage = (e: any): void => {
    e.preventDefault();

    const { nickname, profile, user_id } = me.userInfo;

    const payload: TChatMessage = {
      room_key,
      nickname,
      profile,
      insert_datetime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      message,
      source: '',
      message_type: 'text',
      from_user: user_id,
      to_user: partner_id.toString(),
    };

    dispatch({ type: 'SEND_MESSAGE', payload });

    setMessage('');
  };

  if (!data) return <div>Loading</div>;
  if (error) return <div>ERROR</div>;
  return (
    <TransitionLayout title="채팅" requiredLogin={true}>
      <DirectMessageWrapper>
        {/* {JSON.stringify(data)} */}
        partner_id : {partner_id}
        {/* {JSON.stringify(me.userInfo.user_id)} */}
        <ChatList datas={data} />
        <ChatForm
          message={message}
          setMessage={setMessage}
          handleSendMessage={handleSendMessage}
        />
        <button onClick={test}>MUTATE</button>
      </DirectMessageWrapper>
    </TransitionLayout>
  );
};

export default DirectMessage;
