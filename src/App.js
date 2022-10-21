import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Link,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./App.scss";
import NotFound from "./components/NotFound";
import Photo from "./features/Photo";
import AddEditPage from "./features/Photo/pages/AddEdit";
import MainPage from "./features/Photo/pages/Main";

// Lazy load - Code splitting
// const Photo = React.lazy(() => import("./features/Photo"));

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <Router>
          <ul>
            <li>
              <Link to="/photos">Go to photo page</Link>
            </li>
            <li>
              <Link to="/photos/add">Go to Add photo page</Link>
            </li>
          </ul>

          <Routes>
            <Route exact path="/" element={<Navigate to="/photos" replace />} />

            <Route path="/photos/*" element={<Photo />}>
              <Route path="add" element={<AddEditPage />} />
              <Route path=":photoId" element={<AddEditPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            <Route element={<NotFound />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
