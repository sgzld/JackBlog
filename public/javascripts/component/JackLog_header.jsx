"use strict";
import React, { Component, PropTypes } from "react";

class JackLog_header extends React.Component{
	render(){
		return(
			<div className="header">
				<div className="header_main">
					<h2>Jack Log</h2>
					<input type="button" value="Add Log" className="add_note_btn" onClick={ this.props.onToggleForm }/>
				</div>
			</div>
		);
	}
}

JackLog_header.propTypes = {
	onToggleForm : PropTypes.func.isRequired
}

export default JackLog_header;