import React, { Component } from 'react';
import {connect} from "react-redux";
import { Badge } from "reactstrap";
import {bindActionCreators} from "redux";
import * as productActions from "../../redux/actions/productActions"



class ProductList extends Component {

    componentDidMount() {
        this.props.actions.getProducts()
    }
    
    render() {
        console.log(this.props.products)
        return (
            <div>
                <h3><Badge color="warning">Products</Badge>
                    <Badge color="success">{this.props.currentCategory.categoryName}</Badge></h3>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        currentCategory:state.changeCategoryReducer,
        products:state.productListReducer
    };
}

function mapDispatchToProps(dispatch){
    return{
        actions:{
            getProducts:bindActionCreators(productActions.getProducts, dispatch)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductList)
