import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteArticle } from "../actions/index";

const mapStateToProps = (state, action) => {
  return { articles: state.articles };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteArticle: article => dispatch(deleteArticle(article))
  }
}

// const deleteState = dispatch => {
//   return {
//     deleteArticle: article => dispatch(deleteArticle(article))
//   }
// }

class ConnectedList extends Component {
  constructor(props) {
    super()
    this.handleDelete = this.handleDelete.bind(this)
  }
 
  handleDelete (element, deleteArticle) {
    return function () {
      // console.log(element)
      event.preventDefault();
      // const { title } = this.state;
      // const id = uuidv1();
      const {title} = element
      // console.log('element is',element)
      // console.log('function', deleteArticle)
      deleteArticle(title);
    }
  }

  render() {
    console.log('the props are', this.props)
    console.log('the state is', this.state)
    return (
      <ul className="list-group list-group-flush">
      {this.props.articles.map(el => (
        <li className="list-group-item" key={el.id}>
          {el.title}
          <button onClick={this.handleDelete(el,this.props.deleteArticle)}>DELETE</button>
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

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

ConnectedList.propTypes = {
  articles: PropTypes.array.isRequired
};

export default List;
