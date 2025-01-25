import { observer } from "mobx-react-lite"
import { FC } from "react"
import { View } from "react-native"
import { Button, Text, Screen } from "@/components"
import { AppStackScreenProps } from "../navigators"
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"
import { useAppTheme } from "@/utils/useAppTheme"
import tw from "twrnc"


interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen(_props) {
  const { theme } = useAppTheme()

  const { navigation } = _props

  function goNext() {
    navigation.navigate("Demo", { screen: "DemoShowroom", params: {} })
  }

  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])

  return (
    <Screen preset="fixed" contentContainerStyle={tw`flex-1`}>
      <View style={tw`flex-grow flex-shrink justify-center px-6`}>
        <Text
          style={tw`text-center text-xl font-extrabold mb-10`}
        >
          Anudhinam
        </Text>
        <Text
          testID="welcome-heading"
          style={tw`text-center text-lg font-bold mb-4`}
        >
          Welcome to Anudhinam
        </Text>
        <Text style={tw`text-center text-base mb-6`}>
          Discover temples in every city, explore astrological calendars, manage notes, and
          organize grocery lists all in one place.
        </Text>
      </View>

      <View style={tw.style("flex-grow-0 flex-shrink bg-neutral-100 rounded-t-2xl px-6 justify-around", $bottomContainerInsets)}>
        <Text style={tw`text-center text-base mb-4`}>
          Start exploring and organizing your daily spiritual and practical needs.
        </Text>

        <Button
          testID="next-screen-button"
          preset="reversed"
          tx="welcomeScreen:letsGo"
          onPress={goNext}
        />
      </View>
    </Screen>
  )
})
