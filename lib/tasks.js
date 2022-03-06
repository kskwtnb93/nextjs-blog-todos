import fetch from "node-fetch";

export async function getAllTasksData() {
	const res = await fetch(
		new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-task/`)
	);
	// 受け取ったレスポンスをjsonフォーマットに変換
	const tasks = await res.json();
	// 日時（created_at）の新しい順に並び替える
	const staticfilterdTasks = tasks.sort(
		(a, b) => new Date(b.created_at) - new Date(a.created_at)
	);
	return staticfilterdTasks;
}

export async function getAllTaskIds() {
	const res = await fetch(
		new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-task/`)
	);
	// 受け取ったレスポンスをjsonフォーマットに変換
	const tasks = await res.json();
	// jsonを展開してタスクIDの要素だけ取り出す
	return tasks.map((task) => {
		return {
			params: {
				id: String(task.id),
			},
		};
	});
}

export async function getTaskData(id) {
	const res = await fetch(
		new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-task/${id}/`)
	);
	// 受け取ったレスポンスをjsonフォーマットに変換
	const task = await res.json();
	return task;
}


