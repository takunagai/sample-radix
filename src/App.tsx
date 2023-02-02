import { useState } from 'react'
import * as Popover from '@radix-ui/react-popover'
import './index.css'

const App = () => {
  const [open, setOpen] = useState(false)

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger
        className={`${open ? 'bg-blue-200' : 'bg-gray-200'} rounded px-2 py-1 shadow`}
      >
        More info
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className='max-w-sm rounded-xl bg-red-200 px-2 py-4'>
          Some more info… Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut 500 labore et dolore magna aliqua. Ut enim ad minim veniam
          <Popover.Arrow className='fill-red-200' />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default App
