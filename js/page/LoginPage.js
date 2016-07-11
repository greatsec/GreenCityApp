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

import _find from 'lodash/find';

import action from '../action';
import { Tip } from '../component';

class P extends Component {

  constructor(props){
    super(props);
    this.state = {
      phone: props.phone,
      password: props.password
    };
  }

  componentDidMount(){

  }

  componentWillReceiveProps(nextProps){

  }

  isDisabledSubmit(){
    let { phone, password } = this.state;
    return !phone || !password;
  }

  onPressSubmit(){
    Actions.home();
    return;
    let { phone, password } = this.state;
    this.props.action.memberLogin({
      phone, password
    }).then(action=>{
      if(!action.error){ Actions.home() }
      else{
        this.setState({tip:action.payload.message});
      }
    });
  }

  render(){
    return (
      <View style={{marginTop:100,flex:1}}>
        <Text>环境安全监测</Text>
        <View style={{
            height:45,
            borderLeftWidth:1, borderRightWidth:1, borderTopWidth:1,
            borderTopLeftRadius:5, borderTopRightRadius:5,
            marginHorizontal:15,marginTop:15
          }}>
          <TextInput style={{
              flex:1,
              marginHorizontal:10,
              backgroundColor:'transparent'
            }} onChangeText={phone=>this.setState({phone})} value={this.state.phone} placeholder='请输入手机号' />
        </View>

        <View style={{
            height:45,
            borderLeftWidth:1, borderRightWidth:1, borderTopWidth:1, borderBottomWidth:1,
            borderBottomLeftRadius:5, borderBottomRightRadius:5,
            marginHorizontal:15
          }}>
          <TextInput style={{
              flex:1,
              marginHorizontal:10,
              backgroundColor:'transparent'
            }} onChangeText={password=>this.setState({password})} value={this.state.password} placeholder='请输入密码' secureTextEntry={true} />
        </View>


        <View style={{flexDirection:'row', height:45, marginHorizontal:15, marginTop:20}}>
          <TouchableOpacity style={{
              alignItems:'center', justifyContent:'center',
            }} onPress={Actions.register}>
            <Text style={{marginHorizontal:10}}>注册帐号</Text>
          </TouchableOpacity>
          <View style={{flex:1}} />
          <TouchableOpacity style={{
              alignItems:'center', justifyContent:'center',
            }} onPress={Actions.resetPassword}>
            <Text style={{marginHorizontal:10}}>忘记密码</Text>
          </TouchableOpacity>
        </View>

        <Tip msg={this.state.tip} />

        <TouchableOpacity style={{
            height:45,
            alignItems:'center', justifyContent:'center',
            backgroundColor: this.isDisabledSubmit() ? '#888':'#18B4ED',
            borderRadius:5,
            marginHorizontal:15, marginTop:20,
          }} onPress={this.onPressSubmit.bind(this)} disabled={this.isDisabledSubmit()}>
          <Text style={{color:'#fff', fontSize:18}}>登  录</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(
  state=>state.loginForm,
  dispatch=>({
    action: bindActionCreators({
      memberLogin: action.memberLogin
    }, dispatch)})
)(P);
