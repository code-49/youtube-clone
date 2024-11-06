import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Videopage from "./pages/Videopage/Videopage";
import Channel from "./pages/Channel/Channel";
import Library from "./pages/Library/Library";
import Likedvideo from "./pages/Likedvideo/Likedvideo";
import Watchhistory from "./pages/Watchhistory/Watchhistory";
import Watchlater from "./pages/Watchlater/Watchlater";
import Yourvideo from "./pages/Yourvideo/Yourvideo";
const AllRoutes = ({ seteditcreatechanelbtn, setvideouploadpage }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search/:Searchquery" element={<Search />} />
      <Route path="/videopage/:vid" element={<Videopage />} />
      <Route path="/Library" element={<Library />} />
      <Route path="/Likedvideo" element={<Likedvideo />} />
      <Route path="/Watchhistory" element={<Watchhistory />} />
      <Route path="/Watchlater" element={<Watchlater />} />
      <Route path="/Yourvideo" element={<Yourvideo />} />
      <Route
        path="/channel/:cid"
        element={
          <Channel
            seteditcreatechanelbtn={seteditcreatechanelbtn}
            setvideouploadpage={setvideouploadpage}
          />
        }
      />
    </Routes>
  );
};

export default AllRoutes;
