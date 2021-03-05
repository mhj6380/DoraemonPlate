import React from 'react';
import styled from 'styled-components';
import { TChatMessage } from 'types/chat';
import { FaUser } from 'react-icons/fa';
import { useAuthState } from 'lib/providers/authProvider';

const ChatListWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  min-height: 300px;
  padding: 30px 15px;

  .message_tile {
    width: 100%;
    min-height: 40px;
    display: flex;
    flex-flow: row wrap;
    margin-bottom: 10px;
    position: relative;
    .avatar {
      width: 50px;
      height: 50px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
      .anonimous {
        width: 100%;
        height: 100%;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #359cdb;
        color: #fff;
        border-radius: 50%;
      }
    }

    .message_info {
      width: calc(100% - 50px);
      padding: 10px;

      .nickname_span {
      }

      .message {
        display: inline-block;
        width: auto;
        background: #fff;
        padding: 10px;
        // min-width: 60px;
        max-width: 300px;
        border-radius: 10px;
      }
    }
  }

  .message_tile.my {
    .message_info {
      .message {
        position: absolute;
        right: 0;
        background: #00a2df;
        color: #fff;
      }
    }
  }
`;

interface Props {
  readonly datas: TChatMessage[];
}

const ChatList = ({ datas }: Props): JSX.Element => {
  const me = useAuthState();

  React.useEffect(() => {}, []);

  return (
    <ChatListWrapper>
      {datas.map((item: TChatMessage) => {
        //내가 보낸 메세지면 true
        const myMsg = item.from_user === me.userInfo.user_id;

        return (
          <div className={`message_tile ` + (myMsg && 'my')} key={item.id}>
            {/* {JSON.stringify(item)}  */}
            {!myMsg && (
              <div className="avatar">
                {item.profile ? (
                  <img src={item.profile} alt="avatar" />
                ) : (
                  <div className="anonimous">
                    <FaUser />
                  </div>
                )}
              </div>
            )}
            <div className="message_info">
              {!myMsg && <div className="nickname_span">{item.nickname}</div>}
              <div className="message text_message">{item.message}</div>
            </div>
          </div>
        );
      })}
    </ChatListWrapper>
  );
};

export default ChatList;
