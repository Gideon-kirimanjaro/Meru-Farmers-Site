import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import History from "../../Tabs/History/History";
import Process from "../../Tabs/Process/Process";
import Specifications from "../../Tabs/Specifications/Specifications";
import Why from "../../Tabs/Why/Why";
import styles from "./CustomTabs.module.css";
const CustomTabs = ({ data, color }) => {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3 ms-3 me-3"
      fill
      variant="pills"
    >
      <Tab eventKey="profile" title="Why us">
        {" "}
        <Why />
      </Tab>
      <Tab eventKey="history" title="History">
        <History />
      </Tab>
      <Tab eventKey="process" title="Process">
        <Process />
      </Tab>
      <Tab eventKey="specifications" title="Specifications">
        {" "}
        <Specifications />
      </Tab>
    </Tabs>
  );
};

export default CustomTabs;
