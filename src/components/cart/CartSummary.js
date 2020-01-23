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
                  <DropdownItem key={item.product.id}>{item.product.productName}
                  <Badge color="success">{item.quantity}</Badge>
                  </DropdownItem>
                  
                  ))
              }
           
            <DropdownItem divider />
            <DropdownItem>Check Out</DropdownItem>
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

function mapStateToProps(state){
    return {
        cart:state.cartReducer
    }
}
export default connect(mapStateToProps)(CartSummary);
