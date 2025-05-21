import Image from "next/image";
import React from "react";
import Styles from "./Certificate.module.css";

const VerifyCertificateContainer = ({ studentData }) => {
  return (
    <div className={Styles.bgclr}>
      <img className={Styles.headerlogo} src={"/images/logo-2.png"} />
      <h5 className="my-3">Candidate Certificate Online Verification</h5>
      <div className={Styles.photocontainer}>
        <Image className={Styles.studentavatar} height={200 } width={200} src={studentData.avatar} />
        <Image height={100} width={100}  className={Styles.stamp} src={"/images/stamp.png"} />
      </div>
      <table  class="table mt-5 pt-5">
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
