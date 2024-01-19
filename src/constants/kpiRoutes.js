import CommunityWellBeings from "pages/dashboard/community-wellbeings/CommunityWellbeings";
import GreenAndOpenSpaces from "pages/dashboard/green-and-open-spaces/GreenAndOpenSpaces";
import WasteManagement from "pages/dashboard/waste-management/WasteManagement";
import WaterConservation from "pages/dashboard/water-conservation/WaterConservation";

export const kpiItemsHome = [
  {
    label: "Green Spaces and Biodiversity",
    path: "/dashboard/green-spaces-and-open-spaces",
    icon: (
      <img
        style={{ height: 20, width: 20 }}
        src={require("assets/svg/Green Spaces.svg").default}
        alt="Green Spaces and Biodiversity"
      />
    ),
    children: <GreenAndOpenSpaces />,
  },

  {
    label: "Water Conservation",
    path: "/dashboard/water-conservation",
    icon: (
      <img
        style={{ height: 20, width: 20 }}
        src={require("assets/svg/Water Conservation.svg").default}
        alt="Water Conservation"
      />
    ),
    children: <WaterConservation />,
  },
  {
    label: "Waste Management",
    path: "/dashboard/waste-management",
    icon: (
      <img
        style={{ height: 20, width: 20 }}
        src={require("assets/svg/Waste Management.svg").default}
        alt="Waste Management"
      />
    ),
    children: <WasteManagement />,
  },
  {
    label: "Community Well-being",
    path: "/dashboard/community-wellbeing",
    icon: (
      <img
        style={{ height: 20, width: 20 }}
        src={require("assets/svg/Community Well-being.svg").default}
        alt="Community Well-being"
      />
    ),
    children: <CommunityWellBeings />,
  },
  // {
  //   label: "Sustainable & Eco-Friendly Architecture",
  //   path: "/sustainable-development",
  //   icon: (
  //     <img
  //       style={{ height: 20, width: 20 }}
  //       src={require("assets/svg/Sustainable & Eco-Friendly.svg").default}
  //       alt="Sustainable & Eco-Friendly Architecture"
  //     />
  //   ),
  //   children: <WaterConservation />,
  // },

  // {
  //   label: "Cultural Heritage Conservation",
  //   path: "/dashboard/cultural-heritage-conservation",
  //   icon: (
  //     <img
  //       style={{ height: 20, width: 20 }}
  //       src={require("assets/svg/Cultural Heritage.svg").default}
  //       alt="Cultural Heritage Conservation"
  //     />
  //   ),
  //   children: <WaterConservation />,
  // },
  // {
  //   label: "Spiritual Tourism",
  //   path: "/dashboard/spiritual-tourism",
  //   icon: (
  //     <img
  //       style={{ height: 20, width: 20 }}
  //       src={require("assets/svg/Sipiritual Tourism.svg").default}
  //       alt="Spiritual Tourism"
  //     />
  //   ),
  //   children: <WaterConservation />,
  // },
  // {
  //   label: "Traditional Agriculture Practices",
  //   path: "/dashboard/traditional-agriculture-practices",
  //   icon: (
  //     <img
  //       style={{ height: 20, width: 20 }}
  //       src={require("assets/svg/Agriculture.svg").default}
  //       alt="Traditional Agriculture Practices"
  //     />
  //   ),
  //   children: <WaterConservation />,
  // },

  // {
  //   label: "Animal Welfare",
  //   path: "/dashboard/animal-welfare",
  //   icon: (
  //     <img
  //       style={{ height: 20, width: 20 }}
  //       src={require("assets/svg/Animal Welfare.svg").default}
  //       alt="Animal Welfare"
  //     />
  //   ),
  //   children: <WaterConservation />,
  // },
  // {
  //   label: "Vedic Education and Spiritual Practices",
  //   path: "/dashboard/animal-welfare",
  //   icon: (
  //     <img
  //       style={{ height: 20, width: 20 }}
  //       src={require("assets/svg/Vedic Education.svg").default}
  //       alt="Vedic Education and Spiritual Practices"
  //     />
  //   ),
  //   children: <WaterConservation />,
  // },
];
