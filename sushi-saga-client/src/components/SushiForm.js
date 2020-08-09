import React from 'react'

export default class SushiForm extends React.Component {
    state = {funds:""}

    changeFunds = (e) => {
        const newFunds= e.target.value
        this.setState({funds: newFunds})
    }

    render() {
        return (
        <div className="form">
            <form onSubmit={(e) => {
                e.preventDefault()
                this.props.addFunds(parseInt(e.target[0].value))
                this.setState({funds:""})
            }}>
                <input onChange={this.changeFunds} type="number" value={this.state.funds}/>
                <input type="submit"/>
            </form>
        </div>
        )
    }
}