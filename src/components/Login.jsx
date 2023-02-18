import { React, useState } from "react";
import "./main.css";
import Axios from "axios";


export default function Login() {

    const [clientcode, setClientcode] = useState("");
    const [password, setPassword] = useState("");
    const [totp, setTotp] = useState("");


    const [record, setRecord] = useState([]);
   

    const handleSubmit = (e) => {
        console.log(clientcode, password, totp);
       
        var data = JSON.stringify({
            "clientcode": clientcode,
            "password": password,
            "totp": totp,
        });
        console.log('dada is ' , data);

        var config = {
            method: 'post',
            url: 'https://apiconnect.angelbroking.com//rest/auth/angelbroking/user/v1/loginByPassword',

            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-UserType': 'USER',
                'X-SourceID': 'WEB',
                'X-ClientLocalIP': 'CLIENT_LOCAL_IP',
                'X-ClientPublicIP': 'CLIENT_PUBLIC_IP',
                'X-MACAddress': 'MAC_ADDRESS',
                'X-PrivateKey': '1usTFgdO'
            },
            data: data
        };

        Axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                window.location.href = '/main';
                console.log(response);
              
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="from_container">
            <div className="register-form" style={{ height: "60vh" }}>
                <form action="">
                    <div className="form_div">
                        <p>Clientcode :</p>
                        <input
                            id="clientcode_input"
                            type="text"
                            name="clientcode"
                            placeholder="clientcode"
                            onChange={(e) => {
                                setClientcode(e.target.value);                            
                            }}
                        />
                    </div>
                    <div className="form_div">
                        <p>Password :</p>
                        <input
                            id="password_input"
                            type="text"
                            name="password"
                            placeholder="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form_div">
                        <p>TOTP :</p>
                        <input
                            id="totp_input"
                            type="text"
                            name="totp"
                            placeholder="totp"
                            onChange={(e) => setTotp(e.target.value)}
                        />
                    </div>
                    <button onClick={(e) => handleSubmit(e)} type="button">Submit</button>
                </form>
            </div>
        </div>
    );
}
