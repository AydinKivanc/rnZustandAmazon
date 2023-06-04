import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const FullWidthButton = ({
  title,
  onPress,
  buttonStyle,
  titleStyle,
  backgroundColor = "orange",
  borderRadius = 8,
}) => {
  const buttonStyles = [
    styles.button,
    { backgroundColor, borderRadius },
    buttonStyle,
  ];
  const titleStyles = [styles.title, titleStyle];

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
      <Text style={titleStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 8,
    shadowColor: "black", // Gölgenin rengi
    shadowOffset: { width: 0, height: 2 }, // Gölgenin konumu (genişlik ve yükseklik)
    shadowOpacity: 0.2, // Gölgenin opaklığı
    shadowRadius: 2, // Gölgenin yayılma yarıçapı
    elevation: 2, // Android'de gölgeyi etkinleştirir
  },
  title: {
    fontSize: 16,
    color: "black",
    fontWeight: 400,
  },
});

export default FullWidthButton;
