import React, { useCallback } from "react";
import validator from 'validator';

//хук управления формой и валидации формы
export function useFormWithValidation() {
    const [values, setValues] = React.useState({});
    const [errors, setErrors] = React.useState({});

    const handleChange = (event) => {
        const target = event.target;
        const msg = checkValidation(target);
        const name = target.name;
        const value = target.value;
        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: msg });
    };

    const checkValidation = (target) => {
        let result = '';
        switch (target.name) {
            case 'name': {
                result = (validator.isEmpty(target.value)) ? 'is not a valid' : 'valid'; break;
            }
            case 'email': {
                result = (!validator.isEmail(target.value)) ? 'is not a valid' : 'valid'; break;
            }
            case 'password': {
                result = (!validator.isStrongPassword(target.value)) ? 'is not a valid' : 'valid'; break;
            }
            default: result = 'is not a valid'; break;
        }
        return result;
    }
    const checkValidForm = (n) => {
        const arr = (Object.keys(errors).map((k) => errors[k] === 'valid' ? true : false).filter((c) => c === true));
        return arr.reduce((acc, cur) => acc && cur, {}) && arr.length === n;
    }

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}) => {
            setValues(newValues);
            setErrors(newErrors);
        },
        [setValues, setErrors]
    );


    return { values, handleChange, errors, checkValidForm, resetForm };
}