import "./App.css"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Setup from "./assets/setup.svg"
import RoadTrack from "./components/RoadTrack/RoadTrack"
import { onValue, ref } from "firebase/database"
import { imgDB, txtDB, db } from "./firebase"

function App() {
	const [spotActive, setSpotActive] = useState(-1)
	const [carspotActive, setCarSpotActive] = useState(1)
	const [data, setData] = useState(null) // Initialize with null or your initial data

	const toggleSpotActive = (spotNumber) => {
		setSpotActive(spotNumber)
	}

	const toggleCarSpotActive = (spotNumber) => {
		setCarSpotActive(spotNumber)
	}

	useEffect(() => {
		const query = ref(db, "parkingSpots")
		// Fetch the initial data when the component mounts
		onValue(query, (snapshot) => {
			const initialData = snapshot.val()

			if (snapshot.exists()) {
				console.log("Initial data:", initialData) // Add this line for debugging
				setData(initialData)
			}
		})

		// Set up a listener to update the data when changes occur
		const unsubscribe = onValue(query, (snapshot) => {
			const updatedData = snapshot.val()

			if (snapshot.exists()) {
				console.log("Updated data:", updatedData)
				toggleCarSpotActive(data.length - 1) // Add this line for debugging
				setData(updatedData)
			}
		})

		// Clean up the listener when the component unmounts
		return () => {
			unsubscribe()
		}
	}, [])

	return (
		<>
			<img src={Setup} alt="Your SVG" className="road" />
			<div className="">
				{/* Gate */}
				{data && data[0] && <RoadTrack data={data[0]} number={0} />}
				{data && data[1] && <RoadTrack data={data[1]} number={1} />}
				{data && data[2] && <RoadTrack data={data[2]} number={2} />}
				{data && data[3] && <RoadTrack data={data[3]} number={3} />}
				{data && data[4] && <RoadTrack data={data[4]} number={4} />}
				{data && data[5] && <RoadTrack data={data[5]} number={5} />}
				{data && data[6] && <RoadTrack data={data[6]} number={6} />}
				{data && data[7] && <RoadTrack data={data[7]} number={7} />}
				{/* Car Parking Space */}

				<motion.div
					animate={{
						x: 220,
						y: 250,
						scale: 1,
						rotate: 0,
					}}
					className="carParkingLeft"
				>
					{Array.from({ length: 8 }).map((_, index) => (
						<div
							className={`park-car-spot ${index < 4 ? "flip" : "unflip"}`}
							key={index}
						>
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
					{Array.from({ length: 8 }).map((_, index) => (
						<div
							className={`park-car-spot ${index < 4 ? "flip" : "unflip"} ${
								carspotActive === index + 1 ? "activecar" : ""
							}`}
							key={index}
						></div>
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
