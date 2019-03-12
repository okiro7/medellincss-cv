import React from 'react';
import About from '../components/About';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import Education from '../components/Education';
import Info from '../components/Info';

import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Lato:300,400|Roboto:300,400,500');
    @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
    background: #f5f5f5;
  }
`;

const data = {
    "avatar": "https://media.licdn.com/dms/image/C4E03AQG6Gxj3WbLhpw/profile-displayphoto-shrin" +
            "k_200_200/0?e=1557964800&v=beta&t=woDmucE1OPITkvAV-ry2SJNId0-3vlq2QAcHoqCB4eY",
    "name": "Diego Fernando Castillo Osorio",
    "profession": "Ingeniero de  Sistemas",
    "bio": "BackEnd Aprendiendo FrontEnd , Ciclomontañista.",
    "address": "diego.castillo.osorio@gmail.com",
    "social": [
        {
            "name": "facebook",
            "url": "https://www.facebook.com/diego.castillo.9047"
        }, {
            "name": "twitter",
            "url": "https://twitter.com/okiro7"
        }, {
            "name": "linkedin",
            "url": "www.linkedin.com/in/diego-fernando-castillo-osorio-7970b0a9"
        }, {
            "name": "github",
            "url": "https://github.com/okiro7"
        }
    ],
    "education":[
        {
            "degree":"",
            "institution":"Universidad del Valle",
            "startDate":"2010/05/01",
            "endDate":"2015/05/01",
            "description":"Sede Tulua", 
        }
    ]
}

const App = () => {

    return (
        <Main>
            <GlobalStyle/>
            <Sidebar>
                <About
                    avatar={data.avatar}
                    name={data.name}
                    profession={data.profession}
                    bio={data.bio}
                    address={data.address}
                    social={data.social}/>
            </Sidebar>
            <Info>
                <Education data={data.education}/>
            </Info>
        </Main>
    );

}

export default App;