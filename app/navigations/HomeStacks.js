import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/Home";

const HomeScreenStacks = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      title: "Home Maltia",
    }),
  },
});

// Para exportar el Stack de Home
export default HomeScreenStacks;
