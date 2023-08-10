import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import React from "react";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";

import { useDispatch, useSelector } from "react-redux";
import { selectDestination, setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";

import NavFavorites from "./NavFavorites";
import { Icon } from "@rneui/base";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const destination = useSelector(selectDestination);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-3 text-lg`}>Good Morning, Cem</Text>

      <View>
        <View>
          <GooglePlacesAutocomplete
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "en",
            }}
            placeholder="Where to?"
            fetchDetails={true}
            returnKeyType={"search"}
            enablePoweredByContainer={false}
            minLength={2}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptionsCard");
            }}
            styles={toInputBoxStyles}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
          />
        </View>
        <NavFavorites />
      </View>
      <View
        style={tw`flex-row bg-white justify-evenly py-4 mt-auto border-t border-gray-100`}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("RideOptionsCard")}
          disabled={!destination}
          style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full ${
            !destination && "bg-gray-300"
          }`}
        >
          <Icon name="car" type="ionicon" color="white" size={16} />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}
        >
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="black"
            size={16}
          />
          <Text style={tw`text-center`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 5,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#EEEEEF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 15,
    paddingBottom: 0,
  },
});
