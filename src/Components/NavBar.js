import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <button>
                <Link to="/transactions">All Transactions</Link>
            </button>
            <button>
                <Link to="/transactions/new">New Transaction</Link>
            </button>
        </nav>
    )
}

export default NavBar;