import { createStackNavigator } from "react-navigation-stack";
import CameraScreen from "../screens/CameraApp";

const CameraScreenStacks = createStackNavigator({
  Calendar: {
    screen: CameraScreen,
    navigationOptions: () => ({
      title: "Calendario de pagos maltia",
    }),
  },
});

export default CameraScreenStacks;
