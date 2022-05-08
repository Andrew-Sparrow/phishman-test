import './App.css';
import 'antd/dist/antd.css';
import { Table } from 'antd'

const data = {
  "events": [
    {
      "key": 1,
      "ts": new Date('2021-09-15T07:47:01.121Z'),
      "level": 1,
      "message": "message_1"
    },
    {
      "key": 2,
      "ts": new Date("2022-09-15T07:47:01.121Z"),
      "level": 1,
      "message": "message_2"
    },
    {
      "key": 3,
      "ts": new Date("2021-10-15T07:47:01.121Z"),
      "level": 1,
      "message": "message_3"
    },
    {
      "key": 4,
      "ts": new Date("2021-11-15T07:47:01.121Z"),
      "level": 3,
      "message": "message_4"
    },
    {
      "key": 5,
      "ts": new Date("2021-01-15T07:47:01.121Z"),
      "level": 3,
      "message": "message_5"
    },
    {
      "key": 6,
      "ts": new Date("2021-03-15T07:47:01.121Z"),
      "level": 1,
      "message": "message_6"
    },
    {
      "key": 7,
      "ts": new Date("2021-07-15T07:47:01.121Z"),
      "level": 1,
      "message": "message_7"
    },
    {
      "key": 8,
      "ts": new Date("2021-09-15T07:47:01.121Z"),
      "level": 1,
      "message": "message_8"
    },
    {
      "key": 9,
      "ts": new Date("2000-09-15T07:47:01.121Z"),
      "level": 1,
      "message": "message_9"
    },
    {
      "key": 10,
      "ts": new Date("2022-09-15T07:47:01.121Z"),
      "level": 2,
      "message": "message_10"
    }
  ]
};

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
    title: 'TS',
    dataIndex: 'ts',
    key: 'key',
    render: (ts) => <span> {ts.toLocaleString()} </span>,
    sorter: {
      compare: (a, b) => a.ts - b.ts,
      multiple: 2
    }
  },
  {
    title: 'Level',
    dataIndex: 'level',
    key: 'key',
    sorter: {
      compare: (a, b) => a.level - b.level,
      multiple: 3
    }
  },
  {
    title: 'Message',
    dataIndex: 'message',
    key: 'key',
  },
];

function App() {
  return (
    <div className="App">
      <Table
        dataSource={data.events}
        columns={columns}
      />
    </div>
  );
}

export { App };
