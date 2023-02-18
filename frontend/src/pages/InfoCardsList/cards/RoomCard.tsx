import React from "react";

import { Typography } from "antd";

const { Title, Text } = Typography;

interface RoomCardProps {
    details: {
        documents: Array<string>;
        "main-info": {
            rules: {
                requiredStudentsDocuments: string;
                requiredUniDocuments: string;
                committee: {
                    email: string;
                    phone: string;
                    name: string;
                }
            };
            city: string;
            houseNumber: string;
            maxDays: string;
            minDays: string;
            photos: Array<string>;
            name: string;
            street: string;
        };
    };
    rooms: Array<{
        id: string;
        details: {
            amount: string;
            type: string;
            price: string;
            description: string;
            photos: Array<string>;
        };
    }>
    id: string;
    universityId: string;
    userId: string;
}

const RoomCard: React.FC<RoomCardProps> = (props) => {
    const { rooms } = props;
    const mainInfo = props.details["main-info"];
    console.log(mainInfo)

    const minCost = Object.values(rooms).map(e => +(e.details.price || 0)).sort((a, b) => a - b)[0] || -1


    return (
        <li>
            <a href="">
                <article className="section-wrap card">
                    <img src={mainInfo.photos[0] || ''} alt="" />
                    <Title level={4}>{mainInfo.name}</Title>
                    <Text>Вариантов размещения: <b>{Object.values(rooms).length}</b></Text>
                    <br/>
                    <Text>Стоимость на 1 человека: <b>{`от ${minCost} руб.`}</b></Text>
                    <br/>
                    <Text>Продолжительность пребывания: <b>от {`${mainInfo.minDays} до ${mainInfo.maxDays}`}</b></Text>
                </article>
            </a>
        </li>
    );
}

export default RoomCard;