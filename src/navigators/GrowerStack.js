import React from "react";

import {createStackNavigator} from "@react-navigation/stack";

import {GrowerHomeScreen} from "../views/Grower/homeScreen/GrowerHomeScreen";


// Grower's Menu Screens
import Earnings from "../views/Grower/menuScreens/earnings/EarningsScreen";
import FindConsumer from "../views/Grower/menuScreens/findConsumer/FindConsumerScreen";
import MyGigs from "../views/Grower/menuScreens/myGigs/MyGigsScreen";


import NewGig from "../views/Grower/menuScreens/newGig/NewGigScreen01";
import GigScreen2 from "../views/Grower/menuScreens/newGig/GigScreen2";
import Orders from "../views/Grower/menuScreens/orders/OrdersScreen";
import Support from "../views/Grower/menuScreens/support/SupportScreen";



const Stack = createStackNavigator();

const GrowerStack = () => {
  // Consumer Screens which are not on drawer are here
  return (
    <Stack.Navigator headerMode={"none"}>
      <Stack.Screen name={"GrowerHome"} component={GrowerHomeScreen} />
      <Stack.Screen name={"Earnings"} component={Earnings} />
      <Stack.Screen name={"FindConsumer"} component={FindConsumer} />
      <Stack.Screen name={"MyGigs"} component={MyGigs} />
      <Stack.Screen name={"NewGig"} component={NewGig} />
      <Stack.Screen name={"GigScreen2"} component={GigScreen2} />
      <Stack.Screen name={"Orders"} component={Orders} />
      <Stack.Screen name={"Support"} component={Support} />
    </Stack.Navigator>
  );
};
export default GrowerStack;