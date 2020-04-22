import { createStackNavigator } from "react-navigation-stack";
import RegisterUsrScreen from "../screens/Calendar";

const RegisterUsrScreenStacks = createStackNavigator({
  Calendar: {
    screen: RegisterUsrScreen,
    navigationOptions: () => ({
      title: "Registro de usuarios Maltia",
    }),
  },
});

export default RegisterUsrScreenStacks;
