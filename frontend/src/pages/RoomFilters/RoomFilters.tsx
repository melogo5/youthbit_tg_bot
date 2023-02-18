import React, { FC, useState } from 'react';
import { useUnit } from "effector-react";
import { Button, Checkbox, Input, Typography } from 'antd';
import { useForm } from 'effector-react-form';

import { roomFiltersForm, roomFiltersFormSubmit, $roomFilters } from './model';

import "./RoomFilters.css";
import { SelectField } from '../../form/select';
import { useEffect } from 'react';

const { Title } = Typography;

const RoomFilters: FC = () => {
    const { controller, handleSubmit } = useForm({ form: roomFiltersForm });
    // const { universities, setUsiversities } = useState([]);

    const filters = useUnit($roomFilters);

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
                <Title>Варианты размещения.</Title>
                <SelectField controller={controller({ name: "eventType" })} label={"Федеральный округ"} options={typeOptions} />
                <SelectField controller={controller({ name: "rusSubject" })} label={"Субъект РФ"} options={subjectsOptions} />
                <SelectField controller={controller({ name: "location" })} label={"Населенный пункт"} options={locationOptons} />
                <SelectField controller={controller({ name: "educationalOrganization" })} label={"Образовательная организация"} options={orgOptions} />
                <SelectField controller={controller({ name: "educationalOrganization" })} label={"Тип размещения"} options={orgOptions} />
                <SelectField controller={controller({ name: "educationalOrganization" })} label={"Питание"} options={orgOptions} />

                <Button onClick={roomFiltersFormSubmit} type="primary" htmlType="submit">
                    Показать совпадения
                </Button>
                <Button>
                    Очистить фильтр
                </Button>
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

export default RoomFilters;