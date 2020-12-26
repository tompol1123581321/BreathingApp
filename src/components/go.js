import React, { useState, useEffect } from "react"
import "../style/app.css"
import { useHistory } from "react-router-dom"
import { motion } from "framer-motion"
import { pageAnimation } from "./animation"

const Go = () => {
	let history = useHistory()
	let minD = parseInt(sessionStorage.getItem("minute"))
	let secD = parseInt(sessionStorage.getItem("second"))
	let roundD = parseInt(sessionStorage.getItem("rounds"))
	let roundN = parseInt(roundD)
	let totalTime = minD * 60 + secD
	//sounds
	const inSound = document.getElementById("soundIn")
	const outSound = document.getElementById("soundOut")
	const soundHold = document.getElementById("soundHold")
	const soundRecover = document.getElementById(
		"soundRecover"
	)
	const [instructions, setInstructions] = useState(
		"instructions"
	)
	const [scaleSize, setscaleSize] = useState(1)
	const [counter, setCounter] = useState(0)
	const [i, seti] = useState(0)
	const [disCounter, setdisCounter] = useState(totalTime)
	const [round, setround] = useState(roundN)
	useEffect(() => {
		if (i < 30 && disCounter === totalTime) {
			setCounter(counter + 1)
			setscaleSize(4)
			setInstructions("Breathe in!")
			inSound.play()
			setTimeout(() => {
				setInstructions("Breathe out!")
				setscaleSize(0)
				outSound.play()
			}, 1900)
			setTimeout(() => {
				seti(i + 1)
			}, 3800)
		} else {
			if (disCounter >= 1 && i === 30 && counter <= 30) {
				setInstructions("Hold!")
				setTimeout(() => {
					soundHold.play()
					setdisCounter(disCounter - 1)
				}, 1000)
			} else {
				if (round > 1) {
					soundRecover.play()
					setInstructions("Recover!")
					seti(0)
					setCounter(0)
					setTimeout(() => {
						setround(round - 1)
						setdisCounter(totalTime)
					}, 15000)
				} else {
					setInstructions("Recover")
					soundRecover.play()
					setTimeout(() => {
						history.push("/done")
					}, 15000)
				}
			}
		}
	}, [i, disCounter])
	return (
		<motion.div
			exit="exit"
			variants={pageAnimation}
			initial="hidden"
			animate="show"
		>
			<div className="page">
				<div>
					<div class="normalBlue" id="roundShow">
						<b>
							Rounds to go:{round}
							<b id="roundTimer"></b>
						</b>
					</div>
					<section id="brindi">
						<motion.div
							className="letsgo"
							id="g"
							animate={{
								x: 0,
								y: 0,
								scale: scaleSize,
								rotate: 0,
								transition: { duration: 1.9 },
							}}
						></motion.div>
					</section>
					<section id="info">
						<div id="instructions">
							<p>{instructions}</p>
						</div>
						<div id="ui">
							<div id="breathsCounter">
								<b>{counter}</b>
							</div>
							<div className="line">
								<b id="secTimer">{disCounter}</b>
							</div>
						</div>
					</section>
				</div>
			</div>
		</motion.div>
	)
}

export default Go
