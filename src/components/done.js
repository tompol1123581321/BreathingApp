import React from "react"
import "../style/app.css"
import { motion } from "framer-motion"
import { pageAnimation } from "./animation"

const Done = () => {
	return (
		<motion.div
			exit="exit"
			variants={pageAnimation}
			initial="hidden"
			animate="show"
		>
			<div className="page">
				<div id="done">
					<h1>You are DONE for today.</h1>
				</div>
			</div>
		</motion.div>
	)
}

export default Done
