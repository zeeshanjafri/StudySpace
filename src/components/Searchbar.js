import React, { useRef, useEffect, useState } from "react";
// import history from "../browserHistory";
import { AiOutlineSearch } from "react-icons/ai";

import { connect } from "react-redux";

const Searchbar = (props) => {
    //Detect click outside of component:
    // https://stackoverflow.com/questions/32553158/detect-click-outside-react-component

    const searchBarInputRef = useRef < HTMLInputElement > null;
    const [searchTerm, setSearchTerm] = useState("");

    const handleKeyDown = (event: any) => {
        //https://stackoverflow.com/questions/31272207/to-call-onchange-event-after-pressing-enter-key
        if (event.key === "Enter") {
            event.preventDefault();

            if (searchTerm === "") {
                // history.push("/search");
            } else {
            }
        }
    };

    return (
        <React.Fragment>
            <form className={"searchBarForm"}>
                <input
                    autoFocus={false}
                    data-testid="searchBarInput"
                    className="searchBarInput"
                    type="search"
                    placeholder="Search groups, posts, etc"
                    name="search"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyDown}
                    autoComplete="off"
                    // ref={searchBarInputRef}
                />
                <AiOutlineSearch
                    className="searchBarIcons"
                    data-testid="searchIcon"
                    // onClick={() => {
                    //     history.push(`/search?q=${searchTerm}`);
                    // }}
                />
            </form>
        </React.Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        // search: state.search,
    };
};

export default connect(mapStateToProps, {})(Searchbar);
