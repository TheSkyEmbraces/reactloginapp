import React, { useEffect } from "react";
import Axios from "axios";

function LandingPage() {
  useEffect(() => {
    Axios.get("http://localhost:3000/api/hello").then((response) =>
      console.log(response.data)
    );
  }, []);

  return <div>landingPage!!!!</div>;
}

export default LandingPage;
