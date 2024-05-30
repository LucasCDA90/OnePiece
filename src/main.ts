import { Characters } from './Http'

(async () => {
  try {
    const response = await Characters.get('characters/en')
    console.log(response.data)
  }
  catch(error) {
      console.log("ERROR => ", error)
      throw error
  }
}) ()