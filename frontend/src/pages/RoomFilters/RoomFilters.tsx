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
        { value: "1", label: "Дальневосточный" },
        { value: "2", label: "Приыволжский" },
        { value: "3", label: "Северо-Западный" },
        { value: "4", label: "Северо-Кавказский" },
        { value: "5", label: "Сибирский" },
        { value: "6", label: "Центральный" },
        { value: "7", label: "Уральский" },
        { value: "8", label: "Южный" },
        { value: "", label: "Не указан" },
    ];

    const orgOptions = [// с бека
        { value: 1, label: "Алтайский край" },
        { value: 2, label: "Иркутская область" },
        { value: 3, label: "Кемеровская область" },
        { value: 4, label: "Красноярский край" },
        { value: 5, label: "Новосибирская область" },
        { value: 6, label: "Омская область" },
        { value: 7, label: "Республика Алтай" },
        { value: 8, label: "Республика Тыва, город Кызыл" },
        { value: 9, label: "Республика Хакасия" },
        { value: 10, label: "Томская область" },
    ];
    const subjectsOptions = [
        { value: 1, label: "Артыбаш" },
        { value: 2, label: "Байкал, оз. (Иркутск)" },
        { value: 3, label: "Барнаул" },
        { value: 4, label: "Бийск" },
        { value: 5, label: "Горно-Алтайск" },
        { value: 6, label: "Иркутск" },
        { value: 7, label: "Кемерово" },
        { value: 8, label: "Красноярск" },
        { value: 9, label: "Кызыл" },
    ];
    const locationOptons = [
        { value: 1, label: "Сибирский федеральный университет" },
    ];

    const typeRasOpt = [
        { value: 1, label: "1-но местный номер" },
        { value: 2, label: "2-х местная квартира" },
        { value: 3, label: "2-х местный номер" },
        { value: 4, label: "4-х местная квартира" },
        { value: 5, label: "4-х местный номер" },
    ];
    // const locationOptons = [
    //     { value: 1, label: "Сибирский федеральный университет" },
    // ];
    //сделать запрос за опциями? или хардкод если будет мало времени

    //?ко-во совпадений с бека присылать?

    return (
        <div className="page-wrap page-filters">
            <div className="section-wrap">
                <Title>Куда вы хотите поехать?</Title>
                <SelectField controller={controller({ name: "eventType" })} label={"Федеральный округ"} options={typeOptions} />
                <SelectField controller={controller({ name: "rusSubject" })} label={"Субъект РФ"} options={orgOptions} />
                <SelectField controller={controller({ name: "location" })} label={"Населенный пункт"} options={subjectsOptions} />
                <SelectField controller={controller({ name: "educationalOrganization" })} label={"Образовательная организация"} options={locationOptons} />
                <SelectField controller={controller({ name: "educationalOrganization" })} label={"Тип размещения"} options={typeRasOpt} />
                {/* <SelectField controller={controller({ name: "educationalOrganization" })} label={"Питание"} options={orgOptions} /> */}

                <div className="buttons-wrap">
                    <Button onClick={() => {location.href = "/#/rooms"}} type="primary" htmlType="submit">
                        Искать
                    </Button>
                    <Button>
                        Очистить фильтр
                    </Button>
                </div>
            </div>
            {/* <div className="section-wrap">
                <div className="info-wrap">
                    <p className="text_info">
                        Cовпадений: <b>{13}</b>
                    </p>
                </div>
            </div> */}

            {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
        </div>
    );
};

export default RoomFilters;