const React = require('react');

console.log('test');

class Options extends React.Component {
  constructor() {
    super();
    this.state = {
    }

  }

  render() {
    return (
      <div>
        <h1>HELLO WORLD!!</h1>
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