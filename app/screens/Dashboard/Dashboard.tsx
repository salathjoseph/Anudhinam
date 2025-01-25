// eslint-disable-next-line no-restricted-imports, @typescript-eslint/no-unused-vars
import React from "react"
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, Dimensions } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import tw from "twrnc"

const { width } = Dimensions.get("window")

export default function DashboardScreen() {
  const menuItems = [
    { id: 1, title: "Temple", icon: "home-outline" },
    { id: 2, title: "Calendar", icon: "calendar-outline" },
    { id: 3, title: "", icon: "" },
    { id: 4, title: "Grocery list", icon: "list-outline" },
    { id: 5, title: "", icon: "" },
    { id: 6, title: "", icon: "" },
  ]

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      {/* Header Section with Wave Background */}
      <View style={tw`h-44 bg-pink-400 rounded-br-3xl overflow-hidden`}>
        <View style={tw`flex-1 p-5 flex-row justify-between items-start`}>
          <View>
            <Text style={tw`text-white text-base mt-5`}>Good Morning</Text>
            <Text style={tw`text-white text-lg font-bold mt-1`}>Name Of The Client</Text>
          </View>
          <Text style={tw`text-white text-2xl font-bold`}>21°C</Text>
        </View>
      </View>

      {/* Menu Grid */}
      <ScrollView style={tw`flex-1 p-5`}>
        <View style={tw`flex-row flex-wrap justify-between mt-5`}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={tw.style(
                `w-[${(width - 60) / 3}px] h-[${(width - 60) / 3}px] rounded-lg mb-4 p-4 items-center justify-center`,
                item.title ? "bg-blue-100" : "bg-transparent",
              )}
            >
              {item.title && (
                <Text style={tw`mt-2 text-xs text-gray-800 text-center`}>{item.title}</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* List of Adds Card */}
        <View style={tw`bg-blue-100 rounded-lg p-5 mt-2 mb-5`}>
          <View style={tw`flex-row items-center`}>
            <Ionicons name="newspaper-outline" size={24} color="#666" />
            <Text style={tw`ml-2 text-base text-gray-800`}>List of adds</Text>
          </View>
          <View style={tw`flex-row justify-center mt-4`}>
            <View style={tw`w-2 h-2 rounded-full bg-gray-800 mx-1`} />
            <View style={tw`w-2 h-2 rounded-full bg-gray-300 mx-1`} />
            <View style={tw`w-2 h-2 rounded-full bg-gray-300 mx-1`} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
