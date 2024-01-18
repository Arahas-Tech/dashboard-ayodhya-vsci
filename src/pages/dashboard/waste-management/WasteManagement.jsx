import React from "react";
import { Flex, Table } from "antd";
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
      title: "Toilet ID",
      dataIndex: "toilet_id",
      key: "toilet_id",
    },
    {
      title: "External Toilet ID",
      dataIndex: "external_toilet_id",
      key: "external_toilet_id",
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
      title: "Category ID",
      dataIndex: "category_id",
      key: "category_id",
    },
    {
      title: "Owner Authority",
      dataIndex: "owner_authority",
      key: "owner_authority",
    },
    {
      title: "Owner Authority Other",
      dataIndex: "owner_authority_other",
      key: "owner_authority_other",
    },
    {
      title: "Maintenance Authority",
      dataIndex: "maintainance_authority",
      key: "maintainance_authority",
    },
    {
      title: "Maintenance Authority Other",
      dataIndex: "maintainance_authority_other",
      key: "maintainance_authority_other",
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
      title: "Latitude",
      dataIndex: "latitude",
      key: "latitude",
    },
    {
      title: "Longitude",
      dataIndex: "longitude",
      key: "longitude",
    },
    {
      title: "Deleted At",
      dataIndex: "deletedAt",
      key: "deletedAt",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "State QC Status",
      dataIndex: "state_qc_status",
      key: "state_qc_status",
    },
    {
      title: "Google Status",
      dataIndex: "google_status",
      key: "google_status",
    },
    {
      title: "Updated At",
      dataIndex: "updatedAt",
      key: "updatedAt",
    },
    {
      title: "Located Near By",
      dataIndex: "located_near_by",
      key: "located_near_by",
    },
    {
      title: "Funding Source",
      dataIndex: "funding_source",
      key: "funding_source",
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
      title: "Is Differently Abled Friendly",
      dataIndex: "is_differently_abled_friendly",
      key: "is_differently_abled_friendly",
    },
    {
      title: "Is Clean and Usable",
      dataIndex: "is_clean_and_usable",
      key: "is_clean_and_usable",
    },
    {
      title: "Seat ID",
      dataIndex: "seat_id",
      key: "seat_id",
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
        Reduce the environmental impacts of city
      </Flex>

      <div className={styles.kpiContainer}>
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

        <div className={styles.kpiCard}>
          <span>18%</span>
          <div>
            Population <br /> Growth Rate
          </div>
          <Icon
            component={() => (
              <img
                src={require("assets/svg/Population Growth.svg").default}
                alt="Population Growth"
                className={styles.icon}
              />
            )}
          />
        </div>

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
      </div>

      <h2 className={styles.heading}> All SBM Toilets in Ayodhya</h2>
      <Table
        bordered
        dataSource={allToilets}
        columns={columns}
        scroll={{
          x: 10000,
          y: "100vh",
        }}
        style={{ width: "100%" }}
      />

      <AllToilets />
    </>
  );
};

export default WasteManagement;
