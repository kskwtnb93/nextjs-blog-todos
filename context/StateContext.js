import { createContext, useState } from "react";

export const StateContext = createContext();

export default function StateContextProvider(props) {
	const [selectedTask, setSelectedTask] = useState({ id: 0, title: "" });
	return (
		// 以下プロバイダーで囲えば、selectedTask, setSelectedTask　が使えるようになる
		<StateContext.Provider
			value={{
				selectedTask,
				setSelectedTask,
			}}
		>
			{props.children}
		</StateContext.Provider>
	);
}