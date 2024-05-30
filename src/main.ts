import axios from 'axios';
import { Characters } from '/Http'

(async () => {
  try {
    const response = await Characters.get('characters/en')
    console.log(response)
  }
    catch(error) {
      console.log("ERROR => ", error)
      throw error
  }
})