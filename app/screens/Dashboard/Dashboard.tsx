import { observer } from "mobx-react-lite"
import { FC } from "react"
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, Dimensions } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import tw from "twrnc"

const { width } = Dimensions.get("window")

const menuItems: { id: number; title: string; icon: keyof typeof Ionicons.glyphMap }[] = [
  { id: 1, title: "Walking", icon: "walk-outline" },
  { id: 2, title: "Cycling", icon: "bicycle-outline" },
  { id: 3, title: "Driving", icon: "car-outline" },
  { id: 4, title: "Train", icon: "train-outline" },
  { id: 5, title: "Hiking", icon: "walk-outline" },
  { id: 6, title: "Flight", icon: "airplane-outline" },
]

export const DashboardScreen: FC = observer(function DashboardScreen() {
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`h-44 bg-pink-500 rounded-br-3xl overflow-hidden relative`}>
        <View style={tw`flex-1 px-5 py-6 flex-row justify-between items-start`}>
          <View>
            <Text style={tw`text-white text-base`}>Good Morning</Text>
            <Text style={tw`text-white text-lg font-bold mt-1`}>Satwik Pachino</Text>
          </View>
          <View style={tw`flex items-center`}>
            <Ionicons name="cloud-outline" size={24} color="white" />
            <Text style={tw`text-white text-2xl font-bold mt-1`}>21°C</Text>
          </View>
        </View>
        <View
          style={tw`absolute top-24 left-0 w-full h-20 bg-white rounded-tl-3xl rounded-tr-3xl`}
        />
      </View>

      <ScrollView style={tw`flex-1 px-2`}>
        <Text style={tw`text-lg font-bold mt-6 text-gray-800`}>Start a new journey</Text>
        <View style={tw`flex-row flex-wrap justify-between mt-5`}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={tw`w-[${(width - 60) / 3}px] h-[${(width - 60) / 3}px] bg-blue-100 rounded-lg mb-4 p-4 items-center justify-center`}
            >
              <Ionicons name={item.icon} size={24} color="#333" />
              <Text style={tw`mt-2 text-xs text-gray-800 text-center`}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={tw`bg-blue-100 rounded-lg p-5 mt-4 mb-6`}>
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
})
