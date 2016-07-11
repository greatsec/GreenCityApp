import React, { Component } from 'react';

import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

import { connect, Provider } from 'react-redux';
import { Scene, Router, Actions, Reducer } from 'react-native-router-flux';

import _find from 'lodash/find';

import configStore from './configStore';
import * as page from './page';
import IconFont from './IconFont';

class BackButton extends Component {
  render(){
    return (
      <TouchableOpacity style={this.props.style} onPress={Actions.pop}>
        <View style={{justifyContent:'center'}}>
          <IconFont name='back' size={20} color='#fff' />
        </View>
      </TouchableOpacity>
    );
  }
}

class TabIcon extends Component {
    render(){
      let iconName = this.props.selected ? this.props.activeIconName || this.props.iconName : this.props.iconName;
      let color = this.props.selected ? '#18B4ED' : '#B3B3B3';
        return (
          <View style={{alignItems:'center'}}>
            <IconFont name={iconName} style={{backgroundColor:'transparent'}} size={24} color={color} />
            <Text style={{color, fontSize:11}}>{this.props.iconText || this.props.title}</Text>
          </View>
        );
    }
}

const ConnectedRouter = connect()(Router);

const getSceneStyle = (props, computedProps) => {
  const style = {
    flex: 1,
    backgroundColor: '#f1f1f1',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  };
  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ? 0 : 64;
    style.marginBottom = computedProps.hideTabBar ? 0 : 50;
  }
  return style;
};

class App extends Component {
  render(){
    return (
      <ConnectedRouter
        getSceneStyle={getSceneStyle}
        navigationBarStyle={{backgroundColor:'#18B4ED'}}
        titleStyle={{color:'#fff'}}
        >
        <Scene key='login' component={page.LoginPage} hideNavBar={true} hideTabBar={true} title='登录' type='reset' />
        <Scene key='home' component={page.HomePage} hideNavBar={true} hideTabBar={true} title='对象列表' type='replace'/>
        <Scene key='profile' component={page.ProfilePage} hideNavBar={false} hideTabBar={true} backButton={BackButton} title='我' />
        <Scene key='about' component={page.AboutPage} hideNavBar={false} hideTabBar={true} title='登录'/>
        <Scene key='authHelp' component={page.AuthHelpPage} hideNavBar={false} hideTabBar={true} title='登录'/>
        <Scene key='auth' component={page.AuthPage} hideNavBar={false} hideTabBar={true} title='登录' rightTitle='帮助' onRight={()=>Actions.authHelp()}/>
        <Scene key='itemTab' tabs={true}>
          <Scene key='item' component={page.ItemPage} title='数据' icon={TabIcon} iconName='light' activeIconName='lightfill' backButton={BackButton} getTitle={()=>this.props.item.name}/>
          <Scene key='itemChart' component={page.ItemChartPage} title='图表' icon={TabIcon} iconName='rank' activeIconName='rankfill' backButton={BackButton} getTitle={()=>this.props.item.name}/>
          <Scene key='itemVideo' component={page.ItemVideoPage} title='视频' icon={TabIcon} iconName='video' activeIconName='videofill' backButton={BackButton} getTitle={()=>this.props.item.name}/>
        </Scene>

        <Scene key='group' component={page.GroupPage} hideNavBar={false} hideTabBar={true} backButton={BackButton} getTitle={()=>this.props.group.name} />
        <Scene key='register' component={page.RegisterPage} hideNavBar={false} hideTabBar={true} backButton={BackButton} title='注册'/>
        <Scene key='resetPassword' component={page.ResetPasswordPage} hideNavBar={false} hideTabBar={true} title='登录'/>
        <Scene key='groupSelect' component={page.GroupSelectPage} hideNavBar={false} hideTabBar={true} backButton={BackButton} title='选择监控区' />
      </ConnectedRouter>
    );
  }
};

const ConnectedApp = connect(state=>({
  item: _find(state.itemList.list, {id:state.itemList.selected}),
  group: _find(state.groupList.list, {id:state.groupList.selected}),
}))(App);

class ReduxApp extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLoading: true,
      store: configStore(()=>this.setState({isLoading:false}))
    }
  }
  render(){
    if(this.state.isLoading){
      return null;
    }

    return (
      <Provider store={this.state.store}>
        <ConnectedApp />
      </Provider>
    );
  }
}

export default ReduxApp;
