const React = require('react');
import QualityControl from './QualityControl.jsx';
import Focus from './Focus.jsx';
import Choices from './Choices.jsx';
import Protection from './Protection.jsx';
import Financing from './Financing.jsx';

let plus = <svg className="plus-icon" viewBox="0 0 20 20"> <path d="M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10"></path></svg>

let tag = <svg className="tag-icon" viewBox="0 0 20 20" fill='grey'> <path d="M17.35,2.219h-5.934c-0.115,0-0.225,0.045-0.307,0.128l-8.762,8.762c-0.171,0.168-0.171,0.443,0,0.611l5.933,5.934c0.167,0.171,0.443,0.169,0.612,0l8.762-8.763c0.083-0.083,0.128-0.192,0.128-0.307V2.651C17.781,2.414,17.587,2.219,17.35,2.219M16.916,8.405l-8.332,8.332l-5.321-5.321l8.333-8.332h5.32V8.405z M13.891,4.367c-0.957,0-1.729,0.772-1.729,1.729c0,0.957,0.771,1.729,1.729,1.729s1.729-0.772,1.729-1.729C15.619,5.14,14.848,4.367,13.891,4.367 M14.502,6.708c-0.326,0.326-0.896,0.326-1.223,0c-0.338-0.342-0.338-0.882,0-1.224c0.342-0.337,0.881-0.337,1.223,0C14.84,5.826,14.84,6.366,14.502,6.708"></path>
</svg>
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
          <br/>
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
        <div><span className='tag' >{ tag }</span> Save 25% with the Total Home Event. Purchase one eligible Samsun product and get 25% back on an equal or lesser-priced item from a different category -- now through October 3rd. <a style={ { cursor: 'pointer' } } className='click-and-save-info'>Click here to learn more</a>.</div>
        <br/>
        <Financing instl={ product.installments } total={ product.prices[ personalize ] }/>
        <br/>
        <span className='reward-span'>
          <a className='rewards-btn' style={ { cursor: 'pointer' } } onClick={ () => { this.handleClick( ' 2% in rewards' ) }}>{plus}  Earn 2% back in rewards</a>
        </span>
        <br/>
        <span className='buy-now-span' onClick={ () => { this.handleClick( 'BUY NOW' ) } } style={ { cursor: 'pointer' } }>
          <b><p className='buy-now'>B U Y &nbsp; &nbsp; N O W</p></b>
        </span>

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