import React from 'react';
import About from '../components/About';
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle `
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
    "avatar": "https://media.licdn.com/dms/image/C4E03AQG6Gxj3WbLhpw/profile-displayphoto-shrink_200_200/0?e=1557964800&v=beta&t=woDmucE1OPITkvAV-ry2SJNId0-3vlq2QAcHoqCB4eY",
    "name": "Diego Castillo Osorio",
    "profession": "Ing Sistemas",
    "bio": "BackEnd Aprendiendo FrontEnd , Cilomontañista, etc.... ",
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
    ]
}

const App = () => {

    return (
        <div>
            <GlobalStyle/>
            <About
                avatar={data.avatar}
                name={data.name}
                profession={data.profession}
                bio={data.bio}
                address={data.address}
                social={data.social}/>
        </div>
    );

}

export default App;