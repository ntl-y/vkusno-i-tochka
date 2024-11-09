import React from "react";
import { Text, Image, View, ScrollView, TouchableOpacity } from "react-native";

import { COLORS, SIZES } from "../../constants";
import { categories } from "../categories";

const Categories = () => {
  return (
    <View style={{ paddingTop: 40 }}>
      <View style={{ alignItems: "center" }}>
        <Image
          source={{
            uri: "https://vkusnoitochka.ru/upload/iblock/b2f/x8o7rv14lur0rbix28amhx04ewzxt8hc/SITEn_SemyaVmetse_Help_1200x400.jpg",
          }}
          style={{
            alignItems: "center",
            width: "100%",
            height: 450,
            borderRadius: 30,
            marginBottom: 40,
          }}
        />
      </View>

      <View style={{ flexDirection: "row" }}>
        <Image
          source={{
            uri: "https://1000logos.net/wp-content/uploads/2022/06/Vkusno-%E2%80%93-i-Tochka-Emblem.png",
          }}
          style={{
            width: 55,
            height: 35,
            borderRadius: 50,
            resizeMode: "cover",
            marginRight: 15,
          }}
        ></Image>
        <Text
          style={{
            fontSize: SIZES.h1,
            fontWeight: "bold",
            color: COLORS.black,
            paddingBottom: 30,
          }}
        >
          Приходи к нам!
        </Text>
      </View>
      <View style={{ flexDirection: "row", gap: 20 }}>
        <View
          style={{
            width: "50%",
            height: 50,
            backgroundColor: COLORS.green,
            borderRadius: 30,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: COLORS.white, fontWeight: "bold" }}>
            Меню твоего города: Москва
          </Text>
        </View>
        <View
          style={{
            width: "50%",
            height: 50,
            backgroundColor: COLORS.orange,
            borderRadius: 30,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: COLORS.white, fontWeight: "bold" }}>
            Скачивай приложение
          </Text>
        </View>
      </View>

      <Text
        style={{
          fontSize: SIZES.h1,
          fontWeight: "bold",
          color: COLORS.black,
          marginTop: 30,
        }}
      >
        Наше меню
      </Text>

      <View style={{ marginTop: 30 }}>
        <ScrollView
          horizontal={true} 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={{ paddingHorizontal: 10 }} 
        >
          {categories.map((cat, idx) => (
            <TouchableOpacity
              key={`category-${idx}`}
              style={{
                backgroundColor: COLORS.lightgray,
                borderRadius: 20,
                paddingVertical: 10,
                paddingHorizontal: 15,
                marginRight: 10,
              }}
            >
              <Text
                style={{
                  fontSize: SIZES.h4,
                  color: COLORS.black,
                  textAlign: "center",
                }}
              >
                {cat.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Categories;
