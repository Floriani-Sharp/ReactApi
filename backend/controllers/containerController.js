const { request, response } = require('express')

exports.getAllContainer = (request , response) => {
    let data = [
        {
          "id": 1,
          "handler": "TSOBE",
          "conteneur_number": "01",
          "reference": "0000A52DG",
          "conteneur_type": "AQ45",
          "registration_date": "15/08/2022",
          "liquidation_date": "19/08/2022",
          "payment_date": "22/08/2022",
          "manifest": "M01A2012",
          "num_bl": "520",
          "transport_id": "PM4518a"
        },
        {
          "id": 2,
          "handler": "BT",
          "conteneur_number": "02",
          "conteneur_type": "C18",
          "reference": "AQWJL500",
          "registration_date": "12/07/2022",
          "liquidation_date": "13/07/2022",
          "payment_date": "24/07/2022",
          "manifest": "WCGDFS200",
          "num_bl": "140",
          "transport_id": "PM4518a"
        },
        {
          "id": 4,
          "handler": "TSOBE",
          "conteneur_number": "04",
          "conteneur_type": "b15",
          "reference": "VFCHJSHG0",
          "registration_date": "10/05/2022",
          "liquidation_date": "11/05/2022",
          "payment_date": "15/05/2022",
          "manifest": "FBVJHGB0",
          "num_bl": "400",
          "transport_id": "VHHBBHJ0"
        },
        {
          "id": 3,
          "handler": "BT",
          "conteneur_number": "03",
          "conteneur_type": "V12",
          "reference": "khj5008",
          "registration_date": "08/06/2022",
          "liquidation_date": "09/06/2022",
          "payment_date": "10/06/2022",
          "manifest": "bvjbjkh0",
          "num_bl": "120",
          "transport_id": "QWVOJU0"
        }
    ]

    response.send(data)
}