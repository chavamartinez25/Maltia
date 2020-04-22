import { createStackNavigator } from "react-navigation-stack";
import LogInScreen from "../screens/Calendar";

const LogInScreenStacks = createStackNavigator({
  Calendar: {
    screen: LogInScreen,
    navigationOptions: () => ({
      title: "LogIn Maltia",
    }),
  },
});

export default LogInScreenStacks;
