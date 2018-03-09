import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Button, ButtonGroup } from 'react-native-elements'

import Icon from 'react-native-vector-icons/FontAwesome';

class Buttons extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      selectedIndexes: [0, 2, 3]
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.contentView}>
          <View style={styles.headerContainer}>
            <Icon color="white" name="rocket" size={62} />
            <Text style={styles.heading}>Buttons</Text>
          </View>
          <Button
              text ='Test'
              containerStyle={{marginVertical: 10}} />
          <Button
            text ='Test1'
            buttonStyle={{height: 50, width: 250, backgroundColor: 'black', borderWidth: 2, borderColor: 'white', borderRadius: 30}}
            containerStyle={{marginVertical: 10}}
            textStyle={{fontWeight: 'bold'}}
          />
          <Button
            text ='Test2'
            loading={false}
            loadingProps={{size: 'small', color: 'white'}}
            buttonStyle={{height: 50, width: 230, backgroundColor: 'rgba(111, 202, 186, 1)', borderRadius: 5}}
            textStyle={{fontWeight: 'bold', fontSize: 23}}
            containerStyle={{marginVertical: 10}}
            onPress={() => console.log('aye')}
            underlayColor="transparent"
          />
          <Button
            text="Test3"
            textStyle={{fontWeight: 'bold', fontSize: 18}}
            ViewComponent={require('expo').LinearGradient}
            linearGradientProps={{
              colors: ['#FF9800', '#F44336'],
              start: [1, 0],
              end: [0.2, 0],
            }}
            buttonStyle={{height: 40, width: 200, borderWidth: 0, borderColor: 'transparent', borderRadius: 20}}
            containerStyle={{marginVertical: 10}}
            icon={
              <Icon
                name='arrow-right'
                size={15}
                color='white'
              />
            }
            iconRight
            iconContainerStyle={{marginLeft: 5}}
          />
          <Button
            text="Button1"
            textStyle={{fontWeight: '500'}}
            buttonStyle={{backgroundColor: 'rgba(199, 43, 98, 1)', width: 275, height: 45, borderColor: 'transparent', borderWidth: 0}}
            containerStyle={{marginTop: 10}}
          />
          <Button
            text="Button2"
            disabled={true}
            textStyle={{fontWeight: '700'}}
            buttonStyle={{backgroundColor: 'rgba(92, 99,216, 1)', width: 300, height: 45, borderColor: 'transparent', borderWidth: 0, borderRadius: 5}}
            containerStyle={{marginTop: 20}}
          />
          <Button
            text="Button3"
            loading={true}
            loadingProps={{size: 'large', color: 'rgba(111, 202, 186, 1)'}}
            textStyle={{fontWeight: '700'}}
            buttonStyle={{backgroundColor: 'rgba(92, 99,216, 1)', width: 300, height: 45, borderColor: 'transparent', borderWidth: 0, borderRadius: 5}}
            containerStyle={{marginTop: 20}}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Button
              text="Button4"
              icon={
                <Icon
                  name='home'
                  size={15}
                  color='white'
                />
              }
              iconContainerStyle={{marginRight: 10}}
              textStyle={{fontWeight: '700'}}
              buttonStyle={{backgroundColor: 'rgba(90, 154, 230, 1)', width: 130, borderColor: 'transparent', borderWidth: 0, borderRadius: 30}}
              containerStyle={{marginTop: 20}}
            />
            <Button
              text="Button5"
              icon={
                <Icon
                  name='user'
                  size={15}
                  color='white'
                />
              }
              iconRight
              iconContainerStyle={{marginLeft: 10}}
              textStyle={{fontWeight: '700'}}
              buttonStyle={{backgroundColor: 'rgba(199, 43, 98, 1)', width: 150, borderColor: 'transparent', borderWidth: 0, borderRadius: 30}}
              containerStyle={{marginTop: 20}}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Button
              text="Button6"
              buttonStyle={{backgroundColor: 'rgba(78, 116, 289, 1)', borderRadius: 3}}
              containerStyle={{marginTop: 20}}
            />
            <Button
              text="Button7"
              buttonStyle={{backgroundColor: 'white', borderColor: 'rgba(78, 116, 289, 1)', borderWidth: 1}}
              containerStyle={{marginTop: 20}}
              textStyle={{color: 'rgba(78, 116, 289, 1)'}}
            />
          </View>
          <View style={{justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row'}}>
            <Button
              text="Button8"
              loading={true}
              textStyle={{fontWeight: '700'}}
              buttonStyle={{backgroundColor: 'rgba(111, 202, 186, 1)', width: 100, height: 30, borderColor: 'transparent', borderWidth: 0, borderRadius: 30}}
              containerStyle={{marginTop: 20}}
            />
            <Button
              text="Button9"
              clear
              textStyle={{color: 'rgba(78, 116, 289, 1)'}}
              containerStyle={{marginTop: 20}}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Button
              text="Button10"
              buttonStyle={{backgroundColor: 'rgba(244, 244, 244, 1)', width: null, height: 40, borderRadius: 3}}
              containerStyle={{marginTop: 20}}
              textStyle={{marginHorizontal: 20, color: 'black'}}
            />
            <Button
              text="Button11"
              buttonStyle={{backgroundColor: 'rgba(39, 39, 39, 1)', width: null, height: 40}}
              containerStyle={{marginTop: 20}}
              textStyle={{color: 'white', marginHorizontal: 20}}
            />
            <Button
              text="Button12"
              containerStyle={{marginTop: 20}}
              buttonStyle={{backgroundColor: 'rgba(78, 116, 289, 1)', width: null, height: 40}}
              textStyle={{color: 'white', marginHorizontal: 20}}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginBottom: 20}}>
            <Button
              text="Button13"
              buttonStyle={{backgroundColor: 'rgba(127, 220, 103, 1)', width: null, height: 40}}
              containerStyle={{marginTop: 20}}
              textStyle={{color: 'white', marginHorizontal: 20}}
            />
            <Button
              text="Button14"
              buttonStyle={{backgroundColor: 'rgba(214, 61, 57, 1)', width: null, height: 40}}
              containerStyle={{marginTop: 20}}
              textStyle={{color: 'white', marginHorizontal: 20}}
            />
          </View>
          <View style={[styles.headerContainer, { backgroundColor: '#292C44'}]}>
            <Icon color="white" name="wrench" size={62} />
            <Text style={styles.heading}>Button Group</Text>
          </View>
          <ButtonGroup
            buttons={['Radio1', 'Radio2', 'Radio3']}
            selectedIndex={this.state.selectedIndex}
            onPress={selectedIndex => {
              this.setState({ selectedIndex });
            }}
            containerStyle={{ marginBottom: 20 }}
          />
          <ButtonGroup
            buttons={['Checkbox1', 'Checkbox2', 'Checkbox3', 'Checkbox4']}
            selectMultiple
            selectedIndexes={this.state.selectedIndexes}
            onPress={selectedIndexes => {
              this.setState({ selectedIndexes });
            }}
            containerStyle={{ marginBottom: 20 }}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  contentView: {
    flex: 1
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#4F80E1',
    marginBottom: 20
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold'
  },
});

export default Buttons;
