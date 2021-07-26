import React from 'react';
import { NavLink } from "react-router-dom";
const PriceMainData = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
            <div className="card">
                <div className="card-head">
                    <h3>{props.price}</h3>
                    <h5>{props.basic}</h5>
                </div>
                <div className="card-body">
                    <ul>
                        <li>
                    {props.paraone}
                        </li>
                        <li>
                    {props.paratwo}
                        </li>
                        <li>
                    {props.parathree}
                        </li>
                        <li>
                    {props.parafour}
                        </li>
                        <li>
                    {props.parafive}
                        </li>
                    </ul>
                    <div className="for_order_btn">
                        <NavLink to="/contact">
                        <button>{props.order}</button>
                        </NavLink>
                    </div>
                </div>             
            </div>
        </div>
        </>
    );
};

export default PriceMainData;
