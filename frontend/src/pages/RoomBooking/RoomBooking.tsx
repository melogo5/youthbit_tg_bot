import React from "react";
import { useUnit } from "effector-react";
import { Button, Radio, Typography } from 'antd';
import { useForm } from 'effector-react-form';

import { roomBookingForm, roomBookingFormSubmit } from './model';

import "./RoomBooking.css";
import { SelectField } from "../../form/select";
import { DocsUploadField, InputField, TextAreaField } from "../../form/input";
import { DatePickerField } from "../../form/datePicker";

const { Title } = Typography;

const RoomBooking: React.FC = () => {
    const { controller, handleSubmit } = useForm({ form: roomBookingForm });

    const roomTypeOptions = [
        { value: "roomId", label: "Комната из запроса" },
        { value: "", label: "" },
    ];

    const optionsWithDisabled = [
        { label: 'Образовательная организация', value: '', disabled: true },
        { label: 'Студент', value: 'student', disabled: true },
    ];

    return (
        <div>
            <Title>Заявка на бронирование</Title>
            <SelectField controller={controller({ name: "roomType" })} label={"Тип размещения"} options={roomTypeOptions} />
            <InputField controller={controller({ name: "roomCount" })} label={"Количество мест"} />
            <DatePickerField controller={controller({ name: "dates" })} label={"Период проживания"} />
            <TextAreaField controller={controller({ name: "comment" })} label={"Комментарий"} />

            <Radio.Group options={optionsWithDisabled} value='student' />

            <InputField controller={controller({ name: "fullName" })} label={"ФИО"} />
            {/* <div>
                <Title level={4}>Контакты для обратной связи</Title>
                <InputField controller={controller({ name: "phone" })} label={"Контактный телефон"} />
                <InputField controller={controller({ name: "emain" })} label={"Электронная почта"} />
                <InputField controller={controller({ name: "additionalInfo" })} label={"Дополнительная информация"} />
                <TextAreaField controller={controller({ name: "studentsList" })} label={"Cписок обучающихся"} />
                <DocsUploadField controller={controller({ name: "docs" })} label={"Файлы"} />
            </div> */}

            <Button onClick={roomBookingFormSubmit} type="primary" htmlType="submit">
                Создать заявку
            </Button>
            <Button>Отменить</Button>
        </div>
    );
}

export default RoomBooking;