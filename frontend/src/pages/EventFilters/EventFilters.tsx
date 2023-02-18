import React, { FC, useState } from 'react';
import { useUnit } from "effector-react";
import { Button, Checkbox, Input, Typography } from 'antd';
import { useForm } from 'effector-react-form';

import { eventFiltersFormSubmit, eventFiltersForm, $eventFilters } from './model';

import "./EventFilters.css";
import { SelectField } from '../../form/select';
import { useEffect } from 'react';

const { Title } = Typography;

const EventFilters: FC = () => {
    const { controller, handleSubmit } = useForm({ form: eventFiltersForm });
    // const { universities, setUsiversities } = useState([]);

    const filters = useUnit($eventFilters);

    useEffect(() => console.log({ filters }), [filters]);

    const typeOptions = [
        { value: "cultural", label: "Культурно-познавательные" },
        { value: "scientific", label: "Научно-популярные" },
        { value: "proforientation", label: "Профориентационные" },
        { value: "", label: "Не указан" },
    ];

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
        <div className="page-wrap page-filters">
            <div className="section-wrap">
                <Title>События</Title>
                {/* <InputField controller={controller({ name: "login" })} label={"Электронная почта"} /> */}
                {/* <InputField controller={controller({ name: "password" })} label={"Пароль"} /> */}
                <SelectField controller={controller({ name: "eventType" })} label={"Тип события"} options={typeOptions} />
                <SelectField controller={controller({ name: "educationalOrganization" })} label={"Образовательная организация"} options={orgOptions} />
                <SelectField controller={controller({ name: "rusSubject" })} label={"Субъект РФ"} options={subjectsOptions} />
                <SelectField controller={controller({ name: "location" })} label={"Населенный пункт"} options={locationOptons} />
                
                <div className="buttons-wrap">
                    <Button onClick={eventFiltersFormSubmit} type="primary" htmlType="submit">
                        Показать совпадения
                    </Button>
                    <Button>
                        Очистить фильтр
                    </Button>
                </div>
            </div>
            <div className="section-wrap">
                <div className="info-wrap">
                    <p className="text_info">
                        Cовпадений: <b>{13}</b>
                    </p>
                </div>
            </div>

            {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
        </div>
    );
};

export default EventFilters;