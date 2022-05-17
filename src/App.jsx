import './App.css';
import 'antd/dist/antd.min.css';
import {
  Row,
  Col,
  Table,
  Input,
  Button,
  Spin
} from 'antd';

import {
  SearchOutlined,
  SettingOutlined,
  InfoCircleOutlined,
  LoadingOutlined,
} from '@ant-design/icons';

import { useSelector } from 'react-redux';
import { getEvents, getIsDataLoaded } from './store/events/selectors';


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
    dataIndex: 'id',
    key: 'id',
    sorter: {
      compare: (a, b) => a.id - b.id,
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
              confirm();
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
  const events = useSelector(getEvents);
  const isDataLoaded = useSelector(getIsDataLoaded);

  if (!isDataLoaded) {
    return (
      <Spin size="large" />
    );
  }

  return (
    <div className="App">
      <Table
        dataSource={events}
        columns={columns}
        pagination={{
          pageSize: 5,
        }}
      />
    </div>
  );
}

export { App };
