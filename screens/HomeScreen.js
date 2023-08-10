import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";

import NavOptions from "../components/NavOptions";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import NavFavorites from "../components/NavFavorites";

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`pt-4 pl-4`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />

        <GooglePlacesAutocomplete
          fetchDetails={true}
          styles={{
            container: {
              backgroundColor: "white",
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
            textInputContainer: {
              paddingHorizontal: 5,
              paddingBottom: 0,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );

            dispatch(setDestination(null));
          }}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          returnKeyType={"search"}
          placeholder="Where from?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />

        <NavOptions />
        <NavFavorites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
