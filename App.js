import React, { useState } from "react";
import { View, Modal, FlatList, Text, Button } from "react-native";
import { COLORS } from "./constants";
import Categories from "./src/components/Categories";
import Header from "./src/components/Header";
import Popular from "./src/components/Popular";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
	const [cartItems, setCartItems] = useState([]);
	const [isCartVisible, setCartVisible] = useState(false);
  
	const handleAddToCart = (product, quantity) => {
	  const itemIndex = cartItems.findIndex((item) => item.id === product.id);
	  if (itemIndex !== -1) {
		const updatedItems = [...cartItems];
		updatedItems[itemIndex].quantity += quantity;
		setCartItems(updatedItems);
	  } else {
		setCartItems([...cartItems, { ...product, quantity }]);
	  }
	};
  
	const handleCartPress = () => setCartVisible(true);
	const handleCloseCart = () => setCartVisible(false);

  return (
    <View
      style={{
        padding: 90,
        paddingTop: 55,
        paddingBottom: 75,
        backgroundColor: COLORS.white,
      }}
    >
      <Header cartItems={cartItems} onCartPress={handleCartPress} />
      <Modal visible={isCartVisible} animationType="slide">
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 20 }}>
            Корзина
          </Text>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 15,
                }}
              >
                <Text>
                  {item.name} (x{item.quantity})
                </Text>
                <Text>{item.price}</Text>
              </View>
            )}
          />
          <Button title="Закрыть корзину" onPress={handleCloseCart} />
        </View>
      </Modal>
      <Categories />
      <Popular onAddToCart={handleAddToCart} />
    </View>
  );
}
