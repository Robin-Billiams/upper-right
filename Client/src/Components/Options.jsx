const React = require('react');
import QualityControl from './QualityControl.jsx';
import Focus from './Focus.jsx';
import Choices from './Choices.jsx';
import Protection from './Protection.jsx';
import Financing from './Financing.jsx';
import SVG from './SVG/icons.jsx';
import Moment from 'moment';


let truck = SVG.truck;
let geoFlag = SVG.geoFlag;
let plus = SVG.plus;
let tag = SVG.tag;

let sample = {
  _id: 0,
  name: [`65" Class Q900TS QLED 8K UHD HDR Smart TV (2020)`, `75" Class Q900TS QLED 8K UHD HDR Smart TV (2020)`, `85" Class Q900TS QLED 8K UHD HDR Smart TV (2020)`],
  modelNum: ["QN65Q900TSFXZA", "QN75Q900TSFXZA", "QN85Q900TSFXZA"],
  averageReview: {
    stars: 4.8,
    votes:31
  },
  keyDetails: `Edge-to-edge viewing with Infinity Screen`,
  addDetails: `See the mind-blowing sharpness and depth of real 8K with 16 times more resolution than HDTV.`,
  option: 'Size',
  options: [ '65"', '75"', '85"' ],
  prices: [ 5499.99,  6999.99, 10499.99],
  insPlan2Yr: 499.99,
  insPlan4Yr: 799.99,
  installments: 93.74,
  buyNow: 4999.99,
  savings: 1000
};
/***************************************/

class Options extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      view: 0,
      products: [ sample ],
      personalize: 1
    }
    this.handleClick = this.handleClick.bind(this);
    this.wishClick = this.wishClick.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleClick ( input ) {
    console.log('handle CLick' + input );
  }
  wishClick () {
    console.log('wish Click');
  }
  handleSelection(index) {
    console.log('handle Selection')
    //  on map bind index of choice
    //  this.setState( this.state.personalize: index );
    /** this will cause Choices to re render with new information calculated */
  }

  render() {
    const { view, products, personalize } = this.state;
    let product = products[view];
    const { option } = product;
    return (
      <div className='options'>
        <Focus data={ products[view] } wishClick={this.wishClick} selected={ personalize }/>
        <br/>
        <QualityControl handleClick={ this.handleClick } object={ products[ view ] } selected={ personalize }/>

        <div className='description'>
          { products[view].keyDetails }
          <br/><br/>
          { products[view].addDetails }
        </div>
        <div className='possibilities'>
          <p className='option'>{ option }</p>
          <Choices
          select={ this.handleSelection }
          selected={ personalize } // index of options and prices
          options={ product.options }
          prices={ product.prices }
          />
        </div>
        <hr/>
        <Protection ins={ [ product.insPlan2Yr, product.insPlan4Yr ] } />
        <hr/>
        <div className='total-home-savings'><span className='tag' >{ tag }</span><p className='explain-the-save'> Save 25% with the Total Home Event. Purchase one eligible Samsun product and get 25% back on an equal or lesser-priced item from a different category -- now through October 3rd. <a style={ { cursor: 'pointer' } } className='click-and-save-info'>Click here to learn more</a>.</p></div>
        <br/>
        <Financing instl={ product.installments } total={ product.prices[ personalize ] }/>
        <br/>
        <span className='reward-span'>
          <a className='rewards-btn' style={ { cursor: 'pointer' } } onClick={ () => { this.handleClick( ' 2% in rewards' ) }}>{plus}  Earn 2% back in rewards</a>
        </span>
        <span className='buy-now-span' onClick={ () => { this.handleClick( 'BUY NOW' ) } } style={ { cursor: 'pointer' } }>
          <b><p className='buy-now'>B U Y &nbsp; &nbsp; N O W</p></b>
        </span>
        <div className='store-finder' onClick={ () => { this.handleClick( ' store finder' ) } } style={ { cursor: 'pointer' } }>
          <span className='geo-flag'>{geoFlag}</span>
          <p className='where-to-buy'>Where to buy</p>
        </div>
        <div className='e-t-a'>
          {truck}<p className='free-shipping'><b>Free shipping and free 15-day returns</b></p>
          <br/>
          <p className='arival'>Ships by {Moment(Moment().add(2, 'days').calendar()).format('MMM Do')}</p>
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

export default Options;