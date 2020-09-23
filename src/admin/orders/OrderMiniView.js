import React from 'react'
import { Grid, Popup } from 'semantic-ui-react'
import { toIdQuantity } from '../../utils/functions/toIdQuantity'
import ProductsPopup from '../products/ProductsPopup'
import UserPopup from '../user/UserPopup'

// todo popup of user and products
export default function OrderMiniView({ props }){
    const { id, delivery_date, order_date, total_price, status, ordered_by, ordered_products } = props
    const idQuantity = toIdQuantity(ordered_products)
    return (
        <Grid.Row textAlign='center'>
            <Grid.Column>{id}</Grid.Column> 
            <Grid.Column>{status}</Grid.Column>
            <Grid.Column>{new Date(order_date).toUTCString()}</Grid.Column>  
            <Grid.Column>{new Date(delivery_date).toUTCString()}</Grid.Column> 
            <Grid.Column>{total_price}</Grid.Column> 
            <Popup
            trigger={	  
                <Grid.Column>{ordered_by.username}</Grid.Column> 	
			}>
                <UserPopup username={ordered_by.username} />
            </Popup>

            <Popup
			trigger={	  
                <Grid.Column>{ordered_products.length}</Grid.Column> 	
			}
			flowing hoverable
			>
				<ProductsPopup products={ordered_products} idQuantity={idQuantity}/>
			</Popup>
          
        </Grid.Row>
     )
    }

    /*
delivery_date: "2020-09-10T19:00:38.178507+03:00"
delivery_price: "1.00"
id: 6
order_date: "2020-09-09T19:00:38.178780+03:00"
ordered_by:
apartment: ""
city: ""
country: ""
floor: ""
id: 1
street_and_number: ""
username: "Emoto13"
zip: null
__proto__: Object
ordered_products: Array(3)
0:
country: "BG"
discount_percentage: "10.00"
id: 1
in_store: 100
name: "Laptop"
product_images: []
__proto__: Object
1:
country: "BG"
discount_percentage: "10.00"
id: 1
in_store: 100
name: "Laptop"
product_images: []
__proto__: Object
2:
country: "BG"
discount_percentage: "25.37"
id: 2
in_store: 100
name: "Laptop2"
product_images: []
__proto__: Object
length: 3
__proto__: Array(0)
status: "P"
total_price: "511.00"*/ 