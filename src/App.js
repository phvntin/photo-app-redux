import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Loading from "./components/Loading/Loading";
import NotFound from "./components/NotFound";
import AddEditPage from "./features/Photo/pages/AddEdit";

// Lazy load - Code splitting
const Photo = React.lazy(() => import("./features/Photo"));

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<Loading />}>
        <Router>
          <Header />

          <Routes>
            <Route exact path="/" element={<Navigate to="/photos" replace />} />

            <Route path="/photos/*" element={<Photo />}>
              <Route path="add" element={<AddEditPage />} />
              <Route path=":photoId" element={<AddEditPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
