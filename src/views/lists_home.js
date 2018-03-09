import Expo from 'expo';
import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableHighlight,
  ListView,
} from 'react-native';

import {
  Text,
  Card,
  ButtonGroup,
  Tile,
  Col,
  Row,
  Icon,
  List,
  ListItem,
  Avatar
} from 'react-native-elements';

import colors from 'HSColors';

const users = [
  {
    name: 'Item1',
    avatar: '../images/man.png',
  },
  {
    name: 'Item2',
    avatar: '../images/man.png',
  },
  {
    name: 'Item3',
    avatar: '../images/man.png',
  },
  {
    name: 'Item4',
    avatar: '../images/man.png',
  },
  {
    name: 'Item5',
    avatar: '../images/man.png',
  },
  {
    name: 'Item6',
    avatar: '../images/man.png',
  },
];

const log = () => console.log('this is an example method');

const list1 = [
  {
    title: 'Test1',
    icon: 'av-timer',
  },
  {
    title: 'Test2',
    icon: 'flight-takeoff',
  },
  {
    title: 'Test3',
    icon: 'fingerprint',
  },
  {
    title: 'Test4',
    icon: 'lightbulb-outline',
  },
  {
    title: 'Test5',
    icon: 'track-changes',
  },
];

const list2 = [
  {
    name: 'Item1',
    avatar_url: '../images/man.png',
    subtitle: 'SubTitle',
  },
  {
    name: 'Item2',
    avatar_url: '../images/man.png',
    subtitle: 'SubTitle',
  },
  {
    name: 'Item3',
    avatar_url: '../images/man.png',
    subtitle: 'SubTitle',
  },
  {
    name: 'Item4',
    avatar_url: '../images/man.png',
    subtitle: 'SubTitle',
  },
  {
    name: 'Item5',
    avatar_url: '../images/man.png',
    subtitle: 'SubTitle',
  },
];

class Icons extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      selectedIndex: 0,
      value: 0.5,
      dataSource: ds.cloneWithRows(list1),
    };

    this.updateIndex = this.updateIndex.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  renderRow(rowData, sectionID) {
    return (
      <ListItem
        key={sectionID}
        onPress={log}
        title={rowData.title}
        icon={{ name: rowData.icon }}
      />
    );
  }

  render() {
    const { navigation } = this.props;
    const buttons = ['Button1', 'Button2'];
    const { selectedIndex } = this.state;

    return (
      <ScrollView>
        <View style={styles.headerContainer}>
          <Icon color="white" name="invert-colors" size={62} />
          <Text style={styles.heading}>Lists</Text>
        </View>
        <List>
          {list2.map((l, i) => (
            <ListItem
              roundAvatar
              avatar={{ uri: l.avatar_url }}
              key={i}
              onPress={log}
              title={l.name}
              subtitle={l.subtitle}
            />
          ))}
        </List>
        <List>
          {
            list2.map((l, i) => (
              <ListItem
                key={i}
                leftIcon={{ name: 'user-circle-o', type: 'font-awesome', style: {color: 'blue'} }}
                title={l.name}
                titleStyle={{color: 'red'}}
                subtitle={l.subtitle}
                rightTitle='Date'
                rightTitleStyle={{color: 'green'}}
              />
            ))
          }
        </List>
        <List>
          <ListItem
            roundAvatar
            title="Rating"
            subtitle={
              <View style={styles.subtitleView}>
                <Image
                  source={require('../images/rating.png')}
                  style={styles.ratingImage}
                />
                <Text style={styles.ratingText}>Date</Text>
              </View>
            }
          />
        </List>
        <List>
          <ListView
            renderRow={this.renderRow}
            dataSource={this.state.dataSource}
          />
        </List>
        <View style={[styles.headerContainer, {backgroundColor: '#18CDCA', marginTop: 20}]}>
          <Icon color="white" name="hdd-o" size={62} type="font-awesome" />
          <Text style={styles.heading}>Card Group</Text>
        </View>
        <View style={styles.container}>
          <Card title="List Group">
            {users.map((u, i) => {
              return (
                <View key={i} style={styles.user}>
                  <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: u.avatar }}
                  />
                  <Text style={styles.name}>{u.name}</Text>
                </View>
              );
            })}
          </Card>
          <Card containerStyle={{ marginTop: 15 }} title="Font Group">
            <Text style={styles.fonts} h1>h1 Heading</Text>
            <Text style={styles.fonts} h2>h2 Heading</Text>
            <Text style={styles.fonts} h3>h3 Heading</Text>
            <Text style={styles.fonts} h4>h4 Heading</Text>
            <Text style={styles.fonts}>Normal Text</Text>
          </Card>
          <Card
            containerStyle={{ marginTop: 15, marginBottom: 15 }}
            title="Image Group"
          >
            <View>
              <Tile
                imageSrc={{
                  uri: 'https://static1.squarespace.com/static/5477887ae4b07c97883111ab/5478c08fe4b0fa4e5a552532/57e101f3579fb32aef30d4af/1491426124625/Porthmeor+Sunset+21.jpg',
                }}
                title="Desc"
                titleStyle={{ fontSize: 20 }}
                featured
                caption="Mahatma Gandhi"
                activeOpacity={1}
                width={310}
              />
            </View>
            <View style={{ paddingTop: 20 }}>
              <Tile
                imageSrc={{
                  uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                }}
                icon={{
                  name: 'heart',
                  type: 'font-awesome',
                  size: 60,
                  color: 'red',
                }}
                featured
                activeOpacity={0.8}
                onPress={() => {
                  'Tile pressed';
                }}
                width={310}
              />
            </View>
            <View style={{ paddingTop: 20 }}>
              <Tile
                imageSrc={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Half_Dome_from_Glacier_Point%2C_Yosemite_NP_-_Diliff.jpg/320px-Half_Dome_from_Glacier_Point%2C_Yosemite_NP_-_Diliff.jpg',
                }}
                title="Title"
                titleStyle={{ fontSize: 20 }}
                activeOpacity={1}
                width={310}
                contentContainerStyle={{ height: 70 }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text style={{ color: 'green' }}>Test1</Text>
                  <Text style={{ color: 'blue' }}>Test2</Text>
                </View>
              </Tile>
            </View>
          </Card>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#FD6B78'
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5,
  },
  ratingImage: {
    height: 19.21,
    width: 100,
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey',
  },
});

export default Icons;
