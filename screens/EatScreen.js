import { View, SafeAreaView, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/base";
const EatScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <View style={tw`h-full`}>
            <Text style={tw`m-auto font-semibold text-2xl p-2`}>
              We are currently working on!
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EatScreen;
