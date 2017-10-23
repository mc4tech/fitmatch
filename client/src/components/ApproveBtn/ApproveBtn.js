import React from "react";
import "./ApproveBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const ApproveBtn = props => (
	<span className="approve-btn" {...props}>
		<i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
	</span>
);

export default ApproveBtn;
