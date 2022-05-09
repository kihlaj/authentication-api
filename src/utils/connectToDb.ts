import mongoose from 'mongoose'
import config from 'config'

async function connectToDb() {
  const dbUri = config.get<string>('dbUri')

  try {
    await mongoose.connect(dbUri)
  } catch (e) {
    process.exit(1)
  }
}

export default connectToDb