import { useState } from 'react';
import styled from 'styled-components';
import { Table, Popconfirm, Button, message } from 'antd';

const DataTableWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  table {
    width: 100%;
  }
`;

const data = [];

for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: i,
    address: `London, Park Lane no. ${i}`,
  });
}

interface Props {}

const DataTable = ({}: Props): JSX.Element => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a: any, b: any) => a.name - b.name,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      sorter: (a: any, b: any) => a.address - b.address,
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => (
        <Popconfirm
          placement="topRight"
          title="정말 삭제 하시겠습니까?"
          onConfirm={handleDelete}
          okText="예"
          cancelText="아니오"
        >
          <Button type="primary" ghost>
            삭제
          </Button>
        </Popconfirm>
      ),
    },
  ];

  const handleDelete = () => {
    message.info('삭제가 완료되었습니다.');
  };

  const onSelectChange = (selectedRowKeys: any) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  return (
    <DataTableWrapper>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        style={{ width: '100%' }}
      />
    </DataTableWrapper>
  );
};

export default DataTable;
