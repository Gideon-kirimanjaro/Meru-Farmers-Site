import React from "react";
import styles from "./Specifications.module.css";
import Table from "react-bootstrap/Table";
import HeaderComponent from "../../Ui/HeaderComponent/HeaderComponent";
const Specifications = () => {
  const specifications = [
    {
      key: 1,
      title: "Variety",
      body: "Muranga 20, Kirinyaga 15, Embu 1 (Integrifolia)/ Kiambu 3 (Tetraphylla)",
    },
    {
      key: 2,
      title: "Colour",
      body: "Cream-colored Kernels",
    },
    {
      key: 3,
      title: "Cultivation Type ",
      body: "Conventional and Organic",
    },
    {
      key: 4,
      title: "Production Region ",
      body: "Tharaka Nithi County at= the fertile highlands of mount Kenya",
    },
    {
      key: 5,
      title: "Packaging & Palletizing ",
      body: "25 pounds (11.34 kg) food-grade aluminum foil pouches flushed with good grade Nitrogen ",
    },
    {
      key: 6,
      title: "Shipping Method",
      body: "Sea freight is the preferred mode of delivery through Mombasa port, 613.4KM from Our farms and facility. ",
    },
    {
      key: 7,
      title: "Storage Condition & Shelf Life",
      body: "The products are placed in cartons and stored on racks in the warehouse, chilled to 12-14 degrees Celsius.",
    },
  ];
  return (
    <div className={styles.container}>
      <div>
        <Table striped bordered>
          <thead>
            <tr>
              <th>Specification</th>
              <th>Details</th>
            </tr>
          </thead>
          {specifications &&
            specifications.map((item) => {
              return (
                <tbody>
                  <tr key={item.key}>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                  </tr>
                </tbody>
              );
            })}
        </Table>
      </div>
    </div>
  );
};

export default Specifications;
