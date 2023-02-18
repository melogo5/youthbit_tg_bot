import React, { FC } from 'react';
import { useUnit } from "effector-react";
import { Button, Checkbox, Input } from 'antd';
import { useForm } from 'effector-react-form';

import { registerForm, registerFormSubmit, $user } from './model';

import "./Register.css";
import { InputField } from '../../form/input';
import { useEffect } from 'react';

const Register: FC = () => {
    const { controller, handleSubmit } = useForm({ form: registerForm });

    const user = useUnit($user);

    useEffect(() => console.log({user}), [user]);

    return (
        <div className="page-register">
            <InputField controller={controller({ name: "register" })} label={"ФИО"} />
            <InputField controller={controller({ name: "email" })} label={"Номер телефона"} />
            
            <select>
                <option>Студент</option>
                <option>Молодой специалист</option>
            </select>

            <InputField controller={controller({ name: "email" })} label={"Email"} />
            <InputField controller={controller({ name: "password" })} label={"Пароль"} />


            <Button onClick={registerFormSubmit} type="primary" htmlType="submit">
                Зарегестрироваться
            </Button>


            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
    );
};

export default Register;