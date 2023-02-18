import React from "react";
import RoomCard from "../InfoCardsList/cards/RoomCard";

import InfoCardsList from "../InfoCardsList/InfoCardsList";

export const item = {
    "userId": "PtA4pFzxry",
    "universityId": "G5qYEw8lls",
    "createdTimestamp": 1648790889430,
    "details": {
        "main-info": {
            "name": "Студенческое общежитие ПВГУС",
            "city": "Тольятти",
            "street": "ул. Ленинградская",
            "houseNumber": "29",
            "coordinates": {
                "lat": "53.503659",
                "lng": "49.400055"
            },
            "mealPlan": "nothing",
            "maxDays": "30",
            "minDays": "2",
            "photos": [
                "https://stud-files.sabir.pro/files/PtA4pFzxry-e6e200f4363190c4400ba0dba4958a16b719f4e33bc5e14f50e4ff6fdf8b871c.jpg",
                "https://stud-files.sabir.pro/files/PtA4pFzxry-f1e50fcce61fcf319452f4e94f18d0171ff78119185502ff72842ead96356670.png",
                "https://stud-files.sabir.pro/files/PtA4pFzxry-8d58ef1299a1161a74f77d61f179828623c25bf7cce08f62b7898c83dc081f4c.png",
                "https://stud-files.sabir.pro/files/PtA4pFzxry-be65d2c18d2792155689f6441858e681d68299bd0cf8b51ae8b85cf317f16c6e.png",
                "https://stud-files.sabir.pro/files/PtA4pFzxry-51e8bf95117ccd9d246a4e621143fe03644931295eea3c960ac3fca293b6e25d.png",
                "https://stud-files.sabir.pro/files/PtA4pFzxry-02a4d11680ad219c665470fdf3d920a8390e8445d2bfc80e8fc6d79ec47d87d6.png"
            ]
        },
        "rules": {
            "committee": {
                "name": "Студтуризм ПВГУС 2022",
                "email": "st@tolgas.ru",
                "phone": "+78482486816"
            },
            "requiredUniDocuments": "Копия приказа о направлении обучающихся",
            "requiredStudentsDocuments": "При заселение в общежитие   требуется:\n-паспорт гражданина, или иного документа, удостоверяющего личность; \n\n - квитанции об оплате за проживание в общежитии. \n- документ, подтверждающий обучение в образовательном учреждении высшего или среднего профессионального образования. "
        },
        "services": [],
        "documents": [
            "https://stud-files.sabir.pro/files/PtA4pFzxry-ec168de2331ed39abed6a463465fe8fddd39c9d4c388bc305bac4d2474eda47b.pdf",
            "https://stud-files.sabir.pro/files/PtA4pFzxry-d8c377565c358acd73ba43e23085e49dd7464c5b16fac7d90487f7dcd9b641dd.pdf",
            "https://stud-files.sabir.pro/files/PtA4pFzxry-6cdcfd26d601590e6f6d59c2c8b5c98fdabb567cacf5e75ba90f7e44dfc4933d.pdf",
            "https://stud-files.sabir.pro/files/PtA4pFzxry-7f7bff8642e4c10c109492e3d8ff669c5cc95e2298fd89226013e91c23445b0a.pdf",
            "https://stud-files.sabir.pro/files/PtA4pFzxry-9fd2fe0e465e0145cc89c9ed2020071d247b1de77db43698db1c61b5a30b4cb7.pdf"
        ],
        "district": "ПФО"
    },
    "onModeration": false,
    "id": "7Zbl2muIe4",
    "timestamp": 1648790889430,
    "updatedTimestamp": 1669816931225,
    "rooms": {
        "Acu84i9BK0": {
            "details": {
                "dateRange": {
                    "from": 1662926400000,
                    "to": 1671912000000
                },
                "isFree": false,
                "type": "3-х местный номер",
                "price": "30",
                "description": "В комнате 3 кровати, шкаф. Удобства на 1 этаже.",
                "photos": [
                    "https://stud-files.sabir.pro/files/PtA4pFzxry-720f1e9e904654f9afc8249a1d18c16d02b9be9fe09e63480135c7cf3353e4a1.png"
                ],
                "amount": "12"
            },
            "dormitoryId": "7Zbl2muIe4",
            "userId": "PtA4pFzxry",
            "universityId": "G5qYEw8lls",
            "createdTimestamp": 1648791619173,
            "updatedTimestamp": 1669206218367,
            "onModeration": true,
            "id": "Acu84i9BK0",
            "timestamp": 1648791619173
        }
    }
};

const RoomList: React.FC = () => {
    //@ts-ignore
     const cards = [item, item, item, item].map(e => <RoomCard {...e} key={e.id} />);
     console.log(cards)

    return (
        <div className="page-wrap">
            <InfoCardsList cards={cards} />
        </div>
    );
}

export default RoomList;