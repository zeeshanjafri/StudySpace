import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="border p-4 flex flex-col bg-gray-100 flex-shrink-0">
            {/* Joined Groups Section */}
            <div className="mx-2 border mt-8">
                <h1 className="text-xl mb-3 font-bold sidebarSectionText">
                    Joined Groups
                </h1>
                <div className="flex flex-col space-y-3">
                    <NavLink
                        to="/group/financial-markets"
                        className="sidebarContentText"
                    >
                        Financial Markets
                    </NavLink>
                    <NavLink to="/about" className="sidebarContentText">
                        About
                    </NavLink>
                </div>
            </div>
            {/* Friend Online Section */}
            <div className="mx-2 border mt-6">
                <h1 className="text-xl mb-3 font-bold sidebarSectionText">
                    Friends Online
                </h1>
                <div className="flex flex-col space-y-3">
                    <p className="sidebarContentText">Name 1</p>
                    <p className="sidebarContentText">Name 2</p>
                    <p className="sidebarContentText">Name 3</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
