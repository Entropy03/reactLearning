import React from 'react';

import { TabBar } from 'antd-mobile';
import GoodsList from './goodsList.js';
import CommpanyList from './commpanyList.js';
import BasicInput from './my.js';
import OrderTab from './orderTab.js';
const TabBarPage = React.createClass({
  getInitialState() {
    return {
      selectedTab: 'redTab',
      notifCount: 0,
      presses: 0,
    };
  },
  renderContent(pageText, num?: number) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%' }}>
        <div style={{ paddingTop: 30, marginLeft: 50 }}>{pageText}</div>
        <div style={{ margin: 50 }}>{num} re-renders of the {pageText}</div>
      </div>
    );
  },
  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
      >
        <TabBar.Item
          title="活动"
          key="活动"
          icon={{ uri: '' }}
          selectedIcon={{ uri: '' }}
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}
        >
        {<GoodsList />}
        </TabBar.Item>
        <TabBar.Item
          icon={{ uri: '' }}
          selectedIcon={{ uri: '' }}
          title="商家"
          key="商家"
          badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'redTab',
              notifCount: this.state.notifCount + 1,
            });
          }}
        >
          {<CommpanyList/>}
        </TabBar.Item>
        <TabBar.Item
          icon={{ uri: '' }}
          selectedIcon={{ uri: '' }}
          title="订单"
          key="订单"
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'greenTab',
              presses: this.state.presses + 1,
            });
          }}
        >
          {<OrderTab/>}
        </TabBar.Item>
        <TabBar.Item
          icon={{ uri: '' }}
          selectedIcon={{ uri: '' }}
          title="我的"
          key="我的"
          selected={this.state.selectedTab === 'yellowTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'yellowTab',
            });
          }}
        >
          {<BasicInput/>}
        </TabBar.Item>
      </TabBar>
    );
  },
});

export default TabBarPage;