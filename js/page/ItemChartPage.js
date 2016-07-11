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
        <Text>图表</Text>
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
