var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router
var Route = require('react-router').Route
var Link = require('react-router').Link

const dest = document.getElementById('petBox');

var searchStyle = {
  alignments: 'stretch',
  color: '#fff',
  backgroundColor: '#69bbc0',
  height: 115,
  paddingTop: 10
};

var pStyleOne = {
  marginTop: 10,
  marginLeft: 100,
  marginRight: 0,
  display: 'inline'
}

var spanStyle = {
  marginLeft: 5,
  marginTop: -10

}

var formStyle = {
  height: 90
}

var inputStyle1 = {
  display: 'inline-block',
  marginLeft: 100,
  borderRadius: 20,
  boxShadow: 'none'
}


var inputStyle2 = {
  display: 'inline-block',
  marginLeft: 290,
  borderRadius: 20,
  boxShadow: 'none'
}

var spanPStyle={
  marginLeft: 310,
  marginTop: 5,
  width: 135
}

var listingStyle = {
  backgroundColor: '#dfe4e5',
  margin: 20,
  width: 450,
  borderRadius: 10,
  padding: 20
}

var listingTitleStyle = {
  color: '#69bbc0'
}

var listingLinkStyle = {
  marginLeft: 10,
  textDecoration: 'none',
  color: '#69bbc0'
}

var ownerNameStyle = {
  marginLeft: 10
}

var ownerInfoStyle = {
  marginLeft: 10
}


var PetBox = React.createClass ({

  loadPetListFromServer: function(){
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data.search})
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString())
      }.bind(this)
    })
  },
  getInitialState: function() {
    return {data: {
              search: []
    }}
  },
  componentDidMount: function() {
    this.loadPetListFromServer();
    setInterval(this.loadPetListFromServer, this.props.pollInterval)
  },
  render: function() {
    return (
      <div className="petBox">

        <header className="serviceSearch" style={searchStyle}>
        <SearchForm />

        </header>
        <PetList data={this.state.data}/>
      </div>
    )
  }
})

var PetList = React.createClass ({

  render: function(){
    //takes a string and capitalizes the first letter
    function toTitleCase(str) {
        return str.replace(/\w\S*/g,
          function(txt){
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          });
    }
    //takes a string, checks to see if it is over 48 characters. If it's over 48 charaters, returns a shortened string with ellipses. If the 48th character is in the middle of a word, it cuts off that word and replaces it with ellipses. If the string is shorter than 48 characters, it just returns that string
    function checkDescription(str){
       var maxLength = 47
       if(str.length > maxLength) {
           var trimmedStr = str.substring(0,maxLength)
           trimmedStr = trimmedStr.substring(0, Math.min(trimmedStr.length, trimmedStr.lastIndexOf(" " )))+ "..."
           return trimmedStr
       } else {return str}
   }
   //takes a url as a string and replaces all double dashes and spaces with single dashes using regular expressions to filter
   function fixUrl(str) {
      str = str.replace(/\s+/g, '-').replace(/-{2,}/g, '-').toLowerCase()
      return(str)
   }

    var listingNodes = this.props.data.map(function(listing, index) {
      var title = listing.title
      var description = listing.description
      var firstName = listing.user.first
      var lastName = listing.user.last.slice(0,1) + "."
      var petName = listing.pet.name
      var petType = listing.pet.type
      //var link = listing.url this isn't in the json, it's a place holder

      return (
        <PetListing
        title={toTitleCase(title)}
        description={checkDescription(description)}
        first={toTitleCase(firstName)}
        last={toTitleCase(lastName)}
        petName={toTitleCase(petName)}
        petType={toTitleCase(petType)}
        //link={fixUrl(link)} placeholder for link because it's absent from json
        key={index}>
        </PetListing>
      )
    })
      return (
        <div className="petListing">
          {listingNodes}
        </div>
      )
  }
})

var PetListing = React.createClass ({
  render: function(){
    return (
      <div className="listing" style={listingStyle}>
        <h2 className="listingTitle" style={listingTitleStyle}>
        {this.props.title}
        </h2>
        <a className="listingLink" href="#" style={listingLinkStyle}>
        //{this.props.link}-filler-url
        </a>
        <h3 className="ownerName" style={ownerNameStyle}>
        {this.props.first} {this.props.last}
        </h3>
        <p className="ownerInfo" style={ownerInfoStyle}>
        Pet Name: {this.props.petName}
        </p>
        <p className="ownerInfo" style={ownerInfoStyle}>
        {this.props.description}
        </p>
      </div>
    )
  }
})

var SearchForm = React.createClass ({
  getInitialState: function() {
    return {url: ''}
  },
  queryChange: function(evt) {
    this.setState({url: evt.target.value});
  },

  handleUrl: function() {
    window.location = 'localhost:3000/' + this.state.url;
  },

  render: function() {

    return (
      <form className="serviceForm" style={formStyle}>
        <p style={pStyleOne}>
        Looking For:
        </p>

        <button onClick={this.handleUrl()} style={inputStyle1} name="boarding" value="/static/search.json?service=boarding" />
        <span style={spanStyle}>Boarding</span>
          <p style={spanPStyle}>
          at the Host&#8217;s home
        </p>

        <button onClick={this.handleUrl()} style={inputStyle2} name="sitting" value="/static/search.json?service=sitting" />
        <span style={spanStyle}>Sitting
          <p style={spanPStyle}>
          at my home
          </p>
        </span>
      </form>
    )
  }

})

ReactDOM.render(
    <PetBox url="/static/search.json" pollInterval={2000} />,
    dest
);



window.React = React; // enable debugger
