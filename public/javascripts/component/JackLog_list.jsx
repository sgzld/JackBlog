"use strict";
import React, { Component, PropTypes } from "react";
import Notes_item from "./JackLog_item.jsx";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "../../stylesheets/transition.scss";

class JackLog_list extends React.Component{
	render(){
		var notes=this.props.notes;
		var notes_items=notes.map( (note,index) => {
			return <Notes_item key={ index } title={ note.title } description={ note.description } 
				date={ note.date } onDeleteNote={ this.props.onDeleteNote }/>;
		});
		return(
			<div className="notes_list">
				<ReactCSSTransitionGroup 
				transitionName="notes" 
				transitionEnterTimeout={500}
          				transitionLeaveTimeout={500}>
					{ notes_items }
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}

JackLog_list.propTypes = {
	notes : PropTypes.arrayOf(
			PropTypes.shape({
				title : PropTypes.string.isRequired,
				description : PropTypes.string.isRequired,
				date : PropTypes.string.isRequired
			}).isRequired
		).isRequired
}

export default JackLog_list;