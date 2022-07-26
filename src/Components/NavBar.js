import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <h1>
                <Link to="/transactions">All Transactions</Link>
            </h1>
            <h1>
                <Link to="/transactions/new">New Transaction</Link>
            </h1>
        </nav>
    )
}

export default NavBar;