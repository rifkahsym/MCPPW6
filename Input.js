import { View, Text, TextInput } from "react-native";

const Input = ({ label, placeholder, value, onChangeText, keyboardType = 'default' }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        style={{
          borderColor: "black",
          borderWidth: 1,
          padding: 10,
          borderRadius: 8,
          marginBottom: 10
        }}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default Input;