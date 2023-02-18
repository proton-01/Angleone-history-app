import { React, useState } from 'react';
import "./main.css";
import Axios from "axios";

export default function Main() {

    const [state, setState] = useState({
        exchange: "",
        symboltoken: "",
        interval: "",
        fromdate: "",
        todate: "",
    })

    const handleEvent = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setState({ ...state, [name]: value })
    };

    const [record, setRecord] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecord = { ...state };
        console.log(record);
        setRecord([...record, newRecord]);
        setState({ exchange: "", symboltoken: "", interval: "", fromdate: "", todate: "", });

        var data = JSON.stringify({
            "exchange": "NSE", "symboltoken": "3045",
            "interval": "ONE_MINUTE", "fromdate": "2021-02-08 09:00",
            "todate": "2021-02-08 09:16"
        });


        var config = {
            method: 'post',
            url: 'https://apiconnect.angelbroking.com/rest/secure/angelbroking/historical/v1/getCandleData',
            headers: {
                'X-PrivateKey': '1usTFgdO',
                'Accept': 'application/json',
                'X-SourceID': 'WEB',
                'X-ClientLocalIP': 'CLIENT_LOCAL_IP',
                'X-ClientPublicIP': 'CLIENT_PUBLIC_IP',
                'X-MACAddress': 'MAC_ADDRESS',
                'X-UserType': 'USER',
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6Iko1MDMyNDkxMCIsInJvbGVzIjowLCJ1c2VydHlwZSI6IlVTRVIiLCJpYXQiOjE2NzY3MDE5NDcsImV4cCI6MTc2MzEwMTk0N30.riqqIKkBprOmaQ5lqp4QcPDjXFpMoZugLewesDevH7pkDfLj3HMwQMAbDsg0MhvMU6swRzKjNSQINUDfEvtrLg'
            },
            data: data
        };

        Axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className='from_container'>


            <div className="register-form">

                <form action=''>
                    <div className='form_div'>
                        <p>Exchange :</p>
                        <input
                            id="exchange_input"
                            type="text"
                            name="exchange"
                            placeholder="exchange name"
                            value={state.exchange}
                            onChange={(e) => handleEvent(e)}
                        />
                    </div>
                    <div className='form_div'>
                        <p>Symboltoken :</p>
                        <input
                            id="symboltoken_input"
                            type="text"
                            name="symboltoken"
                            placeholder="symboltoken"
                            value={state.symboltoken}
                            onChange={(e) => handleEvent(e)}
                        />
                    </div>
                    <div className='form_div'>
                        <p>Interval :</p>
                        <input
                            id="interval_input"
                            type="text"
                            name="interval"
                            placeholder="interval"
                            value={state.interval}
                            onChange={(e) => handleEvent(e)}
                        />
                    </div>
                    <div className='form_div'>
                        <p>Fromdate :</p>
                        <input
                            id="fromdate_input"
                            type="text"
                            name="fromdate"
                            placeholder="fromdate"
                            value={state.fromdate}
                            onChange={(e) => handleEvent(e)}
                        />
                    </div>
                    <div className='form_div'>
                        <p>Todate :</p>
                        <input
                            id="todate_input"
                            type="text"
                            name="todate"
                            placeholder="todate"
                            value={state.todate}
                            onChange={(e) => handleEvent(e)}
                        />
                    </div>
                    <button onClick={(e) => handleSubmit(e)} type="button">Submit</button>
                </form>

            </div>
        </div>
    )
}
