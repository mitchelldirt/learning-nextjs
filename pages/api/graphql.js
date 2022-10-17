export default (req, res) => {
	res.status(200).json({
		test: 'Hello Level Up, but better'
	})	
}

// LONG WAY
//export default (req, res) => {
//	res.setHeader('Content-Type', 'application/json')
//	res.statusCode = 200
//	res.end(JSON.stringify({
//		test: "Hello Level Up"
//	}))
//}
