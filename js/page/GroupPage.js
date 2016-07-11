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
    return (
      <View>
        <View style={{marginTop:10}}>
            <View style={{height:36, justifyContent:'center', borderLeftWidth:3, marginHorizontal:15}}>
              <Text style={{marginHorizontal:10,fontSize:18}}>简介</Text>
            </View>
            <View style={{marginTop:15}}>
              <Text style={{marginHorizontal:10, marginVertical:1}}>{this.props.group.desc}</Text>
            </View>
        </View>

        {this.props.itemList ? (
          <View style={{marginTop:10}}>
            <View style={{height:36, justifyContent:'center', borderLeftWidth:3, marginHorizontal:15}}>
              <Text style={{marginHorizontal:10,fontSize:18}}>监控点</Text>
            </View>
            <View style={{marginTop:15}}>
            {this.props.itemList.map(o=>(
              <TouchableOpacity key={o.id} style={{
                  height:45, marginTop:1,
                  flexDirection:'row',
                  backgroundColor:'#fff'}} onPress={()=>this.onSelectItem(o)}>
                  <View style={{flex:1,justifyContent:'center', marginLeft:15}}>
                    <Text style={{fontSize:15}}>{o.name}</Text>
                  </View>
      	          <View style={{justifyContent:'center', marginRight:15}}>
                    <IconFont name='right' style={{backgroundColor:'transparent'}} size={20} color='#7F7F7F' />
                  </View>
              </TouchableOpacity>
            ))}
            </View>
          </View>
        ):null}
      </View>
    );
  }
}

export default connect(
  state=>{
    let group = _find(state.groupList.list, {id:state.groupList.selected});
    let itemList = group ? group.item.split(',').map(o=>_find(state.itemList.list, {id:o})) : null;
    return {group, itemList}
  },
  dispatch=>({
    action: bindActionCreators({
      selectItem: action.selectItem
    }, dispatch)})
)(P);
