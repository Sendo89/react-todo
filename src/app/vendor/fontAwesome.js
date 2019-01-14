import { library } from '@fortawesome/fontawesome-svg-core'
import * as FreeSolidIcons from '@fortawesome/free-solid-svg-icons'
import * as FreeBrandIcons from '@fortawesome/free-brands-svg-icons'

for (let icon in FreeSolidIcons) {
  if (FreeSolidIcons[icon].iconName) {
    library.add(
      FreeSolidIcons[icon]
    )
  }
}
for (let icon in FreeBrandIcons) {
  if (FreeBrandIcons[icon].iconName) {
    library.add(
      FreeBrandIcons[icon]
    )
  }
}

export const bootstrap = async () => {
  //
}
