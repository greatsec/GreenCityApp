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
import _groupBy from 'lodash/groupBy';

import action from '../action';

class P extends Component {
  render(){
    return (
      <View>
        {['空气', '土壤', '水', '其他'].map(o=>{
          return this.props.dataGroup[o] ? (
            <View key={o} style={{borderWidth:1, marginHorizontal:15,marginTop:15}}>
              <View style={{height:45, justifyContent:'center'}}>
                <Text style={{marginHorizontal:10}}>{o}</Text>
              </View>
              <View style={{marginHorizontal:10, borderTopWidth:1}}/>
              {this.props.dataGroup[o].map((o,i)=>{
                return (
                  <View key={i} style={{height:45, justifyContent:'center'}}>
                    <Text style={{marginHorizontal:10}}>{`${o.name}:${o.val} ${o.unit}`}</Text>
                  </View>
                );
              })}
            </View>
          ):null
        })}
      </View>
    );
  }
}

export default connect(
  state=>{
    let item = _find(state.itemList.list, {id:state.itemList.selected});
    let dataGroup = item ? _groupBy(item.data, 'type') : [];
    return {item, dataGroup}
  },
  dispatch=>({
    action: bindActionCreators({
      memberLogin: action.memberLogin
    }, dispatch)})
)(P);
