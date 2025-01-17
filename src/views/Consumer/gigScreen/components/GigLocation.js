import React from "react";
import {useNavigation} from "@react-navigation/core";
import {StyleSheet, TouchableOpacity, Text, View} from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Colors from "../../../../styles/abstracts/colors";

const GigLocation = ({distance, address, willSellerDeliver, geoData}) => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.addressRow}>
        <MaterialIcon color={Colors.fontColor.color} size={25} name="map-marker" />
        <View style={styles.addresRight}>
          <View style={styles.locationRow}>
            <Text style={{fontWeight: "bold"}}>{distance}</Text>
            <TouchableOpacity>
              <Text
                style={styles.viewOnMap}
                onPress={() =>
                  navigation.navigate("ConsumerMap", {
                    region: geoData,
                  })
                }>
                View on map
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.address}>{address}</Text>
            <Text style={styles.deliverMethod}>
              {willSellerDeliver === true
                ? `Seller will deliver to you`
                : `You will get the order at seller`}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default GigLocation;

const styles = StyleSheet.create({
  addressRow: {
    flexDirection: "row",
    alignItems: "stretch",
  },
  addresRight: {
    marginLeft: 10,
  },
  locationRow: {
    flexDirection: "row",
  },
  viewOnMap: {
    marginLeft: 15,
    marginBottom: 5,
    color: Colors.secondary.color,
    textDecorationLine: "underline",
  },
  address: {
    color: Colors.fontColor.color,
    marginBottom: 5,
  },
  deliverMethod: {
    fontWeight: "bold",
    color: Colors.fontColor.color,
  },
});
