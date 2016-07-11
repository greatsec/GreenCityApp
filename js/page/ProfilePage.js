import React, { Component } from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import IconFont from '../IconFont';

class P extends Component {
  render(){
    return (
      <View>
        <TouchableOpacity style={{
            height:45, marginTop:20,
            flexDirection:'row',
            backgroundColor:'#fff'}} onPress={Actions.auth}>
            <View style={{justifyContent:'center', marginLeft:10}}>
              <IconFont name="profile" style={{backgroundColor:'transparent'}} size={20} color="#BABABA" />
            </View>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>个人信息</Text>
            </View>
	          <View style={{justifyContent:'center', marginRight:15}}>
              <IconFont name='right' style={{backgroundColor:'transparent'}} size={20} color='#7F7F7F' />
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{
            height:45, marginTop:1,
            flexDirection:'row',
            backgroundColor:'#fff'}} onPress={Actions.userinfo}>
            <View style={{justifyContent:'center', marginLeft:10}}>
              <IconFont name="command" style={{backgroundColor:'transparent'}} size={20} color="#BABABA" />
            </View>
            <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>修改密码</Text>
            </View>
	          <View style={{justifyContent:'center', marginRight:15}}>
              <IconFont name='right' style={{backgroundColor:'transparent'}} size={20} color='#7F7F7F' />
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{
            height:45, marginTop:20,
            flexDirection:'row',
            backgroundColor:'#fff'}} onPress={Actions.login}>
            <View style={{flex:1,justifyContent:'center', alignItems:'center', marginLeft:15}}>
              <Text style={{fontSize:15}}>退出登录</Text>
            </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default P;
