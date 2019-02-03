import {
  bootstrap as prepareServiceWorker,
  unregister as unregisterServiceWorker
} from './serviceWorker'
import { bootstrap as prepareVendor } from './vendor'

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
unregisterServiceWorker()

export default async () => {
  await prepareServiceWorker()
  await prepareVendor()
}
