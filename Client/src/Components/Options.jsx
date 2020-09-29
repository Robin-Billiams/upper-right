const React = require('react');


class Options extends React.Component {
  constructor() {
    super();
    this.state = {
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    console.log('handle CLick')
  }

  render() {
    return (
      <div className='specifications'>
        <h4>PRODUCT NAME</h4><a onClick={this.handleClick} style={{ cursor: 'pointer' }}>Wishlist</a>{// add a heart to the left of the word Wishlist
  }
        <br/>

        <div className='quality-control'><p className='product-code'>N0NS3NS3NUM83R</p> <div className='all-stars'></div> <a onClick={this.handleClick} style={ { cursor: 'pointer' } }>Share</a> </div>
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