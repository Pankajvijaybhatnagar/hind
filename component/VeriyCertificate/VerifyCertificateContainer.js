import Image from "next/image";
import React from "react";
import Styles from "./Certificate.module.css";

const VerifyCertificateContainer = ({ studentData }) => {
  return (
    <div className={Styles.bgclr}>
      <img className={Styles.headerlogo} src={"/images/logo-2.png"} />
      <h4>Candidate Certificate Online Verification</h4>
      <div className={Styles.photocontainer}>
        <img src={studentData.avatar} />
        <img style={{height:'50px'}} className={Styles.stamp} src={"/images/stamp.png"} />
      </div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>John</td>
      <td>Doe</td>
      <td>@social</td>
    </tr>
  </tbody>
</table>
    </div>
  );
};

export default VerifyCertificateContainer;
