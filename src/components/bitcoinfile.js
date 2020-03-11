import React, { Component } from 'react'
import './App.css'
import Chart from './Chart'
import WebUtils from './WebUtils'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

class bitcoinfile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      upToDate: new Date(),
      limit: 100
    }
    this.handleChangeUpToDate = this.handleChangeUpToDate.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.updateChartData = this.updateChartData.bind(this)
  }

  updateChartData () {
    const upToDate = this.state.upToDate || new Date()
    WebUtils.getData(this.state.limit, Math.round(upToDate.getTime() / 1000)).then(data => {
      this.setState({ data })
    })
  }

  componentDidMount () {
    this.updateChartData()
  }

  handleChangeUpToDate (date) {
    this.setState({
      upToDate: date
    }, this.updateChartData)
  }

  handleChange (event) {
    this.setState({ limit: event.target.value }, this.updateChartData)
  }

  render () {
    if (this.state.data == null) {
      return <div>Loading...</div>
    }
    return (
      <div className='app'>
        <div className='select-row'>
          <label>
            Up to date:
            <DatePicker
              selected={this.state.upToDate}
              onChange={this.handleChangeUpToDate}
            />
          </label>
          <label>
            Limit:
            <input type='text' value={this.state.limit} onChange={this.handleChange} />
          </label>
        </div>
        <Chart className='chart' type='svg' data={this.state.data} />
      </div>
    )
  }
}

export default bitcoinfile