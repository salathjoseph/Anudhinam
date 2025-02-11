import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import { TextStyle, ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Icon } from "../components"
import { translate } from "../i18n"
import Profile from "../screens/Profile/Profile"
import type { ThemedStyle } from "@/theme"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"
import { useAppTheme } from "@/utils/useAppTheme"
import AlertNotification from "@/screens/Notification/Notification"
import Notes from "@/screens/Notes/Notes"
import { DashboardScreen } from "@/screens/Dashboard/Dashboard"
export type DemoTabParamList = {
  DemoCommunity: undefined
  DemoShowroom: { queryIndex?: string; itemIndex?: string }
  DemoDebug: undefined
  DemoPodcastList: undefined
}

/**
 * Helper for automatically generating navigation prop types for each route.
 *
 * More info: https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type DemoTabScreenProps<T extends keyof DemoTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<DemoTabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Tab = createBottomTabNavigator<DemoTabParamList>()

/**
 * This is the main navigator for the demo screens with a bottom tab bar.
 * Each tab is a stack navigator with its own set of screens.
 *
 * More info: https://reactnavigation.org/docs/bottom-tab-navigator/
 * @returns {JSX.Element} The rendered `DemoNavigator`.
 */
export function DemoNavigator() {
  const { bottom } = useSafeAreaInsets()
  const {
    themed,
    theme: { colors },
  } = useAppTheme()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarHideOnKeyboard: true,
        tabBarStyle: themed([$tabBar, { height: bottom + 70 }]),
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.text,
        tabBarLabelStyle: themed($tabBarLabel),
        tabBarItemStyle: themed($tabBarItem),
      }}
    >
      <Tab.Screen
        name="DemoShowroom"
        component={DashboardScreen}
        options={{
          headerShown: false,
          tabBarLabel: translate("demoNavigator:componentsTab"),
          tabBarIcon: ({ focused }) => (
            <Icon icon="home" size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="DemoDebug"
        component={Notes}
        options={{
          tabBarLabel: translate("demoNavigator:debugTab"),
          tabBarIcon: ({ focused }) => (
            <Icon icon="notes" size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="DemoCommunity"
        component={AlertNotification}
        options={{
          tabBarLabel: translate("demoNavigator:communityTab"),
          tabBarIcon: ({ focused }) => (
            <Icon icon="notification" size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="DemoPodcastList"
        component={Profile}
        options={{
          tabBarAccessibilityLabel: translate("demoNavigator:podcastListTab"),
          tabBarLabel: translate("demoNavigator:podcastListTab"),
          tabBarIcon: ({ focused }) => (
            <Icon icon="profile" size={30} />
          ),
        }}
      />

    </Tab.Navigator>
  )
}

const $tabBar: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.background,
  borderTopColor: colors.transparent,
})

const $tabBarItem: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  paddingTop: spacing.md,
})

const $tabBarLabel: ThemedStyle<TextStyle> = ({ colors, typography }) => ({
  fontSize: 12,
  fontFamily: typography.primary.medium,
  lineHeight: 16,
  color: colors.text,
})
