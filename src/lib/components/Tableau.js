import React from 'react';
import styled from 'styled-components';

const Cadre = styled.div`
  border: 1px solid #DD22CC;
  border-radius: 4px;
  padding: 30px;
  background-color: #EE00CC;
  box-shadow: 0 30px 30px 10px rgba(0, 0, 0, 40%);
  position: relative;
`;

const TableauImage = styled.div`
  background-image: url('./img/sinapses1.jpg');
  background-size: cover;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 70%);
  border: 1px solid #CC00CC;
  width: 600px;
  height: 450px;
  position: relative;
`;

const TableauShadow = styled.div`
  width: 600px;
  height: 450px;
  position: absolute;
  top: 30px;
  left: 30px;
  box-shadow: 0 0 25px 2px rgba(0, 0, 0, 10%);
`;

const Acrylique = styled.div`
  position: absolute;
  width: 99.6%;
  height: 99.5%;
  top: 0;
  left: 0;
`;

const Tableau = (props) => {
  return (
    <Cadre>
      <TableauImage>
        <Acrylique></Acrylique>
      </TableauImage>
      <TableauShadow></TableauShadow>
    </Cadre>
  )
}

export default Tableau;
