import { Route, Routes } from "react-router-dom";
import AllMeeting from "./pages/AllMeeting";
import Favorite from "./pages/Favorite";
import NewMeeting from "./pages/NewMeeting";
import "./app.css";
import Layout from "./component/layout/Layout";
function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" exact element={<AllMeeting />} />
          <Route path="/new-meeting" element={<NewMeeting />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
