import React, { useEffect, useState } from 'react'
import { Button, Dropdown, Grid } from 'semantic-ui-react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CATEGORIES } from '../utils/constants/categories';
import { COUNTRIES } from '../utils/constants/countries';
import { connect } from 'react-redux'
import { getOrders } from '../redux/admin/actions';
import OrderMiniView from './orders/OrderMiniView';

// Handle all types of filters 
function AdminPage({ orders, getOrders}) {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [country, setCountry] = useState('')
    const [category, setCategory] = useState('')


    const handleSubmit = (event) => {
        async function awaitOrders(){
          const filters = {
            'country': country,
            'category': category
          }

          await getOrders(buildFilters(startDate, endDate, filters))
        }
        
        event.preventDefault()
        
        if (verifyData(startDate, endDate)) {
          awaitOrders()
        }
    }

    return (
      <React.Fragment>
        <form>
                <Button>Latest orders</Button>
                <Button href="/upload/product">Upload product</Button>
                <Button onClick={(event) => handleSubmit(event)}>Get orders</Button>
                <Dropdown
                    placeholder='Select country'
                    fluid
                    search
                    selection
                    options={COUNTRIES}
                    onChange={(e, {value})=> setCountry(value)}
                />
                <Dropdown
                    placeholder='Select category'
                    fluid
                    search
                    selection
                    options={CATEGORIES}
                    onChange={(e, {value})=> setCategory(value)}
                />
                <label>Start Date</label>
                <Calendar
                  onChange={(date) => setStartDate(date)}
                />
                <label>End Date</label>
                <Calendar
                  onChange={(date) => setEndDate(date)}
                />
        </form>
        <Grid columns="equal" divided="vertically" container={false}>
          <Grid.Row textAlign='center'>
            <Grid.Column>Order ID</Grid.Column>
            <Grid.Column>Status</Grid.Column>
            <Grid.Column>Date of order</Grid.Column>
            <Grid.Column>Delivery date</Grid.Column>
            <Grid.Column>Total price</Grid.Column>
            <Grid.Column>Ordered by user</Grid.Column> 
            <Grid.Column>Products Ordered</Grid.Column> 
          </Grid.Row>
                  { orders ? 
                    orders.map(order => <OrderMiniView key={order.id} props={order}/>)
                    : orders }
        </Grid>
        </React.Fragment>
    ) 
}

function buildFilters(startDate, endDate, filters){
  let defaultFilters = {
    'time_period': {
      'start': startDate.toUTCString(),
      'end': endDate.toUTCString()
    }
  }
  // add filters that have a value
  for (const filterName in filters){
    const filter = filters[filterName]
    if (filter){
      defaultFilters[filterName] = filter
    }
  }

  return defaultFilters
}



function verifyData(startDate, endDate){
  // verify end date isn't before startDate
  if (startDate > endDate){
    alert('Start date should be before or the same as the end date')
    return false
  }

  return true
}



function mapStateToProps(state, props){
  const orders = state.adminOrders.data ? state.adminOrders.data : undefined
  return {
    orders,
    ...props
  }
}

function mapDispatchToProps(dispatch){
  return {
    getOrders : (filters)  => dispatch(getOrders(filters)) 
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminPage)