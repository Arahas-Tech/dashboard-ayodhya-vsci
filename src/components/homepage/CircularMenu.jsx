import React from "react";

import SDG from "assets/images/SDG.png";
import SDGGoalsText from "assets/SDG_text.png";

import styles from "./circularMenu.module.css";
import { Col, Row } from "antd";

function CircularMenu() {
  return (
    <>
      <Row>
        <Col md={12}>
          <Row style={{ position: "absolute" }}>
            <img src={SDGGoalsText} alt="SDGGoalsText" />
          </Row>
          <img
            src={SDG}
            useMap="#image-map"
            className={styles.spinningSDG}
            alt="SDGs"
          />
        </Col>

        <map name="image-map">
          <area
            target=""
            alt="Proportion of municipal solid waste collected and managed in controlled facilities out of total municipal waste generated, by cities"
            title="Proportion of municipal solid waste collected and managed in controlled facilities out of total municipal waste generated, by cities"
            href=""
            coords="266,468,274,543,349,517,318,451"
            shape="poly"
          />
          <area
            target=""
            alt='Direct economic loss in relation to global GDP, damage to critical infrastructure and the number of disruptions to basic services, attributed to disasters."'
            title='Direct economic loss in relation to global GDP, damage to critical infrastructure and the number of disruptions to basic services, attributed to disasters."'
            href=""
            coords="325,448,371,413,426,467,360,515"
            shape="poly"
          />
          <area
            target=""
            alt="Number of deaths, missing persons and directly affected persons attributed to disasters per 100,000 population. Indicators measured here report mortality rates internally displaced persons, missing persons and total numbers affected by natural disasters"
            title="Number of deaths, missing persons and directly affected persons attributed to disasters per 100,000 population. Indicators measured here report mortality rates internally displaced persons, missing persons and total numbers affected by natural disasters"
            href=""
            coords="374,410,404,362,472,389,454,427,428,461"
            shape="poly"
          />
          <area
            target=""
            alt="Total per capita expenditure on the preservation, protection and conservation of all cultural and natural heritage, by the source of funding (public, private), type of heritage (cultural, natural) and level of government (national, regional, and local/municipal)"
            title="Total per capita expenditure on the preservation, protection and conservation of all cultural and natural heritage, by the source of funding (public, private), type of heritage (cultural, natural) and level of government (national, regional, and local/municipal)"
            href=""
            coords="403,357,414,301,487,300,486,341,475,383"
            shape="poly"
          />
          <area
            target=""
            alt="Proportion of cities with a direct participation structure of civil society in&nbsp;urban planning&nbsp;and management that operate regularly and democratically"
            title="Proportion of cities with a direct participation structure of civil society in&nbsp;urban planning&nbsp;and management that operate regularly and democratically"
            href=""
            coords="402,239,472,212,488,290,414,291"
            shape="poly"
          />
          <area
            target=""
            alt="Ratio of land consumption rate to the population growth rate"
            title="Ratio of land consumption rate to the population growth rate"
            href=""
            coords="369,185,424,134,469,204,399,235"
            shape="poly"
          />
          <area
            target=""
            alt="Proportion of population that has convenient access to public transport, by sex, age and&nbsp;Persons With Disabilities"
            title="Proportion of population that has convenient access to public transport, by sex, age and&nbsp;Persons With Disabilities"
            href=""
            coords="322,148,364,178,420,127,354,82"
            shape="poly"
          />
          <area
            target=""
            alt="Proportion of the&nbsp;urban population&nbsp;living in slum households"
            title="Proportion of the&nbsp;urban population&nbsp;living in slum households"
            href=""
            coords="262,129,313,144,347,77,269,57"
            shape="poly"
          />
          <area
            target=""
            alt="Annual mean levels of fine particulate matter (e.g.&nbsp;PM2.5&nbsp;and PM10) in cities (population weighted)"
            title="Annual mean levels of fine particulate matter (e.g.&nbsp;PM2.5&nbsp;and PM10) in cities (population weighted)"
            href=""
            coords="178,64,258,55,251,128,200,135"
            shape="poly"
          />
          <area
            target=""
            alt="Average share of the built-up area of cities that is open space for public use for all, by sex, age and persons with disabilities"
            title="Average share of the built-up area of cities that is open space for public use for all, by sex, age and persons with disabilities"
            href=""
            coords="98,104,170,67,190,137,143,163"
            shape="poly"
          />
          <area
            target=""
            alt="Proportion of person victim of physical or&nbsp;sexual harassment, by sex, age, disability status and place of occurrence, in the previous 12 months"
            title="Proportion of person victim of physical or&nbsp;sexual harassment, by sex, age, disability status and place of occurrence, in the previous 12 months"
            href=""
            coords="37,171,90,109,135,169,100,207"
            shape="poly"
          />
          <area
            target=""
            alt="Number of countries that have national urban policies or regional development plans that (a) respond to population dynamics; (b) ensure balanced territorial development, and (c) increase local fiscal space"
            title="Number of countries that have national urban policies or regional development plans that (a) respond to population dynamics; (b) ensure balanced territorial development, and (c) increase local fiscal space"
            href=""
            coords="6,253,32,179,96,216,78,266"
            shape="poly"
          />
          <area
            target=""
            alt="Number of countries that adopt and implement national disaster risk reduction strategies in line with the Sendai Framework for Disaster Risk Reduction 2015–2030"
            title="Number of countries that adopt and implement national disaster risk reduction strategies in line with the Sendai Framework for Disaster Risk Reduction 2015–2030"
            href=""
            coords="2,261,74,277,78,329,4,343"
            shape="poly"
          />
          <area
            target=""
            alt="Proportion of local governments that adopt and implement local disaster risk reduction strategies in line with national disaster risk reduction strategies"
            title="Proportion of local governments that adopt and implement local disaster risk reduction strategies in line with national disaster risk reduction strategies"
            href=""
            coords="6,354,81,340,100,388,37,429"
            shape="poly"
          />
          <area
            target=""
            alt="Proportion of financial support to the least developed countries that is allocated to the&nbsp;construction&nbsp;and&nbsp;retrofitting&nbsp;of sustainable, resilient and resource-efficient buildings using local materials"
            title="Proportion of financial support to the least developed countries that is allocated to the&nbsp;construction&nbsp;and&nbsp;retrofitting&nbsp;of sustainable, resilient and resource-efficient buildings using local materials"
            href=""
            coords="41,435,104,395,141,433,95,490"
            shape="poly"
          />
        </map>
      </Row>
    </>
  );
}

export default CircularMenu;
