import React from "react";
import {useQuery} from "@apollo/client";
import ProductFilter from "./graphQL/ProductFilterQueries";
import {prepareOptions} from "./utils";
import Select from "./components/Select";

const selected = {};

/**
 * FiltersRow
 * @param selected
 * @param onSelect
 * @param data
 * @returns {JSX.Element}
 * @constructor
 */
const FiltersRow = ( {selected, onSelect, data}) => {
    let response = data && data.productDetails && data.productDetails.allOptions;
    let filters = response && response.map(({ type, options }, index) => (
        <div className={`selectWrapper_${index}`} key={type}>
            <p className="label">
                {type}:<Select selected={selected} options={options} type={type} onSelect={onSelect}></Select>
            </p>
        </div>
    ));
    return <>{filters}</>
};

/**
 * ProductFilters
 * @returns {JSX.Element}
 * @constructor
 * Not using state to prevent re rendering
 */

const ProductFilters =() =>{

   // const [selected]= useState({});
     const   { loading, error, data, refetch } = useQuery(ProductFilter, prepareOptions(selected)),
        onSelect =({target:{name: type, value}})=>{
            if(!value){
                delete  selected[type];
            }
            else {
                selected[type] =value;
            }
            // Using refetch to re-render the component
            refetch({ productDetailsId: Object.values(selected)})
        };
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

    return (
        <div className ="wrapper">
            <FiltersRow  onSelect={onSelect} selected={selected} data={data}/>
        </div>
    )
};

export default ProductFilters;