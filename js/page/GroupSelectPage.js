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

class P extends Component {
  onSelect(o){
    this.props.action.selectGroup({id:o.id});
    Actions.pop();
  }
  render(){
    return (
      <View>
        {this.props.groupList.map(o=>{
          return (
            <TouchableOpacity key={o.id} style={{
                height:45, marginTop:1,
                flexDirection:'row',
                backgroundColor:'#fff'}} onPress={()=>this.onSelect(o)}>
                <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
                  <Text style={{fontSize:15}}>{o.name}</Text>
                </View>
            </TouchableOpacity>
          )
        })}
      </View>
    );
  }
}

export default connect(
  state=>({groupList: state.groupList.list}),
  dispatch=>({
    action: bindActionCreators({
      selectGroup: action.selectGroup
    }, dispatch)})
)(P);
