import React, { useState } from "react"
import "../style/app.css"
import { useHistory } from "react-router-dom"
import { motion } from "framer-motion"
import { pageAnimation } from "./animation"

const SetUp = () => {
	//variables
	let history = useHistory()
	const [min, setMin] = useState(1)
	const [sec, setSec] = useState(30)
	const [round, setRound] = useState(3)
	const dots = ":"
	const timing = document.getElementById("timing")
	const roundText = document.getElementById("round")

	//functions
	//warning
	const removeRedRounds = () => {
		roundText.className = "buttons2"
	}
	const removeRedTimer = () => {
		timing.classList = "buttonsT"
	}
	//operating timer timer
	const AddingTimer = () => {
		if (sec < 45 && sec !== 0 + "0") {
			setSec(sec + 15)
		} else if (sec === 45) {
			setSec(0 + "0")
			setMin(min + 1)
		} else {
			setSec(15)
		}
	}
	const SubstractingTimer = () => {
		if (min === 0 && sec === 30) {
			timing.className = "redt"
			setTimeout(removeRedTimer, 800)
		} else {
			if (sec === 0 + "0") {
				setSec(45)
				setMin(min - 1)
			} else if (sec === 15) {
				setSec(0 + "0")
			} else {
				setSec(sec - 15)
			}
		}
	}
	//operating rounds setup
	const AddingRounds = () => {
		setRound(round + 1)
	}
	const SubstractingRounds = () => {
		if (round === 1) {
			roundText.className = "red"
			setTimeout(removeRedRounds, 800)
		} else {
			setRound(round - 1)
		}
	}
	//mark-up
	return (
		<motion.div
			exit="exit"
			variants={pageAnimation}
			initial="hidden"
			animate="show"
		>
			<div className="page">
				<div id="setUpContainer">
					<h1>Set it up!!</h1>
					<div className="buttons">
						<button onClick={SubstractingTimer} id="-">
							-
						</button>
						<div id="timing" className="buttonsT">
							<div id="min">{min}</div>
							<p id="dots">{dots}</p>
							<div id="sec">{sec}</div>
						</div>
						<button onClick={AddingTimer} id="+">
							+
						</button>
					</div>
					<h2>Number of rounds</h2>
					<div className="buttons2">
						<button onClick={SubstractingRounds} id="-1">
							-
						</button>
						<div id="round">{round}</div>
						<button
							onClick={() => {
								AddingRounds()
							}}
							id="+1"
						>
							+
						</button>
					</div>
					<button
						onClick={() => {
							sessionStorage.setItem("minute", min)
							sessionStorage.setItem("second", sec)
							sessionStorage.setItem("rounds", round)
							history.push("/Go")
						}}
						id="go"
					>
						GO!!!
					</button>
				</div>
			</div>
		</motion.div>
	)
}
export default SetUp
