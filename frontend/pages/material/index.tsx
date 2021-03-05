import React from 'react';
import TransitionLayout from 'components/layout/TransitionLayout';
import BasicPageTitle from 'components/layout/pagetitle/BasicPageTitle';
import BasicTabs from 'components/tools/BasicTabs';
import ExSwiper from 'components/example/ExSwiper';
import ExForm from 'components/example/ExForm';
import ExAnimation from 'components/example/ExAnimation';
import ExDialog from 'components/example/ExDialog';
// import AppLayout from "../../components/layout/AppLayout";

const MaterialPage = (): JSX.Element => {
  const [focus, setFocus] = React.useState('swiper');

  const handleChangeFocus: any = (target: string) => {
    setFocus(target);
    return;
  };

  const tabArray = [
    { title: 'Swiper', key: 'swiper' },
    { title: 'Form', key: 'form' },
    { title: 'Animation', key: 'animation' },
    { title: 'Dialog', key: 'dialog' },
  ];
  return (
    <>
      <TransitionLayout title="UI/UX" requiredLogin={true}>
        <BasicPageTitle title="UI/UX" description="UI/UX 페이지 작업예정" />
        <BasicTabs
          tabArray={tabArray}
          focus={focus}
          handleChangeFocus={handleChangeFocus}
        />
        {focus === 'swiper' && (
          <>
            {' '}
            <h3>Swiper</h3> <ExSwiper />{' '}
          </>
        )}
        {focus === 'form' && (
          <>
            {' '}
            <h3>Form</h3> <ExForm />{' '}
          </>
        )}
        {focus === 'form' && (
          <>
            {' '}
            <h3>Form</h3> <ExForm />{' '}
          </>
        )}
        {focus === 'animation' && (
          <>
            {' '}
            <h3>Animation</h3> <ExAnimation />{' '}
          </>
        )}
        {focus === 'dialog' && (
          <>
            {' '}
            <h3>Dialog</h3> <ExDialog />{' '}
          </>
        )}
      </TransitionLayout>
    </>
  );
};

export default MaterialPage;
