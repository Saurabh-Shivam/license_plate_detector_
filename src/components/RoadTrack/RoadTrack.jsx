import React, { useState, useRef, useLayoutEffect, useEffect } from "react"
import { motion } from "framer-motion"
import "./RoadTrack.css"

const RoadTrack = () => {
	const numRows = 20
	const numCols = 11

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
			return { x: x - 820, y: y - 840 }
		}
		return { x: 0, y: 0 }
	}

	useLayoutEffect(() => {
		const targetPositionsArray = [135, 139, 118].map((boxNumber) =>
			getPositionOfTargetDiv(boxNumber)
		)
		setTargetPositions(targetPositionsArray)
	}, [])

	useEffect(() => {
		if (animationCompleted) return

		const nextTargetIndex = (currentTargetIndex + 1) % targetPositions.length
		if (nextTargetIndex === 0) {
			setAnimationCompleted(true) // Mark animation as completed when it reaches the end
			return // Stop further animation when reaching the end
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
			initial: { x: -165, y: 0 },
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

	return (
		<>
			<div className="roadContainer">
				{gridItems}
				<motion.div
					className={`road-block car`}
					ref={movingDivRef}
					{...animationProps}
				>
					CAR
				</motion.div>
			</div>
		</>
	)
}

export default RoadTrack
