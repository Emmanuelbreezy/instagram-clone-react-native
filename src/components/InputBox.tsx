import { FC } from "react";
import { KeyboardTypeOptions, NativeSyntheticEvent, StyleSheet, Text, TextInput, TextInputFocusEventData, View } from "react-native";

type InputType = {
  value?: string;
  placeholder: string;
  onChangeText?: ((text: string) => void) | undefined;
  secureTextEntry?: boolean | undefined;
  onBlur?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined
  keyboardType?: KeyboardTypeOptions | undefined
  maxLength?: number | undefined
  error?: string | undefined
  touched?: boolean | undefined
};

const InputBox: FC<InputType> = ({
  value,
  placeholder,
  secureTextEntry,
  onChangeText,
  onBlur,
  keyboardType,
  maxLength,
  error,
  touched
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        value={value}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        onBlur={onBlur}
        keyboardType={keyboardType}
        maxLength={maxLength}
      />
      {error && touched && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    minHeight: 60,
  },
  textInput: {
    borderWidth: 1,
    width: 350,
    borderColor: "#ddd",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 9.5,
    backgroundColor: "#fff",
  },
  errorText:{
    paddingLeft: 5,
    color: "red",
    fontSize: 12,
    marginVertical: 8,
  }
});

export default InputBox;
