const fetch = (...args) =>
	import('node-fetch').then(({ default: fetch }) => fetch(...args));

exports.handler = async function (event, context) {
	if (event.httpMethod === 'GET') {
		return {
			statusCode: 404,
			body: 'The page can not be found. Try sending a POST request',
		};
	}
	if (!event.body || !event.body.url) {
		return {
			statusCode: 400,
			body: JSON.stringify({ error: 'The "url" parameter is required' }),
		};
	}
	const body = JSON.parse(event.body);
	const response = await fetch('https://n8n.app.harshil.dev/webhook/url', {
		method: 'POST',
		body: JSON.stringify(body),
	});
	const data = await response.json();
	return {
		statusCode: 200,
		body: JSON.stringify(data),
	};
};
