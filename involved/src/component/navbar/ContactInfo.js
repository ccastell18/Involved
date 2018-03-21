import React from 'react';
import styled from 'styled-components';
import James from './james.jpg';
import Chris from './chris.jpg';
 

const Image = styled.img`
align: right;
    width: 150px;
    height: 200px;
    padding-bottom: 15px;
`;

const ContactInfo = () => {

	return(

		<div className="container">


			<div className="row">
			  <div className="col-xs-6 col-sm-6">
					<div>James Lockwood<br/>
						<a href="mailto:Ksjjl05@gmail.com">email:	Ksjjl05@gmail.com</a>
						<br/>
						<a link="https://github.com/jameslock86">github:	https://github.com/jameslock86</a>
						<br/>
						<a link="https://www.linkedin.com/in/james-lockwood/">linkedIn:
		https://www.linkedin.com/in/james-lockwood/</a>
						<br/>
			 </div>
		 </div>
			  <div className="col-xs-6 col-sm-6"><Image src={James}/>
				</div>


			  <div className="clearfix visible-xs-block"></div>

			  <div className="col-xs-6 col-sm-6">
					<div>Christopher Castellan
						<br/>
						<a link="mailto:c.castellano18@gmail.com"> email:	c.castellano18@gmail.com</a>
						<br/>
						<a link="https://github.com/ccastell18">github:	https://github.com/ccastell18</a>
						<br/>
						<a link="https://www.linkedin.com/in/christopher-castellano/">
				linkedIn:	https://www.linkedin.com/in/christopher-castellano/</a>
						<br/>
					</div></div>
				<div className="col-xs-6 col-sm-6"><Image src={Chris}/>
				</div>
			</div>

		</div>

	);


};
export default ContactInfo;
