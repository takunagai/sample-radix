import * as Popover from '@radix-ui/react-popover'
import './index.css'

const App = () => {
  return (
    <>
      <PopoverDemo />
    </>
  )
}

const PopoverDemo = () => (
  <Popover.Root>
    <Popover.Trigger>More info</Popover.Trigger>
    <Popover.Portal>
      <Popover.Content>
        Some more info…
        <Popover.Arrow />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
)

export default App
