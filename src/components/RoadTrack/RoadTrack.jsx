import React, { useState, useRef, useLayoutEffect, useEffect } from "react"
import { motion } from "framer-motion"
import "./RoadTrack.css"

const RoadTrack = ({ data, number }) => {
	const numRows = 20
	const numCols = 15

	const [boxNumbers, setBoxNumbers] = useState(
		Array.from({ length: numRows * numCols }, (_, index) => index + 1)
	)
	const [targetPositions, setTargetPositions] = useState([
		{ x: 0, y: 0 },
		{ x: 0, y: 0 },
		{ x: 0, y: 0 },
	])
	const [currentTargetIndex, setCurrentTargetIndex] = useState(0)
	const [animationCompleted, setAnimationCompleted] = useState(false)

	const movingDivRef = useRef(null)

	const getPositionOfTargetDiv = (boxNumber) => {
		const targetDiv = document.getElementById(`road${boxNumber}`)
		if (targetDiv) {
			const { x, y, width, height } = targetDiv.getBoundingClientRect()
			return { x: x - 1010, y: y - 980 }
		}
		return { x: 0, y: 0 }
	}

	useLayoutEffect(() => {
		let path = [164, 169, 147]
		if (number == 1) {
			path = [164, 169, 147]
		}
		if (number == 2) {
			path = [164, 170, 149]
		}
		if (number == 3) {
			path = [164, 172, 150]
		}
		if (number == 4) {
			path = [164, 173, 152]
		}
		if (number == 5) {
			path = [164, 166, 56, 59, 103]
		}
		if (number == 6) {
			path = [164, 166, 56, 60, 105]
		}
		if (number == 7) {
			path = [164, 166, 56, 62, 106]
		}
		if (number == 8) {
			path = [164, 166, 56, 63, 107]
		}

		const targetPositionsArray = path.map((boxNumber) =>
			getPositionOfTargetDiv(boxNumber)
		)
		setTargetPositions(targetPositionsArray)
	}, [])

	useEffect(() => {
		if (animationCompleted) return

		const nextTargetIndex = (currentTargetIndex + 1) % targetPositions.length
		if (nextTargetIndex === 0) {
			setAnimationCompleted(true)
			return
		}

		const timer = setTimeout(() => {
			setCurrentTargetIndex(nextTargetIndex)
		}, 3000)

		return () => clearTimeout(timer)
	}, [currentTargetIndex, animationCompleted, targetPositions])

	const animationProps = {
		initial: "initial",
		animate: "animate",
		variants: {
			initial: { x: -360, y: -140 },
			animate: targetPositions[currentTargetIndex],
		},
		transition: { delay: 1, duration: 3 },
	}

	const gridItems = boxNumbers.map((boxNumber, index) => {
		const key = `box-${boxNumber}`
		return (
			<div key={key} className={`road-block`} id={`road${boxNumber}`}>
				{boxNumber}
			</div>
		)
	})

	useEffect(() => {
		console.log(data)
	}, [])
	return (
		<>
			<div className="roadContainer">
				{gridItems}
				<motion.div className={`car`} ref={movingDivRef} {...animationProps}>
					<motion.div className="car-indicator">
						<img
							className="license-plate"
							src={data.image_url}
							height={30}
							width={90}
						/>
					</motion.div>
				</motion.div>
			</div>
		</>
	)
}

export default RoadTrack
