import React from 'react';
import About from '../components/About';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import Info from '../components/Info';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Certificates from '../components/Certificates ';
import Skills from '../components/Skills';


import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: #f5f5f5;
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
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
            "degree":"College",
            "institution":"Universidad del Valle",
            "startDate":"2010/05/01",
            "endDate":"2015/05/01",
            "description":"Tulua", 
        },{
            "degree":"School",
            "institution":"Gimnasio del Pacifico",
            "startDate":"2004/01/01",
            "endDate":"2010/01/01",
            "description":"Tulua", 
        }
    ],
    "experience": [
		{
			"company": "Suramericana",
			"endDate": "Present",
			"jobDescription": "Analista de Desarrollo.",
			"jobTitle": "Backend",
			"startDate": "Jan 2015"
		},
		{
			"company": "Ingeneo",
			"endDate": "Jan 2015",
			"jobDescription": "Analista de Desarrollo",
			"jobTitle": "Backend",
			"startDate": "Sept 2010"
		}
    ],
    "certificate": [
		{
			"date": "Jan 2010",
			"description": "Scrum Developer",
			"institution": "Seonti",
			"name": "Scrum Developer"
		},
		{
			"date": "Jan 2011",
			"description": "Oracle Sql Expert",
			"institution": "Oracle",
			"name": "Oracle Sql Expert"
		}
	],
    "skills": [
		{
			"name": "HTML5",
			"percentage": "75%"
		},
		{
			"name": "CSS",
			"percentage": "25%"
		},
		{
			"name": "JavaScript",
			"percentage": "55%"
		},
		{
			"name": "React",
			"percentage": "90%"
        },
        {
			"name": "Java",
			"percentage": "95%"
        },
        {
			"name": "Plsql",
			"percentage": "80%"
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
                <Experience data={data.experience} />
                <Certificates data={data.certificate} />
                <Skills data={data.skills} />
            </Info>
        </Main>
    );

}

export default App;