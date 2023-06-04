import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";
import { Colors } from "../../utils/constants";
import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";

const Input = ({
  placeholder = "Search Amazon.co.uk",
  placeholderTextColor = Colors.textPlaceHolder,
  keyboardType = "default",
  multiline = false,
  hasIcon = false,
  iconName = "plus",
  label = "",
  styleIcon = styles.icon,
  onIconPress = () => {},
  value = "",
  onChangeText = () => {},
  secureTextEntry,
  textContentType,
  autoCorrect,
  autoCapitalize,
  autoCompleteType,
  size = 30,
}) => {
  return (
    <View style={styles.wrapper}>
      {hasIcon && (
        <TouchableOpacity onPress={onIconPress}>
          <Icon name={iconName} style={styleIcon} size={size} />
        </TouchableOpacity>
      )}
      <TextInput
        style={styles.input}
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
        keyboardType={keyboardType}
        multiline={multiline}
        value={value}
        onChangeText={onChangeText}
        backgroundColor="white"
        label={label}
        textContentType={textContentType}
        secureTextEntry={secureTextEntry}
        autoCorrect={autoCorrect}
        autoCapitalize={autoCapitalize}
        autoCompleteType={autoCompleteType}
      />
    </View>
  );
};

export default Input;
