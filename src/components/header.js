import React from "react"
import "../style/header.css"
import rune1 from "../style/rune.png"
import { Link } from "react-router-dom"

const Header = () => {
	return (
		<div id="header">
			<Link to="/" id="homeLink">
				<h1>Breathing Excercise</h1>
				<img
					id="logo"
					src={rune1}
					alt="the logo of this app"
				/>
			</Link>
		</div>
	)
}
export default Header
