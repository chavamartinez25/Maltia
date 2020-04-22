import { createStackNavigator } from "react-navigation-stack";
import SettingScreen from "../screens/Settings";

const SettingsScreenStacks = createStackNavigator({
  Settings: {
    screen: SettingScreen,
    navigationOptions: () => ({
      title: "Settings Maltia",
    }),
  },
});

export default SettingsScreenStacks;
