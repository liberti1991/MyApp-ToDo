import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NewTask } from "../screens/NewTask";
import { Tasks } from "../screens/Tasks";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="tasks" component={Tasks} />
      <Screen name="new" component={NewTask} />
    </Navigator>
  );
}
