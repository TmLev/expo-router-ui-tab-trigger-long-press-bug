import { TabList, Tabs, TabSlot, TabTrigger } from "expo-router/ui";
import { Text } from "react-native";

export default function RootLayout() {
  return (
    <Tabs style={{ padding: 120 }}>
      <TabList>
        <TabTrigger
          name="index"
          href="/"
          onPress={(e) => {
            console.log("TabTrigger.onPress", { e });
          }}
          onLongPress={(e) => {
            console.log("TabTrigger.onLongPress", { e });
          }}
        >
          <Text>Index</Text>
        </TabTrigger>

        <TabTrigger
          name="another"
          href="/another"
          onPress={(e) => {
            console.log("TabTrigger.onPress", { e });
          }}
          onLongPress={(e) => {
            console.log("TabTrigger.onLongPress", { e });
          }}
        >
          <Text>Another</Text>
        </TabTrigger>
      </TabList>

      <TabSlot />
    </Tabs>
  );
}
