import React, {useState, useEffect} from 'react'

function NewItem(props) {
    
    const [itemName, setItemName] = useState('')
    const [rate, setRate] = useState()
    const [qty, setQty] = useState()
    const [basic, setBasic] = useState()
    const [discount, setDiscount] = useState()
    const [discountAmt, setDiscountAmt] = useState()
    const [final, setFinal] = useState()
    const [tax, setTax] = useState()
    const [taxAmt, setTaxAmt] = useState()

    //calculations done here
    useEffect(() => {
        setBasic(rate*qty)
        setDiscountAmt(basic*(discount/100))
        setFinal(basic-discountAmt)
        setTaxAmt(final*(tax/100))
        sendData()
    }, [rate, qty, discount, discountAmt, tax])

    //Event handling
    const rateHandler = e => {
        setRate(e.target.value)
    }
    const qtyHandler = e => {
        setQty(e.target.value)
    }
    const discountHandler = e => {
        setDiscount(e.target.value)
    }
    const taxHandler = e => {
        setTax(e.target.value)
    }

    //callback function implemented
    const sendData = () => {
        props.getData(
            {
                serialNo: props.serial,
                itemName: itemName,
                rate: rate,
                qty: qty,
                basic: basic,
                discount: discount,
                discountAmt: discountAmt,
                final: final,
                tax: tax,
                taxAmt: taxAmt,
                payable: (final+taxAmt)
            }
        )
    }
    return (
        
        <tr>
            <td>{props.serial}</td>
            <td><input placeholder="item name" value={itemName} onChange={e => setItemName(e.target.value)} /></td>
            <td><input placeholder="rate" value={rate} onChange={rateHandler} /></td>
            <td><input placeholder="quantity" value={qty} onChange={qtyHandler} /></td>
            <td>{basic}</td>
            <td><input placeholder="discount %" value={discount} onChange={discountHandler} /></td>
            <td>{discountAmt}</td>
            <td>{final}</td>
            <td><input placeholder="tax %" value={tax} onChange={taxHandler} /></td>
            <td>{taxAmt}</td>
            <td>{final+taxAmt}</td>
            <td><button > Delete </button></td>
        </tr>
    )
}

export default NewItem
