import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as cartActions from "../../redux/actions/cartActions"
import { Table, Button } from "reactstrap";



class CartDetail extends Component {

    removeFromCart = (product) => {
        this.props.actions.removeFromCart(product);
    }

    render() {
        return (
            <div>
                <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Unit Price</th>
          <th>Quantity Per Unit</th>
          <th><td>
              </td></th>
        </tr>
      </thead>
      {this.props.cart.map(cartItem => (
          
          <tbody>
 <tr>
      <th scope="row">{cartItem.product.id}</th>
   <td>{cartItem.product.productName}</td>
   <td>{cartItem.product.unitPrice}</td>
   <td>{cartItem.quantity}</td>
   
   <td>
        <Button color="danger" onClick={() => this.removeFromCart(cartItem.product)}>
            DELETE
        </Button>
   </td>
 </tr>
</tbody>
      ))}
     
    </Table>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions:{
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}

function mapStateToProps(state){
    return {
        cart:state.cartReducer
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartDetail);

