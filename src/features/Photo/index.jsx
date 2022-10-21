import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../../components/NotFound";
import AddEditPage from "./pages/AddEdit";
import MainPage from "./pages/Main";

Photo.propTypes = {};

function Photo(props) {
  return (
    <div>
      <h1>Photo</h1>
      <Routes>
        <Route index element={<MainPage />} />

        <Route path="add" element={<AddEditPage />} />
        <Route path=":photoId" element={<AddEditPage />} />
        <Route element={<AddEditPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Photo;
