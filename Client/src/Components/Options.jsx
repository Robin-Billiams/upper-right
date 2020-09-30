const React = require('react');
import QualityControl from './QualityControl.jsx';
import Focus from './Focus.jsx';




let sample = {
  _id: 0,
  name: `65" Class Q900TS QLED 8K UHD HDR Smart TV (2020)`,
  modelNum: "QN65Q900TSFXZA",
  averageReview: {
    stars: 4.8,
    votes:31
  },
  insPlan2Yr: 499.99,
  insPlan4Yr: 799.99,
  installments: 93.74,
  buyNow: 4999.99,
  savings: 1000
};
/***************************************/

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 0,
      products: [sample]
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    console.log('handle CLick');
  }
  wishClick () {
    console.log('wish Click');
  }

  render() {
    const { view, products } = this.state;
    return (
      <div className='Options'>
        <Focus data={ products[view] } wishClick={this.wishClick} />
        <br/>
        <QualityControl handleClick={ this.handleClick } object={ products[ view ] }/>
        <div className='description'><p>Breif 40 word description</p></div>
        <div className='possibilities'>
          <p>Choice of Size</p>
          <br/>
          <div className='selectors'></div>
        </div>


      </div>
    )
  }
}
// $.ajax({
//   url: `/api/customizePurchase`,
//   type: `GET`,
//   data: JSON.stringify( selection ),
//   success: ( result ) => {
//     this.setState( { \affected\: result})
//   }
// })

module.exports = Options;