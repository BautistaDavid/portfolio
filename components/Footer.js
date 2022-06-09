import React from 'react';
import Link from 'next/link'

export const Contact = ({ title, description }) => {
	return (
		<div id="contact" className="bg-white py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="px-sm-5">
					{description.map((value, index) => (
						<p key={index} >{value}</p>
					))}
				</div>
			</div>
		</div>
	);
}




export const Footer = () => {
	return (
		<footer className="bg-secondary text-center py-2 px-5">
			<div className="container text-muted">
				<small>&copy; 2021 {" "}
					<Link href="https://github.com/hashirshoaeb">
						<a>hashirshoaeb</a>
					</Link>
					. Open sourced with love under {" "}
					<Link href="https://github.com/hashirshoaeb/portfolio/blob/main/LICENSE">
						<a>MIT</a>
					</Link>
					{" "} License
				</small>
			</div>
		</footer>
	);
}