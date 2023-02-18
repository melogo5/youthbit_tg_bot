import React, { FC, useState } from 'react';
import { useUnit } from "effector-react";
import { Button, Checkbox, Input } from 'antd';
import { useForm } from 'effector-react-form';

import { filtersForm, filtersFormSubmit, $filters } from './model';

import "./EventFilters.css";
import { SelectField } from '../../form/select';
import { useEffect } from 'react';

const EventFilters: FC = () => {
    const { controller, handleSubmit } = useForm({ form: filtersForm });
    // const { universities, setUsiversities } = useState([]);

    const filters = useUnit($filters);

    useEffect(() => console.log({ filters }), [filters]);

    const typeOptions = [
        { value: "cultural", label: "Культурно-познавательные" },
        { value: "scientific", label: "Научно-популярные" },
        { value: "proforientation", label: "Профориентационные" },
        { value: "", label: "Не указан" },
    ];

    const orgOptions = [
        { value: 1, label: "1" },
        { value: 2, label: "2" },
        { value: 3, label: "3" },
        { value: 4, label: "4" },
    ];
    const subjectsOptions = [
        { value: 1, label: "1" },
        { value: 2, label: "2" },
        { value: 3, label: "3" },
        { value: 4, label: "4" },
    ];
    const locationOptons = [
        { value: 1, label: "1" },
        { value: 2, label: "2" },
        { value: 3, label: "3" },
        { value: 4, label: "4" },
    ];
    //сделать запрос за опциями? или хардкод если будет мало времени

    return (
        <div className="page-filters">
            {/* <InputField controller={controller({ name: "login" })} label={"Электронная почта"} /> */}
            {/* <InputField controller={controller({ name: "password" })} label={"Пароль"} /> */}
            <SelectField controller={controller({ name: "eventType" })} label={"Тип события"} options={typeOptions} />
            <SelectField controller={controller({ name: "educationalOrganization" })} label={"Образовательная организация"} options={orgOptions} />
            <SelectField controller={controller({ name: "rusSubject" })} label={"Субъект РФ"} options={subjectsOptions} />
            <SelectField controller={controller({ name: "location" })} label={"Населенный пункт"} options={locationOptons} />

            <Button onClick={filtersFormSubmit} type="primary" htmlType="submit">
                Войти
            </Button>

            {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
        </div>
    );
};

export default EventFilters;