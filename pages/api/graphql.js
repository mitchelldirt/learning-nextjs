import { ApolloServer, gql, ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-micro'

const typeDefs = gql`
type Query {
sayHello: String
}
`

const resolvers = {
	Query: {
		sayHello: () => {
			return 'Hello Level Up!!'
		}
	}
}

const apolloserver = new ApolloServer({typeDefs, resolvers});


export const config = {
	api: {
		// Turns off body parser
		bodyParser: false
	}
}

export default apolloserver.createHandler({path: '/api/graphql'})

//EXAMPLE
//export default (req, res) => {
//	res.status(200).json({
//		test: 'Hello Level Up, but better'
//	})	
//}

// LONG WAY
//export default (req, res) => {
//	res.setHeader('Content-Type', 'application/json')
//	res.statusCode = 200
//	res.end(JSON.stringify({
//		test: "Hello Level Up"
//	}))
//}
