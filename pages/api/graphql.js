import { ApolloServer, gql,  } from 'apollo-server-micro'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
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

const apolloserver = new ApolloServer({
	typeDefs, 
	resolvers,
	playground: true,
	plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]	
});


export const config = {
	api: {
		// Turns off body parser
		bodyParser: false
	}
}

const startServer = apolloserver.start()
export default async function handler(req, res) {
await startServer;
await apolloserver.createHandler({path: '/api/graphql'})(req, res)
}


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
