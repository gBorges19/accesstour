import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../pages/Welcome";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import UserProfile from "../pages/UserProfile";
import GuiasPesquisa from "../pages/GuiasPesquisa";
import Equipamentos from "../pages/Equipamentos";
import Configurações from "../pages/Configurações";
import Guias from "../pages/Guias";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name="Menu"
                component={Menu}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name="UserProfile"
                component={UserProfile}
                options={{ headerShown: false}}
            />
                        <Stack.Screen
                name="GuiasPesquisa"
                component={GuiasPesquisa}
                options={{ headerShown: false}}
            />
                        <Stack.Screen
                name="Equipamentos"
                component={Equipamentos}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name="Configurações"
                component={Configurações}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name="Guias"
                component={Guias}
                options={{ headerShown: false}}
            />
        </Stack.Navigator>
    )
}