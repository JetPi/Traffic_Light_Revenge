import React, { useState } from "react";
import Light from "./Light.jsx"

//create your first component
const TrafficLight = () => {
	let [activeLight, setActiveLight] = useState("")
	let baseColors = ["red", "yellow", "green"]
	let [colors, setColors] = useState(baseColors)

	const changeActive = (color) => {
		if(color == activeLight){
			setActiveLight("")
		} else if(color != activeLight){
			setActiveLight(color)
		}
	}

	const cycleActive = () =>{
		if(activeLight == ""){
			setActiveLight(colors[0])
		}
		for (let index = 0; index < colors.length; index++) {
			if(activeLight == colors[index]){
				setActiveLight(colors[index+1])
			}else if(activeLight == colors[length-1]){
				setActiveLight(colors[0])
			}
		}
	}

	const modifyPurple = () =>{
		if(colors.includes("purple")){
			setColors(baseColors)
		}else{
			setColors(colors => [...colors, "purple"])
		}
	}

	let test = changeActive

	return (
		<>
			<div className="d-flex flex-column align-items-center">
				<div className="bg-dark traffic-pole "></div>
				<div className="traffic-box d-flex flex-column align-items-center text-bg-dark">
					{colors.map((color, index)=> {
						return(<Light key={index} click={test} color={color} active={activeLight} />)
					})}
				</div>
				<button onClick={() => cycleActive()} className="btn btn-primary my-3">Change Light</button>
				<button onClick={() => modifyPurple()} className="btn btn-primary my-3">Purple Light</button>
			</div>

		</>
	);
};

export default TrafficLight;
