import { useState } from 'react'
import * as Popover from '@radix-ui/react-popover'
import * as Slider from '@radix-ui/react-slider'
import './index.css'

const App = () => {
  const [open, setOpen] = useState(false)

  // const handleValueChange = () => {}

  return (
    <div className='flex flex-col gap-8 p-8'>
      <section>
        <h2 className='font-bold'>Popover</h2>
        <Popover.Root open={open} onOpenChange={setOpen}>
          <Popover.Trigger
            className={`${open ? 'bg-blue-200' : 'bg-gray-200'} rounded px-2 py-1 shadow`}
          >
            More info
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content className='max-w-sm rounded-xl bg-red-200 px-2 py-4'>
              Some more info… Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut 500 labore et dolore magna aliqua. Ut enim ad minim
              veniam
              <Popover.Arrow className='fill-red-200' />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </section>

      <section>
        <h2 className='font-bold'>Slider</h2>
        <form>
          <Slider.Root
            defaultValue={[50]}
            max={100}
            step={10}
            aria-label='Progress'
            className='relative flex w-[200px] touch-none select-none items-center data-[orientation=horizontal]:h-[20px] data-[orientation=vertical]:h-[100px] data-[orientation=vertical]:w-[20px]'
          >
            <Slider.Track className='relative flex-grow rounded-full bg-amber-600  data-[orientation=horizontal]:h-[3px] data-[orientation=vertical]:w-[3px]'>
              <Slider.Range className='absolute h-full rounded-full bg-blue-400' />
            </Slider.Track>
            <Slider.Thumb className='block h-[20px] w-[20px] rounded-[10px] bg-fuchsia-500 shadow-sm hover:bg-fuchsia-500 focus:shadow-lg focus:outline-0' />
          </Slider.Root>
        </form>
      </section>
    </div>
  )
}

export default App
