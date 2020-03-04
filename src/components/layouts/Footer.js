import React from 'react';

const Footer = () => {
	return (
		<div className="footer">
			<hr></hr>
			This site was created by Matt Dwyer <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />
		</div>
	)

}

export default Footer;
