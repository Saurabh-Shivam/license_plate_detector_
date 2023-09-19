import "./App.css"
import { useState } from "react"
import { motion } from "framer-motion"
import Setup from "./assets/setup.svg"
import RoadTrack from "./components/RoadTrack/RoadTrack"

function App() {
	const [spotActive, setSpotActive] = useState(-1)
	const [carspotActive, setCarSpotActive] = useState(13)
	const toggleSpotActive = (spotNumber) => {
		setSpotActive(spotNumber)
	}
	const toggleCarSpotActive = (spotNumber) => {
		setCarSpotActive(spotNumber)
	}
	return (
		<>
			<img src={Setup} alt="Your SVG" className="road" />
			<div className="">
				{/* Gate */}
				<RoadTrack />
				{/* Car Parking Space */}

				<motion.div
					animate={{
						x: 200,
						y: 250,
						scale: 1,
						rotate: 0,
					}}
					className="carParkingLeft"
				>
					{Array.from({ length: 12 }).map((_, index) => (
						<div
							className={`parkSpot ${index < 6 ? "flip" : "unflip"}`}
							key={index}
						>
							<svg
								width="78"
								height="126"
								viewBox="0 0 78 126"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className={`bike_spot ${
									carspotActive === index + 1 ? "active" : ""
								}`}
							>
								<rect
									y="116"
									width="78"
									height="10"
									fill={carspotActive === index + 1 ? "#7eff8b" : "#8E8E8E"}
								/>
								<rect
									width="4"
									height="116"
									fill={carspotActive === index + 1 ? "#7eff8b" : "#8E8E8E"}
								/>
								<rect
									x="74"
									width="4"
									height="116"
									fill={carspotActive === index + 1 ? "#7eff8b" : "#8E8E8E"}
								/>
								<svg
									width="71"
									height="98"
									viewBox="0 0 71 98"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect x="6" width="58" height="98" fill="#DDDDDD" />
									<rect y="23" width="71" height="46" fill="#F4F0F2" />
								</svg>
							</svg>
						</div>
					))}
				</motion.div>

				<motion.div
					animate={{
						x: 980,
						y: 375,
						scale: 1,
						rotate: 0,
					}}
					className="carParkingRight"
				>
					{Array.from({ length: 12 }).map((_, index) => (
						<div
							className={`parkSpot ${index < 6 ? "flip" : "unflip"}`}
							key={index}
						>
							<svg
								width="78"
								height="126"
								viewBox="0 0 78 126"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className={`bike_spot ${
									carspotActive === index + 13 ? "active" : ""
								}`}
							>
								<rect
									y="116"
									width="78"
									height="10"
									fill={carspotActive === index + 13 ? "#7eff8b" : "#8E8E8E"}
								/>
								<rect
									width="4"
									height="116"
									fill={carspotActive === index + 13 ? "#7eff8b" : "#8E8E8E"}
								/>
								<rect
									x="74"
									width="4"
									height="116"
									fill={carspotActive === index + 13 ? "#7eff8b" : "#8E8E8E"}
								/>
							</svg>
						</div>
					))}
				</motion.div>

				{/* Bike Parking Space */}
				<motion.div
					animate={{
						x: 100,
						y: 670,
						scale: 1,
						rotate: 0,
					}}
					className="bikeParkingLeft"
				>
					{Array.from({ length: 6 }).map((_, index) => (
						<div className="parkSpot" key={index}>
							<svg
								width="78"
								height="126"
								viewBox="0 0 78 126"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className={`bike_spot ${
									spotActive === index + 1 ? "active" : ""
								}`}
							>
								<rect
									y="116"
									width="78"
									height="10"
									fill={spotActive === index + 1 ? "#7eff8b" : "#8E8E8E"}
								/>
								<rect
									width="4"
									height="116"
									fill={spotActive === index + 1 ? "#7eff8b" : "#8E8E8E"}
								/>
								<rect
									x="74"
									width="4"
									height="116"
									fill={spotActive === index + 1 ? "#7eff8b" : "#8E8E8E"}
								/>
							</svg>
						</div>
					))}
				</motion.div>

				<motion.div
					animate={{
						x: 1220,
						y: 670,
						scale: 1,
						rotate: 0,
					}}
					className="bikeParkingRight"
				>
					{Array.from({ length: 6 }).map((_, index) => (
						<div className="parkSpot" key={index}>
							<svg
								width="78"
								height="126"
								viewBox="0 0 78 126"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className={`bike_spot ${
									spotActive === index + 7 ? "active" : ""
								}`}
							>
								<rect
									y="116"
									width="78"
									height="10"
									fill={spotActive === index + 7 ? "#7eff8b" : "#8E8E8E"}
								/>
								<rect
									width="4"
									height="116"
									fill={spotActive === index + 7 ? "#7eff8b" : "#8E8E8E"}
								/>
								<rect
									x="74"
									width="4"
									height="116"
									fill={spotActive === index + 7 ? "#7eff8b" : "#8E8E8E"}
								/>
							</svg>
						</div>
					))}
				</motion.div>
			</div>
		</>
	)
}

export default App
