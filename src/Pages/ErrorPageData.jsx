import React from 'react';
import {FaSearch} from "react-icons/fa";
const ErrorPageData = () => {
    const [errordata] = React.useState({
        errorheading: "404",
        secondheading: "OPPS! PAGE NOT BE FOUND",
        para:"Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarity unavailable."
      });
    return (
        <>
            <div className="conatiner-fluid">
                <div className="col-10 mx-auto">
                    <div className="error_text_main">
                        <h1>{errordata.errorheading}</h1>
                        <h2>{errordata.secondheading}</h2>
                        <p>{errordata.para}</p>
                        <form>
                            <input type="text"placeholder="Search...." />
                            <button>
                                <FaSearch />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ErrorPageData;
