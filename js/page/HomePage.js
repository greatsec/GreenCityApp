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

import IconFont from '../IconFont';
import action from '../action';

class P extends Component {

  onSelectItem(o){
    this.props.action.selectItem({id:o.id});
    Actions.itemTab();
  }

  render(){
    let groupButtonText = this.props.group ? this.props.group.name : '点击选择监控区';
    return (
      <View >
        <View style={{flexDirection:'row', marginTop:100, marginHorizontal:15}}>
          <TouchableOpacity
            style={{width:50, height:50, borderWidth:1}} onPress={Actions.profile}>
            <View style={{flex:1,alignItems:'center', justifyContent:'center'}}>
              <IconFont name="people" style={{backgroundColor:'transparent'}} size={32} color="#BABABA" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{flex:1,height:50, borderWidth:1, borderLeftWidth:0,alignItems:'center', justifyContent:'center'}} onPress={Actions.groupSelect}>
            <Text>{groupButtonText}</Text>
          </TouchableOpacity>
        </View>

        <View>
          {this.props.group ? (
            <TouchableOpacity onPress={()=>Actions.group()}>
              <Text>查看 {this.props.group.name}</Text>
            </TouchableOpacity>
          ):null}
        </View>

        <View>
        {this.props.itemList ? this.props.itemList.map(o=>{
          return (
            <TouchableOpacity key={o.id} onPress={()=>this.onSelectItem(o)}>
              <Text>{o.name}</Text>
            </TouchableOpacity>
          );
        }):null}
        </View>
      </View>
    );
  }
}

export default connect(
  state=>{
    let group = _find(state.groupList.list, {id:state.groupList.selected});
    let itemList = group ? group.item.split(',').map(o=>_find(state.itemList.list, {id:o})) : null;
    return { group, itemList}
  },
  dispatch=>({
    action: bindActionCreators({
      selectItem: action.selectItem
    }, dispatch)})
)(P);
