const Transaction = ({ transaction, index }) => {
    return (
        <div className="Transaction">
            <p>{transaction.date}</p>
            <a href={`/transactions/${index}`} >{transaction.item_name[0].toUpperCase() + transaction.item_name.slice(1)}</a>
            <p>$ {transaction.amount}</p>
        </div>
    );
};

export default Transaction;