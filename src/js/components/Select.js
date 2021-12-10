import React from "react";

/**
 * This Component used for return the select dropdown.
 * @param type
 * @param options
 * @param onSelect
 @returns JSX
 */
 const Select = ({type,options = [] , onSelect}) =>{
    return (
        <>
            <select defaultValue="" className="dropdown" name={type} id="type" onChange={onSelect} >
                {/*<option value="" disabled selected hidden>Please Choose...</option>*/}
                <option value=''></option>
                {
                    options.map(({value, id, status}, index) => (
                        status !== "unavailable" && <option key={`${type}_key_${index}`} defaultValue={status === "selected"} className="dropfeild"  value={id}>{value}</option>
                    ))
                }
            </select>
        </>
)};

export default Select;