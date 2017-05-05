"use strict";
import React, { Component, PropTypes } from "react";

class JackLog_form extends React.Component{

	handleSubmit(event){
		event.preventDefault();
		if(this.refs.title.value=="") return;
		var newNote={
			title : this.refs.title.value,
			description : this.refs.description.value,
			date : "posted @"+new Date().getFullYear()+"-"+(new Date().getMonth()+1)+"-"+new Date().getDate()+" "+new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()
		};
		this.refs.yout_form.reset();
		this.props.onNewNote(newNote);
	}

	render(){
		var style={
			display : this.props.formDisplayed ? "block" : "none"
		};
		return(
			<div className="note_form_wrap">
				<form ref="yout_form" action="#" className="note_form" style={ style } onSubmit={ this.handleSubmit.bind(this) }>
					<h5>Log</h5>
					<input ref="title" type="text" className="your_title" placeholder="plase input log title"/>
					<textarea ref="description" className="your_description" placeholder="input log memo"/>
					<input type="button" value="cancel" className="cancel_btn" onClick={ this.props.onToggleForm }/>
					<input type="submit" value="OK" className="confirm_btn"/>
				</form>
			</div>
		);
	}
}

JackLog_form.propTypes = {
	onToggleForm : PropTypes.func.isRequired,
	formDisplayed : PropTypes.bool.isRequired,
	onNewNote : PropTypes.func.isRequired
}

export default JackLog_form; 