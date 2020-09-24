// this is where the statefull component will go

$.ajax({
  url: `/api/customizePurchase`,
  type: `GET`,
  data: JSON.stringify( selection ),
  success: ( result ) => {
    this.setState( { \affected\: result})
  }
})