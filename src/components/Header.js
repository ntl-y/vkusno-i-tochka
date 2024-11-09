import React, { useState } from "react";
import {
  Image,
  Linking,
  TouchableOpacity,
  View,
  Text,
  Modal,
  FlatList,
  Button,
} from "react-native";
import McDonaldsLogo from "../images/mcdonalds_ru__.png";
import Loupe from "../images/loupe.png";
import Location from "../images/location.png";
import ShoppingCart from "../images/shopping-cart.png";

import { info } from "../info";
import { COLORS } from "../../constants";

const Header = ({ cartItems, onCartPress }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <View>
      <View style={{ flexDirection: "row", gap: 70 }}>
        <View>
          <TouchableOpacity onPress={() => Linking.openURL("https://vkusnoitochka.ru/")}>
            <Image source={McDonaldsLogo} style={{ width: 200, height: 50, resizeMode: "contain" }} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={Location} style={{ width: 30, height: 45, resizeMode: "contain" }} />
          <Text style={{ marginLeft: 5, fontSize: 16 }}>Москва</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={Loupe} style={{ width: 25, height: 45, resizeMode: "contain" }} />
          <Text style={{ marginLeft: 5, fontSize: 16 }}>Поиск</Text>
        </View>
        <TouchableOpacity onPress={onCartPress} style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={ShoppingCart} style={{ width: 25, height: 45, resizeMode: "contain" }} />
          <Text style={{ marginLeft: 5, fontSize: 16 }}>Корзина ({cartItems.length})</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", padding: 10, gap: 30 }}>
        {info.map((item, idx) => (
          <TouchableOpacity
            key={idx}
            onPressIn={() => setHoveredIndex(idx)}
            onPressOut={() => setHoveredIndex(null)}
          >
            <Text style={{ marginRight: 10, fontSize: 16, color: hoveredIndex === idx ? COLORS.gray : COLORS.black }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Header;
