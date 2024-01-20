import React from "react";
import { Badge, Card, Col, Flex, Row, Table } from "antd";
import Icon from "@ant-design/icons";
import { allToilets } from "constants/Waste-Management/AllToilets";
import AllToilets from "components/maps/waste-management/AllToilets";

import styles from "./styles.module.css";

const WasteManagement = () => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "State",
      dataIndex: "State",
      key: "State",
    },
    {
      title: "District",
      dataIndex: "District",
      key: "District",
    },
    {
      title: "ULB ID",
      dataIndex: "ulb_id",
      key: "ulb_id",
    },
    {
      title: "ULB",
      dataIndex: "ULB",
      key: "ULB",
    },
    {
      title: "Pincode",
      dataIndex: "pincode",
      key: "pincode",
    },
    {
      title: "Owner Authority",
      dataIndex: "owner_authority",
      key: "owner_authority",
    },
    {
      title: "Fees Applicable",
      dataIndex: "fees_applicable",
      key: "fees_applicable",
    },
    {
      title: "Cost",
      dataIndex: "cost",
      key: "cost",
    },
    {
      title: "Google Status",
      dataIndex: "google_status",
      key: "google_status",
    },
    {
      title: "Located Near By",
      dataIndex: "located_near_by",
      key: "located_near_by",
    },
    {
      title: "Is Septic Tank",
      dataIndex: "is_septic_tank",
      key: "is_septic_tank",
    },
    {
      title: "Septic Tank with Soak Pit",
      dataIndex: "saptic_tank_with_soak_pit",
      key: "saptic_tank_with_soak_pit",
    },
    {
      title: "Seat Type",
      dataIndex: "seat_type",
      key: "seat_type",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Is Aspirational",
      dataIndex: "is_aspirational",
      key: "is_aspirational",
    },
    {
      title: "Is Child Friendly",
      dataIndex: "is_child_friendly",
      key: "is_child_friendly",
    },
    {
      title: "Is Tap Available",
      dataIndex: "is_tap_available",
      key: "is_tap_available",
    },
    {
      title: "Is Regularly Cleaned",
      dataIndex: "is_regularly_cleaned",
      key: "is_regularly_cleaned",
    },
    {
      title: "Is Having Bio Digester",
      dataIndex: "is_having_bio_digester",
      key: "is_having_bio_digester",
    },
    {
      title: "Is Functional",
      dataIndex: "is_functional",
      key: "is_functional",
    },
    {
      title: "Is Differently-Abled Friendly",
      dataIndex: "is_differently_abled_friendly",
      key: "is_differently_abled_friendly",
    },
    {
      title: "Is Clean and Usable",
      dataIndex: "is_clean_and_usable",
      key: "is_clean_and_usable",
    },
  ];

  return (
    <>
      <Flex align="center" gap={5} style={{ marginBottom: 5 }}>
        <img
          src={require("assets/sdgs/E-WEB-Goal-11.png")}
          alt="11.6"
          className="goals-image"
        />
      </Flex>

      <Row gutter={[8, 8]}>
        <Col xs={24} md={24} lg={12}>
          <Badge.Ribbon placement="start" text="SBM Toilets (Location)">
            <Card>
              <AllToilets />
            </Card>
          </Badge.Ribbon>
        </Col>

        <Col xs={24} md={24} lg={12}>
          <Card className="tab-cards" style={{ height: "75vh" }}>
            <Row gutter={[8, 8]}>
              <Col xs={24} md={12} lg={8}>
                <div className={styles.kpiCard}>
                  <span>6,72,861</span>
                  <div>Population </div>
                  <Icon
                    component={() => (
                      <img
                        src={require("assets/svg/Population.svg").default}
                        alt="Population"
                        className={styles.icon}
                      />
                    )}
                  />
                </div>
              </Col>

              <Col xs={24} md={12} lg={8}>
                <div className={styles.kpiCard}>
                  <span>140 Tons</span>
                  <div>
                    Total Daily <br /> Generated Waste
                  </div>
                  <Icon
                    component={() => (
                      <img
                        src={require("assets/svg/Waste Generation.svg").default}
                        alt="Waste Generation"
                        className={styles.icon}
                      />
                    )}
                  />
                </div>
              </Col>

              <Col xs={24} md={12} lg={8}>
                <div className={styles.kpiCard}>
                  <span>200gm</span>
                  <div>
                    Avg Waste <br /> Generation/person/day
                  </div>
                  <Icon
                    component={() => (
                      <img
                        src={require("assets/svg/Waste PPD.svg").default}
                        alt="Waste Generation PPD"
                        className={styles.icon}
                      />
                    )}
                  />
                </div>
              </Col>
            </Row>
            <h2 className={styles.heading}>SBM Toilets-Ayodhya</h2>
            <Table
              bordered
              dataSource={allToilets}
              columns={columns}
              scroll={{
                x: 10000,
                y: "50vh",
              }}
              style={{ width: "100%" }}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default WasteManagement;
