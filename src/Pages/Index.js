import Transactions from "../Components/Transactions";

const Index = ({transactions, total}) => {
    return (
        <div>
            <h1>All Transactions</h1>
            <Transactions transactions={transactions} total={total} />
        </div>
    )
}

export default Index;