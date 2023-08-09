import React, { Component } from 'react';

class Resusable_Compo extends Component {

    render() {
        return (
          <>
          <div className="main">
                <img src={this.props.imgsrc} alt="" />
                <h1>ProductName:{this.props.ProductName}</h1><br />
                <h2><del>oldPrice:{this.props.oldPrice}</del></h2><br />
                <h3>Newprice:{this.props.Newprice}</h3><br />
                <button>click me and order now</button><br />
                <br />
            </div>
          </>  
        );
    }
}

export default Resusable_Compo;