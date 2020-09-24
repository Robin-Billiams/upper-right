// this is will be the renderin with react will start for webpac
$.ajax({
  url: `/api/customizePurchase`,
  type: `GET`,
  data: JSON.stringify( selection ),
  success: ( result ) => {
    this.setState( { \affected\: result})
  }
})