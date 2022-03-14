import React, { Component } from "react";
import Header from './Header'
import Bier from './Bier'
import Footer from './Footer'
import Form from "./Form";

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = { 
    bieren: [
      {
      bier: 'Duvel',
      brouwerij: 'moordgat',
      alchol: 7
      },
      {
        bier: 'Vedett',
        brouwerij: 'moordgat',
        alchol: 5
      },
      {
        bier: 'Jupiler',
        brouwerij: 'AB inbev',
        alchol: 5
      },
    ],
    toon: false,
  }


  toggle_alcoholpercentage = () => {
    this.setState(prevState => {
      return { toon: !prevState.toon };
    });
  }

  bier_toevoegen = (naam, brouwerij, alchol) => {
    this.setState(({bieren}) => {
      return { 
        bieren: [...bieren, {
          bier: naam,
          brouwerij: brouwerij,
          alchol: alchol
        }],       
      };
    });
  }

  // delete_bier = () => {
  //   this.setState({bieren}) => {

  //   }
  // }

  render() { 
    return ( 
      <div className="container">
        <Header toggle={this.toggle_alcoholpercentage} />
        <hr />
        <Form toevoegen={this.bier_toevoegen} />
        <hr />
        <Bier bierLijst={this.state.bieren} toon={this.state.toon} delete={this.delete_bier} />
        <hr />
        <Footer />
      </div>
    );
  }
}

export default App;