import React from "react";
import "./DeleteBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const DeleteBtn = props => (
	<span className="delete-btn" {...props}>
		<i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
	</span>
);

export default DeleteBtn;
