import React from 'react';

import { Tabs, WhiteSpace } from 'antd-mobile';

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

const OrderTab = React.createClass({
  render() {
    return (
      <div>
        <WhiteSpace />
        <Tabs defaultActiveKey="1" animated={false} onChange={callback}>
          <TabPane tab="全部" key="1">
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', height: 100,
            }}>
               全部订单
            </div>
          </TabPane>
          <TabPane tab="待付款" key="2">
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', height: 100,
            }}>
               待付款订单
            </div>
          </TabPane>
          <TabPane tab="待发货" key="3">
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', height: 100,
            }}>
               待发货订单
            </div>
          </TabPane>
            <TabPane tab="待收货" key="4">
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', height: 100,
            }}>
               待收货订单
            </div>
          </TabPane>
            <TabPane tab="待评价" key="5">
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', height: 100,
            }}>
               待评价订单
            </div>
          </TabPane>
        </Tabs>
        <WhiteSpace />
      </div>
    );
  },
});
export default OrderTab;