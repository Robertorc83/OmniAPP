import React from "react";
import { View, Text, Pressable } from "react-native";
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';


const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{backgroundColor: '#332C54', padding: 15, marginTop:-10}}>

        {/* User Row */}
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          <View style={{
            backgroundColor: '#cacaca',
            width: 50,
            height: 50,
            borderRadius: 25,
            marginRight: 10,
          }}/>

          <View>
            <Text style={{color: 'white', fontSize: 24}}>María Córdova</Text>
            <Text style={{color: 'lightgrey'}}>5.00 *</Text>
          </View>
        </View>

      </View>

      <DrawerItemList {...props} />

    </DrawerContentScrollView>
  );
};

export default CustomDrawer;