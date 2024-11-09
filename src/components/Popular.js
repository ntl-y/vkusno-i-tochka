import React, { useState } from 'react';
import { Text, Image, TouchableOpacity, View, Button } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { popular } from '../popular';

const Popular = ({ onAddToCart }) => {
  return (
    <View style={{ paddingTop: 20 }}>
      <View style={{ marginTop: 30, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 10 }}>
        {popular.map((product, idx) => (
          <ProductCard key={idx} product={product} onAddToCart={onAddToCart} />
        ))}
      </View>
    </View>
  );
};

const ProductCard = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <View style={{ width: '30%', marginBottom: 20 }}>
      <View style={{
        height: 350,
        justifyContent: 'center',
        borderRadius: SIZES.radius,
        padding: 10,
        backgroundColor: COLORS.lightgray,
        flexDirection: 'column'
      }}>
        <Image source={{ uri: product.image }} style={{ width: "100%", height: 250, resizeMode: 'contain' }} />
        <Text style={{ fontSize: SIZES.h4, color: COLORS.black, textAlign: 'center' }}>{product.name}</Text>
        <Text style={{ fontSize: SIZES.h4, color: COLORS.black, textAlign: 'left', fontWeight: 'bold' }}>{product.price}</Text>
        
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
          <Button title="-" onPress={handleDecrease} />
          <Text>{quantity}</Text>
          <Button title="+" onPress={handleIncrease} />
        </View>
        <TouchableOpacity
          style={{ backgroundColor: COLORS.primary, padding: 10, borderRadius: 5 }}
          onPress={() => onAddToCart(product, quantity)}
        >
          <Text style={{ color: COLORS.white, textAlign: 'center' }}>Добавить в корзину</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Popular;
