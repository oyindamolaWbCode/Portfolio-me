
import "./Loader.css";
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useState, useEffect } from "react";

 const Loader = () =>{

  const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);

    return(
        <div className="loader">
        <ClipLoader
        color={'#123abc'}
        loading={loading}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
    )
}

export default Loader