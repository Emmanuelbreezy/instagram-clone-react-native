import { FC } from "react";
import { FormikHelpers } from "formik";
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AppColor } from "../utils/AppColors";

// type PressEventHandler = (event: GestureResponderEvent) => void;
// type FormikPressEventHandler = (values: any, formikHelpers: FormikHelpers<any>) => void;



interface ButtonType {
  title: string;
  disabled?: boolean;
  onPress?: any
};

const CustomButton: FC<ButtonType> = ({ title, disabled, onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.buttonContainer, {
             backgroundColor: disabled ? AppColor.DISABLE_BUTTON : AppColor.BUTTON,
        }]}>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 350,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    paddingVertical: 12,
    fontSize: 18,
    textAlign: "center",
  },
});

export default CustomButton;
