import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack  
  //make it disable
  screenOptions={{headerShown : false}}
  />;
}
