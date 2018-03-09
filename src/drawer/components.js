import Expo from 'expo';
import React from 'react';
import {TabNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';

import ButtonsTab from '../tabs/buttons';
import ListsTab from '../tabs/lists';
import InputTab from '../tabs/input';
import FontsTab from '../tabs/fonts';

const Components = TabNavigator(
    {
        ButtonsTab: {
            screen: ButtonsTab,
            path: '/buttons',
            navigationOptions: {
                tabBarLabel: '按钮',
                tabBarIcon: ({tintColor, focused}) => (
                    <Icon
                        name={focused ? 'emoticon-cool' : 'emoticon-neutral'}
                        size={20}
                        type="material-community"
                        color={tintColor}
                    />
                ),
            },
        },
        ListsTab: {
            screen: ListsTab,
            path: '/lists',
            navigationOptions: {
                tabBarLabel: '列表',
                tabBarIcon: ({tintColor, focused}) => (
                    <Icon name="list" size={20} type="entypo" color={tintColor}/>
                ),
            },
        },
        InputTab: {
            screen: InputTab,
            path: '/input',
            navigationOptions: {
                tabBarLabel: '输入框',
                tabBarIcon: ({tintColor, focused}) => (
                    <Icon
                        name="wpforms"
                        size={20}
                        type="font-awesome"
                        color={tintColor}
                    />
                ),
            },
        },
        FontsTab: {
            screen: FontsTab,
            path: '/fonts',
            navigationOptions: {
                tabBarLabel: '字体',
                tabBarIcon: ({tintColor, focused}) => (
                    <Icon
                        name={focused ? 'font' : 'font'}
                        size={20}
                        type="font-awesome"
                        color={tintColor}
                    />
                ),
            },
        },
    },
    {
        initialRouteName: 'ButtonsTab',
        animationEnabled: false,
        swipeEnabled: true,
        // Android's default option displays tabBars on top, but iOS is bottom
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: '#e91e63',
            // Android's default showing of icons is false whereas iOS is true
            showIcon: true,
            indicatorStyle: {
                height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
            },
            style: {
                backgroundColor: '#2193E6', // TabBar 背景色
                height: 52
            },
            labelStyle: {
                fontSize: 10, // 文字大小
                margin: 0
            },
        },

    }
);

Components.navigationOptions = {
    drawerLabel: 'Components',
    // drawerIcon: ({ tintColor }) => (
    //   <Icon
    //     name="settings"
    //     size={30}
    //     iconStyle={{
    //       width: 30,
    //       height: 30
    //     }}
    //     type="material"
    //     color={tintColor}
    //   />
    // ),
};

export default Components;
