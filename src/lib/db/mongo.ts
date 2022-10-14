import { connect } from 'mongoose'
import { SECRET_MONGO_URI } from '$env/static/private'

let mongooseConnection: typeof import('mongoose')

export async function getMongoConnection() {
  if (mongooseConnection) return mongooseConnection

  try {
    mongooseConnection = await connect(SECRET_MONGO_URI)
    console.log('Connected to MongoDB')
    return mongooseConnection
  } catch (error) {
    console.log('error', error)
  }
}
