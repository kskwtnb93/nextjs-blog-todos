import fetch from "node-fetch";

export async function getAllPostsData() {
	const res = await fetch(
		new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-post/`)
	);
	// 受け取ったレスポンスをjsonフォーマットに変換
	const posts = await res.json();
	// 日時（created_at）の新しい順に並び替える
	const filteredPosts = posts.sort(
		(a, b) => new Date(b.created_at) - new Date(a.created_at)
	);
	return filteredPosts;
}

export async function getAllPostIds() {
	const res = await fetch(
		new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-post/`)
	);
	// 受け取ったレスポンスをjsonフォーマットに変換
	const posts = await res.json();
	// jsonを展開して投稿IDの要素だけ取り出す
	return posts.map((post) => {
		return {
			params: {
				id: String(post.id),
			},
		};
	});
}

export async function getPostData(id) {
	const res = await fetch(
		new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-post/${id}/`)
	);
	// 受け取ったレスポンスをjsonフォーマットに変換
	const post = await res.json();
	// return {
	// 	post,
	// };
	return post;
}


