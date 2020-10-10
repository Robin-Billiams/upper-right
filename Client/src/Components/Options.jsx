const React = require('react');
import QualityControl from './QualityControl.jsx';
import Focus from './Focus.jsx';
import Choices from './Choices.jsx';
import Protection from './Protection.jsx';
import Financing from './Financing.jsx';
import SVG from './SVG/icons.jsx';
import Moment from 'moment';
import $ from 'jquery';
const port = 'http://localhost:3002/'


let truck = SVG.truck;
let geoFlag = SVG.geoFlag;
let plus = SVG.plus;
let tag = SVG.tag;

let sample = {
  // _id: 0,
  // name: [`testing`, `testing 2`, `testing 3`],
  // modelNum: ["QN65Q900TSFXZA", "QN75Q900TSFXZA", "QN85Q900TSFXZA"],
  // averageReview: {
  //   stars: 4.8,
  //   votes:31
  // },
  // keyDetails: `Edge-to-edge viewing with Infinity Screen`,
  // addDetails: `See the mind-blowing sharpness and depth of real 8K with 16 times more resolution than HDTV.`,
  // option: 'Size',
  // options: [ '65"', '75"', '85"' ],
  // prices: [ 5499.99,  6999.99, 10499.99],
  // insPlan2Yr: [499.99, 599.99, 699.99], //changed
  // insPlan4Yr: [799.99, 1199.99, 1599.99],//changed
  // installments: [93.74, 145.83, 218.75],//changed
  // buyNow: [4999.99, 5999.99, 9499.99],// changed
  // savings: 1000
};
/***************************************/

class Options extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      view: 0,
      products: [],
      product: sample,
      personalize: 0
    }
    this.handleClick = this.handleClick.bind(this);
    this.wishClick = this.wishClick.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
  }

  componentDidMount() {
    if ( window.location.search ) {
      this.setState( { view: window.location.search.slice( 1 ) } )
    }
    $.get( port + 'api/base', ( response ) => {
      this.setState( { products: response, product: response[this.state.view] } )
    });
  }

  handleClick ( input ) {
    console.log('handle CLick' + input );
  }
  wishClick () {
    console.log('wish Click');
  }
  handleSelection(index) {
    this.setState( { personalize: index } );
    //  on map bind index of choice
  }

  render() {
    if ( this.state.products.length === 0 ) {
      return ( null );
    }
    const { view, product, personalize } = this.state;
    const { option } = product;
    return (
      <div className='options'>
        <Focus data={ product } wishClick={this.wishClick} selected={ personalize } heart={ SVG.heart }/>
        <br/>
        <QualityControl handleClick={ this.handleClick } object={ product } selected={ personalize }/>

        <div className='description'>
          { product.keyDetails }
          <br/><br/>
          { product.addDetails }
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
        <Protection ins={ [ product.insPlan2Yr, product.insPlan4Yr ] } selection={ personalize }/>
        <br/>
        <hr/>
        <br/>
        <div className='total-home-savings'><span className='tag' >{ tag }</span><p className='explain-the-save'> Save 25% with the Total Home Event. Purchase one eligible Samsun product and get 25% back on an equal or lesser-priced item from a different category -- now through October 3rd. <a style={ { cursor: 'pointer' } } className='click-and-save-info'>Click here to learn more</a>.</p></div>
        <br/>
        <Financing instl={ product.installments[ personalize ] } total={ product.prices[ personalize ] } savings={ product.savings } />
        <br/>
        <span className='reward-span'>
          <a className='rewards-btn' style={ { cursor: 'pointer' } } onClick={ () => { this.handleClick( ' 2% in rewards' ) }}>{plus}  Earn 2% back in rewards</a>
        </span>
        <span className='buy-now-span' onClick={ () => { this.handleClick( 'BUY NOW' ) } } style={ { cursor: 'pointer' } }>
          <b><p className='buy-now'>B U Y &nbsp; &nbsp; N O W</p></b>
        </span>
        <div className='store-finder' onClick={ () => { this.handleClick( ' store finder' ) } } style={ { cursor: 'pointer' } }>
          {geoFlag} <p className='where-to-buy'>Where to buy</p>
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