import React from 'react';
// import AppLayout from "components/layout/AppLayout";
import TransitionLayout from 'components/layout/TransitionLayout';
import BasicPageTitle from 'components/layout/pagetitle/BasicPageTitle';
import BoardList from 'components/list/board/BoardList';
import BoardTools from 'components/tools/BoardTools';
const BoardPage = (): JSX.Element => {
  return (
    <>
      <TransitionLayout title="게시판" requiredLogin={true}>
        <BasicPageTitle title="게시판" description="게시판 페이지 작업예정" />
        <BoardList />
        <BoardTools />
      </TransitionLayout>
    </>
  );
};

export default BoardPage;
