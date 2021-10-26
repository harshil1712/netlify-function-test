const fetch = require('node-fetch');
exports.handler = async function (event, context) {
	console.log(event.body);
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
