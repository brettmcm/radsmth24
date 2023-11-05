import Logos from './components/logos'
import Colors from './components/colors'
import Disrupt from './components/disruptor'

export default function Home() {
  return (
    <div>
      <Disrupt
        image="url(/canary/bottle.png)"
        />
      <Logos
        chapter="01"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu vehicula metus, a facilisis sapien. Maecenas pharetra, dui quis ullamcorper dignissim, odio lacus convallis lectus, quis facilisis augue lectus ut ipsum."
        />
      <Disrupt
        image="url(/canary/posters.png)"
        />
      <Colors
        chapter="02"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu vehicula metus, a facilisis sapien. Maecenas pharetra, dui quis ullamcorper dignissim, odio lacus convallis lectus, quis facilisis augue lectus ut ipsum."
        />
    </div>
  )
}
