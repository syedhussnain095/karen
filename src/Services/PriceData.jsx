import React from 'react';
import PriceSdata from "./PriceSdata";
import PriceMainData from "./PriceMainData";
const PriceData = () => {
    return (
        <>

            <div className="text-center">
                <h2>Our Pricing</h2>
                <p>labore dolore magnam aliquam quaerat voluptatem <br />
                 ad minima veniam, quis nostrum exercitationem</p>
            </div>

            <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row py-4">
                        {
                            PriceSdata.map((val , ind) => {
                                return <PriceMainData key={ind}
                                    price={val.price}
                                    basic={val.basic}
                                    paraone={val.paraone}
                                    paratwo={val.paratwo}
                                    parathree={val.parathree}
                                    parafour={val.parafour}
                                    parafive={val.parafive}
                                    order={val.order}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default PriceData;
