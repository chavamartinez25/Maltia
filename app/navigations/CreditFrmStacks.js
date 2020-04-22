import { createStackNavigator } from "react-navigation-stack";
import CreditFrmScreen from "../screens/Settings";

const CreditFrmStacks = createStackNavigator({
  Settings: {
    screen: CreditFrmScreen,
    navigationOptions: () => ({
      title: "Formulatio de solicitud para credito",
    }),
  },
});

export default CreditFrmStacks;
