import { buildSchema } from 'graphql';
import 'reflect-metadata';
import './utils/connection';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';

async function bootstrap() {

    const schema = await buildSchema({
        resolvers: []
    });

    const server = new ApolloServer({schema});
    
    server.listen({port: 7822}, () => console.log('Server it´s running.'))
}

bootstrap();