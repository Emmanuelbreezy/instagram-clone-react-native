import * as yup from "yup"

export const loginInitialValue = {
    username: '',
    password: '',
}


export const loginValidationSchema = yup.object().shape({
    username: yup.string().trim().required("Username is required"),
    password: yup.string().trim().required("Password is required")
})



export const signupInitialValue = {
    fullName: '',
    number: '',
    email: '',
    password: '',
}

export const signupValidationSchema = yup.object().shape({
    number: yup.string().trim()
    .min(11, "Mobile number must be 11 characters")
    .required("Mobile number is required"),
    fullName: yup.string().trim().required("fullname is required"),
    email: yup.string().trim().email().required("fullname is required"),
    password: yup.string().trim().required("Password is required")

})
