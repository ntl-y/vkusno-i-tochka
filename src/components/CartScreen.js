import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import Header from '../components/Header';
import { COLORS } from '../constants';

const CartScreen = ({ route, navigation }) => {
  const { cartItems } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white, padding: 20 }}>
      <Header cartItems={cartItems} onCartPress={() => navigation.goBack()} />
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20 }}>Корзина</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
            <Text>{item.name} (x{item.quantity})</Text>
            <Text>{item.price}</Text>
          </View>
        )}
      />
      <Button title="Вернуться" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default CartScreen;
