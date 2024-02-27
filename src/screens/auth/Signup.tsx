import { Formik } from "formik";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "@/components/CustomButton";
import InputBox from "@/components/InputBox";
import { signupInitialValue, signupValidationSchema } from "./util";

type RootStackParamList = {
  Login: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;



const Signup = () => {
  const navigation = useNavigation<NavigationProp>()

  const handleRegister = () => {
    console.log("Login");
  };
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View>
          <Image style={styles.image} source={require("@/assets/logo.png")} />
          <Text style={styles.heading}>
            Sign up to see photos and videos from friends
          </Text>
        </View>
        <Formik
          initialValues={signupInitialValue}
          validationSchema={signupValidationSchema}
          onSubmit={handleRegister}
        >
          {({
            handleSubmit,
            handleBlur,
            handleChange,
            values,
            touched,
            errors,
            isValid,
          }) => {
            return (
              <View style={styles.horiContainer}>
                <InputBox
                  placeholder="Mobile number"
                  value={values.number}
                  onChangeText={handleChange("number")}
                  onBlur={handleBlur("number")}
                  error={errors.number}
                  touched={touched.number}
                  keyboardType="numeric"
                />
                <InputBox
                  placeholder="Full Name"
                  value={values.fullName}
                  onChangeText={handleChange("fullName")}
                  onBlur={handleBlur("fullName")}
                  error={errors.fullName}
                  touched={touched.fullName}
                  keyboardType="default"
                />
                <InputBox
                  placeholder="Email Address"
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("fullName")}
                  error={errors.email}
                  touched={touched.email}
                  keyboardType="default"
                />
                <InputBox
                  placeholder="Password"
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  error={errors.password}
                  touched={touched.password}
                  keyboardType="default"
                />
                <CustomButton
                  title="Sign up"
                  onPress={handleSubmit}
                  disabled={!isValid}
                />
              </View>
            );
          }}
        </Formik>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.infoText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={[styles.infoText, styles.infoTextBold]}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: 200,
    height: 70,
    alignSelf: "center",
    marginBottom: 2,
  },
  heading: {
    width: 300,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
    alignSelf: "center",
  },
  formContainer: {
    flex: 1,
    gap: 20,
    justifyContent: "center",
  },
  horiContainer: {
    gap: 2,
  },
  bottomContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
    marginBottom: 20,
    paddingTop: 10,
  },
  infoText: {
    fontSize: 13,
    textAlign: "center",
    fontWeight: "400",
    color: "#151515",
  },
  infoTextBold: {
    fontWeight: "bold",
    fontSize: 13.5,
  },
});

export default Signup;
