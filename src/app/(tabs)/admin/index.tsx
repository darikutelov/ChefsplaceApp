import { Text, SafeAreaView, Pressable, StyleSheet } from "react-native"
import { Href, Link } from "expo-router"

export default function Admin() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Pressable style={styles.menuItem}>
          <Link href={"admin/categories" as Href}>
            <Text style={styles.menuItemText}>Categories</Text>
          </Link>
        </Pressable>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  menuItem: {
    backgroundColor: "#1D2125",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  menuItemText: {
    color: "white"
  }
})
