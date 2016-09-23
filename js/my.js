import React from 'react';

import { List, Card,InputItem, Switch, Stepper, Slider, Radio, TextareaItem, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
let BasicInput = React.createClass({
  getInitialState() {
    return {
      disabled: false,
      value: 1,
    };
  },
  handleChange(e) {
    if (e.target.checked) {
      this.setState({
        value: 1,
      });
    }
  },
  handleChange2(e) {
    if (e.target.checked) {
      this.setState({
        value: 2,
      });
    }
  },
  onClick() {
    console.log(this.props.form.getFieldsValue());
  },
  render() {
    const { getFieldProps } = this.props.form;

    return (<div>
 	<Card>
 	 <Card.Header
        title=""
        thumb="http://hearthstone.nos.netease.com/3/suspense/logo_blizzard.png"
        extra={<span>zhang</span>}
      />
      <Card.Body>
      </Card.Body>
      
      <Card.Footer content="" extra={<div><a href="##">已购买</a>||<a href="##">已收藏</a></div>} />
    </Card>

      
      <List
        title=""
      >        
       <List.Item
          thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
          arrow="horizontal"
        >我的消息</List.Item>
        <List.Item
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          arrow="horizontal"
        >购物车</List.Item>
        <List.Item
          thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
          arrow="horizontal"
        >所在小区</List.Item>
 


      </List>
     
      <WingBlank size="lg">
        <Button type="primary">退出登录</Button>
      </WingBlank>
      <WhiteSpace />
 
      <WhiteSpace />
      <WhiteSpace />
    </div>);
  },
});

BasicInput = createForm()(BasicInput);
export default BasicInput;