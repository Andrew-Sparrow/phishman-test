import { useState } from 'react';

import './App.css';
import 'antd/dist/antd.min.css';
import { Row, Col, Table, Input, Button } from 'antd';
import {
  SearchOutlined,
  SettingOutlined,
  InfoCircleOutlined,
  LoadingOutlined
} from '@ant-design/icons';

const data = {
  "events": [
    {
      "key": 1,
      "ts": new Date('2021-09-15T07:47:01.121Z'),
      "level": 1,
      "message": "some comment"
    },
    {
      "key": 2,
      "ts": new Date("2022-09-15T07:47:01.121Z"),
      "level": 1,
      "message": "some message"
    },
    {
      "key": 3,
      "ts": new Date("2021-10-15T07:47:01.121Z"),
      "level": 1,
      "message": "some comment"
    },
    {
      "key": 4,
      "ts": new Date("2021-11-15T07:47:01.121Z"),
      "level": 3,
      "message": "another message"
    },
    {
      "key": 5,
      "ts": new Date("2021-01-15T07:47:01.121Z"),
      "level": 3,
      "message": "new text"
    },
    {
      "key": 6,
      "ts": new Date("2021-03-15T07:47:01.121Z"),
      "level": 1,
      "message": "simple article"
    },
    {
      "key": 7,
      "ts": new Date("2021-07-15T07:47:01.121Z"),
      "level": 1,
      "message": "text"
    },
    {
      "key": 8,
      "ts": new Date("2021-09-15T07:47:01.121Z"),
      "level": 1,
      "message": "big barabum"
    },
    {
      "key": 9,
      "ts": new Date("2018-10-15T07:47:01.121Z"),
      "level": 1,
      "message": "message_9"
    },
    {
      "key": 10,
      "ts": new Date("2022-09-15T07:47:01.121Z"),
      "level": 2,
      "message": "la la la"
    },
    {
      "key": 11,
      "ts": new Date("2019-09-15T07:47:01.121Z"),
      "level": 2,
      "message": "piu piu"
    }
  ]
};

const LevelRow = (level) => {
  const TYPE_LEVEL = {
    1: 'Debug',
    2: 'Info',
    3: 'Processing'
  }
  return (
    <Row gutter={16}>
      <Col span={4}>
        <p>{level}</p>
      </Col>
      <Col span={10}>
        <span>
          {TYPE_LEVEL[level]}
        </span>
      </Col>
      <Col span={10}>
        {level === 1 && < SettingOutlined />}
        {level === 2 && < InfoCircleOutlined />}
        {level === 3 && < LoadingOutlined />}
      </Col>
    </Row>
  )
}

const columns = [
  {
    title: 'ID',
    dataIndex: 'key',
    key: 'key',
    sorter: {
      compare: (a, b) => a.key - b.key,
      multiple: 1
    },
  },
  {
    title: 'TS - Date Event',
    dataIndex: 'ts',
    key: 'ts',
    render: (ts) => <span> {ts.toLocaleString()} </span>,
    sorter: {
      compare: (a, b) => b.ts - a.ts,
      multiple: 2
    }
  },
  {
    title: 'Level Event',
    dataIndex: 'level',
    key: 'level',
    render: (level) => LevelRow(level),
    sorter: {
      compare: (a, b) => a.level - b.level,
      multiple: 3
    },
    filters: [
      {
        text: 'Debug',
        value: 1
      },
      {
        text: 'Info',
        value: 2
      },
      {
        text: 'Processing',
        value: 3
      }
    ],
    onFilter: (value, record) => {
      return record.level === value;
    }
  },
  {
    title: 'Message',
    dataIndex: 'message',
    key: 'message',
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
      return (
        <>
          <Input
            placeholder='Search'
            onPressEnter={() => { confirm(); }}
            onBlur={() => { confirm(); }}
            value={selectedKeys[0]}
            onChange={(evt) => {
              setSelectedKeys(evt.target.value ? [evt.target.value] : []);
              confirm();
            }}
          />
          <Button
            type='primary'
            onClick={() => {
              confirm();
            }}
          >
            Search
          </Button>
          <Button
            type='danger'
            onClick={() => {
              clearFilters();
            }}
          >
            Reset
          </Button>
        </>
      )
    },
    filterIcon: () => { return <SearchOutlined /> },
    onFilter: (value, record) => {
      return record.message.toLowerCase().includes(value.toLowerCase());
    }
  }
];

function App() {
  const [dataSource, setDataSource] = useState(data.events);

  return (
    <div className="App">
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{
          pageSize: 5,
        }}
      />
    </div>
  );
}

export { App };
