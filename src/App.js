import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * 通过精确指定引入的组件路径，可以最大限度减少bundle文件的大小，缺点是编码繁琐并且需要知道具体的路径
 */
import List from 'antd/lib/list';
import Avatar from 'antd/lib/avatar';
import Tabs from 'antd/lib/tabs';
import Form from 'antd/lib/form';
import Button from 'antd/lib/button';
import Layout from 'antd/lib/layout';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Dropdown from 'antd/lib/dropdown';
import Pagination from 'antd/lib/pagination';
import Steps from 'antd/lib/steps';
import Popconfirm from 'antd/lib/popconfirm';
import message from 'antd/lib/message';
import DatePicker from 'antd/lib/date-picker';
/**
 * 通过 antd一次性导入所有组建，优点是编码简单统一，没有暴露具体路径细节，缺点是会将不需要的组件打入bundle文件
 */
// import { List, Avatar, Tabs, Form, Button, Layout, Row, Col, Dropdown, Pagination, Steps, Popconfirm, message, DatePicker} from 'antd';
import antdStyle from 'antd/dist/antd.css';
import { lang } from 'moment';
const TabPane = Tabs.TabPane;
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
const text = 'Are you sure delete this task?';
const { RangePicker } = DatePicker;

function confirm() {
  message.info('Click on Yes.');
}
function onOk(value) {
  console.log('onOk: ', value);
}
function onChange(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />
  <Tabs defaultActiveKey="1" onChange={e => console.log(e)}>
    <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
    <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
    <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
  </Tabs>

  <div className="demo">
    <div style={{ marginLeft: 70, whiteSpace: 'nowrap' }}>
      <Popconfirm placement="topLeft" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
        <Button>TL</Button>
      </Popconfirm>
      <Popconfirm placement="top" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
        <Button>Top</Button>
      </Popconfirm>
      <Popconfirm placement="topRight" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
        <Button>TR</Button>
      </Popconfirm>
    </div>
    <div style={{ width: 70, float: 'left' }}>
      <Popconfirm placement="leftTop" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
        <Button>LT</Button>
      </Popconfirm>
      <Popconfirm placement="left" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
        <Button>Left</Button>
      </Popconfirm>
      <Popconfirm placement="leftBottom" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
        <Button>LB</Button>
      </Popconfirm>
    </div>
    <div style={{ width: 70, marginLeft: 304 }}>
      <Popconfirm placement="rightTop" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
        <Button>RT</Button>
      </Popconfirm>
      <Popconfirm placement="right" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
        <Button>Right</Button>
      </Popconfirm>
      <Popconfirm placement="rightBottom" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
        <Button>RB</Button>
      </Popconfirm>
    </div>
    <div style={{ marginLeft: 70, clear: 'both', whiteSpace: 'nowrap' }}>
      <Popconfirm placement="bottomLeft" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
        <Button>BL</Button>
      </Popconfirm>
      <Popconfirm placement="bottom" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
        <Button>Bottom</Button>
      </Popconfirm>
      <Popconfirm placement="bottomRight" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
        <Button>BR</Button>
      </Popconfirm>
    </div>
  </div>
  <div>
    <DatePicker
      showTime
      format="YYYY-MM-DD HH:mm:ss"
      placeholder="Select Time"
      onChange={onChange}
      onOk={onOk}
    />
    <br />
    <RangePicker
      showTime={{ format: 'HH:mm' }}
      format="YYYY-MM-DD HH:mm"
      placeholder={['Start Time', 'End Time']}
      onChange={onChange}
      onOk={onOk}
    />
  </div>
      </div>
    );
  }
}

export default App;
