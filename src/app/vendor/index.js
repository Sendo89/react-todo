import { bootstrap as prepareFontAwesome } from './fontAwesome'
import { bootstrap as prepareFaker } from './faker'

export const bootstrap = async () => {
  await prepareFontAwesome()
  await prepareFaker()
}
