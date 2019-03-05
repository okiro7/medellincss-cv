import React from 'react';
import styled from 'styled-components';

const AboutStyle = styled.div`
  text-align: center;
`;

const AboutAvatar = styled.div`
  padding: 2em 0 0 0;
`;

const AboutAvatarImg = styled.img`
  border-radius: 100%;
  width: 160px;
  height: 160px;
  border: 2px solid #E91E63;
  margin: 0 auto;
  display: block;
  box-shadow:  0 0 10px  rgba(0,0,0,0.6);
`;

const About = () => (
    <AboutStyle>
        <AboutAvatar>
            <AboutAvatarImg src="https://avatars2.githubusercontent.com/u/3871087?s=460&v=4"></AboutAvatarImg>
        </AboutAvatar>
    </AboutStyle>
);

export default About;