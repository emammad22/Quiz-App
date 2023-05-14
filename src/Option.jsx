import React from "react";

function Option(props) {

    const { handleChange, handleCategory } = props;

    return <div className="d-flex ">
        {/* Category for Level of difficulty */}
        <select onChange={handleChange} className="form-select form-select-lg mb-3 me-3 w-25" aria-label=".form-select-lg example">
            <option>Choose level of difficulty</option>
            {/* <option value="All">All</option> */}
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
        </select>

        {/* Category for Topic */}
        <select onChange={handleCategory} className="form-select form-select-lg mb-3 w-25" aria-label=".form-select-lg example">
            <option>Choose Topic</option>
            <option value="Windows">Windows</option>
            <option value="Linux">Linux</option>
        </select>
    </div>
        ;
}

export default Option;