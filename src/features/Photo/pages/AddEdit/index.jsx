import React from "react";
import Banner from "../../../../components/Banner";
import PhotoForm from "../../components/PhotoForm";
import "./styles.scss";

AddEditPage.propTypes = {};

function AddEditPage(props) {
  return (
    <div className="photo-edit">
      <Banner title="Pick your photos." />
      <div className="photo-edit__form">
        <PhotoForm />
      </div>
    </div>
  );
}

export default AddEditPage;
