const validationRules = {
    name: {
        required: "Name is required",
        minLength: {
            value: 2,
            message: "Name must be at least 2 characters long",
        },
        maxLength: {
            value: 50,
            message: "Name cannot exceed 50 characters",
        },
    },
    email: {
        required: "Email is required",
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
        },
    },
    password: {
        required: "Password is required",
        minLength: {
            value: 6,
            message: "Password must be at least 6 characters long",
        },
        matches: {
            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
            message:
                "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
        },
    },
    confirmPassword: {
        required: "Confirm Password is required",
        validate: (value: any, { password }: any) => {
            return value === password || "Passwords do not match";
        },
    },
    phone: {
        matches: {
            value: /^\+(?:[0-9] ?){6,14}[0-9]$/,
            message: "Invalid phone number",
        },
        required: "Phone number is required",
    },
    address: {
        required: "Address is required",
    },
    age: {
        positive: "Age must be a positive number",
        integer: "Age must be an integer",
        required: "Age is required",
    },
    terms: {
        oneOf: [true, "You must accept the terms and conditions"],
        required: "You must accept the terms and conditions",
    },
    customField: {
        test: {
            name: "len",
            message: "Custom field must be exactly 10 characters",
            test: (val: any) => (val ? val.length === 10 : true),
        },
    },
};

export default validationRules;
