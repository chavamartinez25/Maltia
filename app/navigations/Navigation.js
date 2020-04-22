import React from "react";
import { Icon } from "react-native-elements";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import HomeScreenStacks from "./HomeStacks";
import CalendarScreenStack from "./CalendarStacks";
import SettingsScreenStack from "./SettingStaks";
import CameraScreenStacks from "./CameraStaks";

// Dentro de esta constante existiran todas las rutas de navegación de la app
const NavigationStaks = createBottomTabNavigator(
  {
    // Se declaran Staks de navegacion
    // Pantalla de calendario
    Calendar: {
      screen: CalendarScreenStack,
      navigationOptions: () => ({
        tabBarLabel: "Calendario",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-comunity"
            name="date-range"
            size={22}
            color={tintColor}
          />
        ),
      }),
    },
    // pantalla inicio de aplicacion
    Home: {
      screen: HomeScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: "Inicio",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-comunity"
            name="home"
            size={22}
            color={tintColor}
          />
        ),
      }),
    },
    // Configuraciones de aplicacion
    Settings: {
      screen: SettingsScreenStack,
      navigationOptions: () => ({
        tabBarLabel: "Configuraciones",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-comunity"
            name="settings"
            size={22}
            color={tintColor}
          />
        ),
      }),
    },

    // Configuraciones de aplicacion
    Camera: {
      screen: CameraScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: "Camara",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-comunity"
            name="camera"
            size={22}
            color={tintColor}
          />
        ),
      }),
    },
  },
  // Esta propiedad nos permite decidir en qué pagina abrirá la app al iniciarla
  {
    initialRouteName: "Home",
    order: ["Calendar", "Home", "Settings", "Camera"],
    tabBarOptions: {
      inactiveTintColor: "#646464",
      activeTintColor: "#FF3B3B",
    },
  }
);
// Cada Stak es un paquete de navegación
// Se tienen que exportar

export default createAppContainer(NavigationStaks);
