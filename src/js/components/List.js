import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteArticle } from "../actions/index";

const mapStateToProps = state => {
  return { articles: state.articles };
};

const deleteState = dispatch => {
  return {
    deleteArticle: article => dispatch(deleteArticle(article))
  }
}

class ConnectedList extends Component {

  handleDelete(event) {
    event.preventDefault();
    const { title } = this.state;
    const id = uuidv1();
    this.props.addArticle({ title, id });
    this.setState({ title: "" });
  }

  render() {
    console.log('the props are', this.props)
    console.log('the state is', this.state)
    return (
      <ul className="list-group list-group-flush">
      {this.props.articles.map(el => (
        <li className="list-group-item" key={el.id}>
          {el.title}
          {/* <button onClick={}>DELETE</button> */}
        </li>
      ))}
    </ul>
    )
  }
}
// const ConnectedList = ({ articles }) => (

//   <ul className="list-group list-group-flush">
//     {articles.map(el => (
//       <li className="list-group-item" key={el.id}>
//         {el.title}
//         <button onClick={}>DELETE</button>
//       </li>
//     ))}
//   </ul>
// );

const List = connect(mapStateToProps)(ConnectedList);

ConnectedList.propTypes = {
  articles: PropTypes.array.isRequired
};

export default List;
