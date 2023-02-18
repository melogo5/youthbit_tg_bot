import React, { FC } from 'react';
import { useUnit } from "effector-react";
import { Button, Checkbox, Input, Typography } from 'antd';
import { useForm } from 'effector-react-form';

import { registerForm, registerFormSubmit, $user } from './model';

import "./Register.css";
import { InputField } from '../../form/input';
import { SelectField } from '../../form/select';
import { useEffect } from 'react';

const {Title} = Typography;

const Register: FC = () => {
    const { controller, handleSubmit } = useForm({ form: registerForm });

    const user = useUnit($user);

    useEffect(() => console.log({user}), [user]);

    const roleOptions = [
        {value: "student", label: "Студент"},
        {value: "specialist", label: "Молодой специалист"},
        {value: "", label: ""}
    ]

    return (
        <div className="page-wrap page-register">
            <div className="section-wrap">
                <Title>Регистрация</Title>
                
                <InputField controller={controller({ name: "fullName" })} label={"ФИО"} />
                <SelectField controller={controller({ name: "role" })} label={"Роль"} options={roleOptions} />
                <InputField controller={controller({ name: "phone" })} label={"Номер телефона"} />
                <InputField controller={controller({ name: "email" })} label={"Электронная почта"} />
                <InputField controller={controller({ name: "password" })} label={"Пароль"} />

                <Button onClick={registerFormSubmit} type="primary" htmlType="submit">
                    Зарегестрироваться
                </Button>
            </div>

            {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
        </div>
    );
};

export default Register;