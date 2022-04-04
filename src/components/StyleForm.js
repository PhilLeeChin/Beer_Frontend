import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { addStyle } from '../actions/actionBrewer'


function StyleForm({beerId, addStyle}){
    const [served, setServed] = useState("")
    const [appetizers, setAppetizers] = useState("")

    const saveStyle = (e) => {
        e.preventDefault()
        const newStyle = {served, appetizers, beer_id: beerId}
        addStyle(newStyle, beerId)
        setServed("")
        setAppetizers("")
        window.location.reload(false);
    }

    return <form>
        <label>Served: <input type="text" name="served" onChange={(e) => setServed(e.target.value)} value={served}/></label>
        <label>Appetizers: <textarea name="appetizers" onChange={(e) => setAppetizers(e.target.value)} value={appetizers}></textarea></label>
        <button type="submit" onClick={saveStyle}> Save </button>
    </form>
}

const mapStateToProps = (state) => ({beerId: state.grabBeer.id})

export default connect(mapStateToProps, {addStyle})(StyleForm)