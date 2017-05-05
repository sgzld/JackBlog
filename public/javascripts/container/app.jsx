"use strict";
import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { initNotes, addNote, deleteNote } from "../action/action.jsx";
import JackLog_header from "../component/JackLog_header.jsx";
import JackLog_form from "../component/JackLog_form.jsx";
import JackLog_list from "../component/JackLog_list.jsx";
import "../../stylesheets/style.scss";

class Logs extends React.Component{
	constructor(props){
		super(props);
		this.state={
			formDisplayed : false
		};
	}

	componentDidMount(){
		this.props.dispatch( initNotes() );
	}

	onToggleForm(){
		this.setState({
			formDisplayed : !this.state.formDisplayed
		});
	}

	onNewNote(newNote){
		this.props.dispatch( addNote(newNote) );
	}

	onDeleteNote(date){
		/*根据日期来删除Log*/
		var delete_date={
			date : date
		};
		this.props.dispatch( deleteNote(delete_date) );
	}

	render(){
		const { notes } = this.props;
		return(
			<div className="container">
				<JackLog_header onToggleForm={ this.onToggleForm.bind(this) }/>
				<div className="container_main">
					<JackLog_form onToggleForm={ this.onToggleForm.bind(this) } 
					formDisplayed={ this.state.formDisplayed } onNewNote={ this.onNewNote.bind(this) }/>
					<JackLog_list notes={ notes } onDeleteNote={ this.onDeleteNote.bind(this) }/>
				</div>
			</div>
		);
	}
}

Logs.propTypes = {
	notes : PropTypes.arrayOf(
			PropTypes.shape({
				title : PropTypes.string.isRequired,
				description : PropTypes.string.isRequired,
				date : PropTypes.string.isRequired
			}).isRequired
		).isRequired
}

function select(state){
	return{
		notes : state.notes
	}
}

export default connect(select)(Logs);