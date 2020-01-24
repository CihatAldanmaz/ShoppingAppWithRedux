import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavLink,
  Badge
} from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions"
import {Link} from "react-router-dom"

class CartSummary extends Component {

    

    renderEmptyCart(){
        return (
            <NavLink>Your Cart is Empty</NavLink>
        )
    }

    renderSummary(){
        return (
            <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Your Cart
          </DropdownToggle>
          <DropdownMenu right>
              {
                  this.props.cart.map(item =>(
                  <DropdownItem key={item.product.id}>
                      <Badge color="danger" onClick = {()=>this.props.actions.removeFromCart(item.product) }>-</Badge>
                      {item.product.productName}
                  <Badge color="success">{item.quantity}</Badge>
                  </DropdownItem>
                  
                  ))
              }
           
            <DropdownItem divider />
            <DropdownItem><Link to={"/cart"}>Check Out</Link></DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        )
    }

  render() {
    return (
      <div>
          {
              this.props.cart.length < 1 ? this.renderEmptyCart() : this.renderSummary()
          }
        
      </div>
    );
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
export default connect(mapStateToProps,mapDispatchToProps)(CartSummary);
