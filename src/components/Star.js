import React , {Component} from 'react'
import '../Style.css'
import StarRatings from 'react-star-ratings';
class Star extends Component {
    constructor(props) {
        super(props);
        this.state = {rating: 0};
    }
    changeRating = ( newRating, name ) => {
        console.log(123)
        console.log(this.State)
        this.setState({
          rating: newRating
        });
      }

    render() {
        return(
            <StarRatings
            rating={this.state.rating}
            starHoverColor="green"
            starRatedColor="green"
            changeRating={this.changeRating}
            numberOfStars={5}
            name='rating'
        />           

        )
    }
}
export default Star
