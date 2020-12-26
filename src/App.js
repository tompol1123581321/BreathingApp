import React from "react"
import "./style/app.css"
import Setup from "./components/setUp"
import Copyright from "./components/copyright"
import Header from "./components/header"
import Go from "./components/go"
import Done from "./components/done"
//Router
import {
	Route,
	Switch,
	useLocation,
} from "react-router-dom"
import { AnimatePresence } from "framer-motion"

const App = () => {
	const location = useLocation()
	return (
		<div id="basebackground">
			<Header />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route path="/" exact>
						<Setup />
					</Route>
					<Route path="/Go" exact>
						<Go />
					</Route>
					<Route>
						<Done path="/Done" exact />
					</Route>
				</Switch>
			</AnimatePresence>
			<Copyright />
		</div>
	)
}
export default App
