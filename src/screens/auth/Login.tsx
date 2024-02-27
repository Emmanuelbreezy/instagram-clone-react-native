import CustomButton from "@/components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { Formik } from "formik";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { loginInitialValue, loginValidationSchema } from "./util";
import InputBox from "@/components/InputBox";


type RootStackParamList = {
    Signup: undefined;
    Home: undefined;
  };

type NavigationProp = StackNavigationProp<RootStackParamList, 'Signup'>;


const Login = () => {
    const navigation = useNavigation<NavigationProp>()
  const handleLogin = () => {
    navigation.navigate('Home')
  };
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Image style={styles.image} source={require("@/assets/logo.png")} />
        <Formik
          initialValues={loginInitialValue}
          validationSchema={loginValidationSchema}
          onSubmit={handleLogin}
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
              <View>
                <View style={styles.horiContainer}>
                  <InputBox
                    placeholder="Phone number, email address or username"
                    value={values.username}
                    onChangeText={handleChange("username")}
                    onBlur={handleBlur("username")}
                    error={errors.username}
                    touched={touched.username}
                  />
                  <InputBox
                    placeholder="Password"
                    value={values.password}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    secureTextEntry={true}
                    error={errors.password}
                    touched={touched.password}
                  />
                  <CustomButton
                    title="Log In"
                    onPress={handleSubmit}
                    disabled={!isValid}
                  />
                </View>
                <View style={styles.forgotContainer}>
                  <Text style={styles.infoText}>
                    Forgotten your login details?
                  </Text>
                  <TouchableOpacity>
                    <Text style={[styles.infoText, styles.infoTextBold]}>
                      Get help with signing in.
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        </Formik>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.infoText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={[styles.infoText, styles.infoTextBold]}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    //justifyContent: "center",
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 0,
  },
  image: {
    width: 200,
    height: 70,
    alignSelf: "center",
    marginBottom: 15,
  },
  horiContainer: {
    gap: 2,
  },
  forgotContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
    paddingVertical: 15,
  },
  bottomContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
    borderTopWidth: 1,
    borderTopColor: "#eee",
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

export default Login;
