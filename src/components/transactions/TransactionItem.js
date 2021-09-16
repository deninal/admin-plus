import React from 'react'


function TransactionItem({number, customer, amount, status, style}) {
    const [checked, setChecked] = React.useState(false);
    const handleChange = () => {
    setChecked(!checked);
  };

  


    return (
        <div>
            <div className="transactionItem">
                    <input
                    className="checkbox"
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                    />
                    <h5>{number}</h5>
                    <h5>{customer}</h5>
                    <h5>{amount}</h5>
                    <span style={style}>{status}</span>
                </div>
            
        </div>
    )
}

export default TransactionItem
