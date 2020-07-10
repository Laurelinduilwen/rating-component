import { connect } from 'react-redux';
import ReviewList from '../components/ReviewList';

const getVisibleReviews = (reviews) => {
  return reviews;
};

const mapStateToProps = (state) => ({
  reviews: getVisibleReviews(state.reviews),
});

export default connect(mapStateToProps)(ReviewList);
