import React, { FC, useState } from 'react';
import { useUnit } from "effector-react";
import { Button, Checkbox, Input, Typography } from 'antd';
import { useForm } from 'effector-react-form';

import { scienceFiltersForm, scienceFiltersFormSubmit, $scienceFilters } from './model';

import "./ScienceFilters.css";
import { SelectField } from '../../form/select';
import { useEffect } from 'react';

const { Title } = Typography;

const ScienceFilters: FC = () => {
    const { controller, handleSubmit } = useForm({ form: scienceFiltersForm });
    // const { universities, setUsiversities } = useState([]);

    const filters = useUnit($scienceFilters);

    useEffect(() => console.log({ filters }), [filters]);
    
    const orgOptions = [// с бека
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

    //?ко-во совпадений с бека присылать?

    return (
        <div className="page-filters">
            <Title>События</Title>
            Cовпадений: {13}
            {/* <InputField controller={controller({ name: "login" })} label={"Электронная почта"} /> */}
            {/* <InputField controller={controller({ name: "password" })} label={"Пароль"} /> */}
            <SelectField controller={controller({ name: "educationalOrganization" })} label={"Образовательная организация"} options={orgOptions} />
            <SelectField controller={controller({ name: "rusSubject" })} label={"Субъект РФ"} options={subjectsOptions} />
            <SelectField controller={controller({ name: "location" })} label={"Населенный пункт"} options={locationOptons} />

            <Button onClick={scienceFiltersFormSubmit} type="primary" htmlType="submit">
                Показать совпадения
            </Button>
            <Button>
                Очистить фильтр
            </Button>

            {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
        </div>
    );
};

export default ScienceFilters;