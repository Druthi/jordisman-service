import React from 'react';
import Reviews from './Reviews.jsx';
import styles from './style.css';
import Modal from 'react-modal';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'title'
    }
    this.handleShowReviews = this.handleShowReviews.bind(this);
  }

  handleShowReviews() {
    this.setState({
      view: 'Reviews'
    });
  }

  renderReviews() {
    const {view} = this.state;
    if (view === 'title') {
      return <div className="appWrapper" onClick={this.handleShowReviews}>Ratings and Reviews &#9662;</div>
    } else {
      return <Reviews />
    }
  }

  render() {
    return (
      <div>{this.renderReviews()}</div>
    )
  }
}

export default App;


