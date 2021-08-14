import React, { useState } from 'react'
import NewItem from './NewItem'

function InvoiceCreator() {
    
    const [serial,setSerial] = useState(1)
    const [data, setData] = useState({
        sno: 0,
        name: "",
        rate: 0,
        qty: 0,
        basicCost: 0,
        discount: 0,
        discountAmt: 0,
        finalBasicAmt: 0,
        tax: 0,
        taxAmt: 0,
        payableAmount: 0

    })

    // const newItem = () => { 
    //     setSerial(serial+1)
    //     return(
    //         <NewItem />
    //     )
    // }

    const getDataHandler = (childData) => {
        setData({
            sno: childData.serialNo,
            name: childData.itemName,
            rate: childData.rate,
            qty: childData.qty,
            basicCost: childData.basicCost,
            discount: childData.discount,
            discountAmt: childData.discountAmt,
            finalBasicAmt:childData.final,
            tax: childData.tax,
            taxAmt:childData.taxAmt,
            payableAmount: childData.payable
        })
        console.log(data)
    }
    

    return (
        <div>
            <button >Add new item</button>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Rate</th>
                        <th>Quantity</th>
                        <th>Basic Cost</th>
                        <th>Discount (%)</th>
                        <th>Discount Amt</th>
                        <th>Final Basic Cost</th>
                        <th>Taxes (%)</th>
                        <th>Tax Amt</th>
                        <th>Total Cost</th>
                        <th>Tools</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <NewItem getData={getDataHandler} />
                </tbody>
            </table>
            <hr />
            <table>
                <tbody>
                    <tr>
                        <td>Total Basic Cost</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>Total Discount</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Total Final Basic Cost</td>
                        <td>98</td>
                    </tr>
                    <tr>
                        <td>Total Tax</td>
                        <td>10</td>                    
                    </tr>
                    <tr>
                        <td>Final Price</td>
                        <td>107.8</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default InvoiceCreator
