import { createStackNavigator } from "react-navigation-stack";
import CalendarScreen from "../screens/Calendar";

const CalendarScreenStacks = createStackNavigator({
  Calendar: {
    screen: CalendarScreen,
    navigationOptions: () => ({
      title: "Calendario de pagos maltia",
    }),
  },
});

export default CalendarScreenStacks;
