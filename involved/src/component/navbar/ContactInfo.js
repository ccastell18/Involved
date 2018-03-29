import React from 'react';
import styled from 'styled-components';
import James from './james.jpg';
import Chris from './chris.jpg';
import './tech.css';

const Image = styled.img`
align: right;
    width: 150px;
    height: 200px;
    padding-bottom: 15px;
`;
const Image2 = styled.img`
align: left;
    width: 150px;
    height: 200px;
    padding-bottom: 15px;
		margin-top: -31%
`;

const ContactInfo = () => {

	return(

		<div className="container">
			<div className="row">
				<div className="col-xs-6 col-sm-6">
					<div className="Cat">
						<div>James Lockwood
							<br/>
							<a href="mailto:Ksjjl05@gmail.com">email:	Ksjjl05@gmail.com</a>
							<br/>
							<a href="https://github.com/jameslock86">github: 	https://github.com/jameslock86</a>
							<br/>
							<a href="https://www.linkedin.com/in/james-lockwood/">linkedIn:
		https://www.linkedin.com/in/james-lockwood/</a>
							<br/>
							<div>
								<p><h3>About Me:</h3>
									I became a Web Page Developer to be able to help other people and make things that can better the world and the people around me.
								</p>
							</div>
						</div>
					</div>
				</div>







				<div className="col-xs-6 col-sm-6"><Image src={James}/>
				</div>


				<div className="col-xs-6 col-sm-6">
					<div className="Cat">
						<div>Christopher Castellan
							<br/>
							<a href="mailto:c.castellano18@gmail.com">
								email:c.castellano18@gmail.com</a>
							<br/>
							<a href="https://github.com/ccastell18">github:	https://github.com/ccastell18</a>
							<br/>
							<a href="https://www.linkedin.com/in/christopher-castellano/">
				linkedIn:	https://www.linkedin.com/in/christopher-castellano/</a>
							<br/>
							<div>
								<p><h3>About Me:</h3>
										I became a Web Page Developer to be able to help other people and make things that can better the world and the people around me.
								</p>
							</div>
						</div>


					</div>
				</div>
				<div className="col-xs-6 col-sm-6"><Image2 src={Chris}/>
				</div>
			</div>

		</div>

	);


};
export default ContactInfo;
