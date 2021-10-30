import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeSc from '../routes/homeStack.js';
import Calandar from './screens/Calandar.js';
import Communty from './screens/Communty.js';
import MyProfile from './screens/MyProfile.js';
import Blogs from './screens/Blogs.js';
const HomeP = "HomeSc";
const CalandarP = "Calandar";
const CommuntyP = "Communty";
const MyProfileP = "MyProfile";
const Tab = createBottomTabNavigator()
 
export default MainCount = () =>{
    return (
        <NavigationContainer  independent={true} >
        <Tab.Navigator
           initialRouteName={HomeP}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;
  
              if (rn === HomeSc) {
                iconName = focused ? 'Home ' : 'home-outline';
  
              } else if (rn === Calandar) {
                iconName = focused ? 'Calandar' : 'Calandar-outline';
  
              } else if (rn === Communty) {
                iconName = focused ? 'Communty' : 'Communty-outline';
              }
              else if (rn === MyProfile) {
                iconName = focused ? 'MyProfile' : 'MyProfile-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}

          tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'green',
            labelStyle: { paddingBottom: 10, fontSize: 10 },
            style: { padding: 10, height: 70}
          }}>
  
          <Tab.Screen name={HomeP} component={HomeSc} />
          <Tab.Screen name={CalandarP} component={Calandar} />
          <Tab.Screen name={CommuntyP} component={Communty} />
          <Tab.Screen name={MyProfileP} component={MyProfile} />

        </Tab.Navigator>
      </NavigationContainer>
       
    )
}