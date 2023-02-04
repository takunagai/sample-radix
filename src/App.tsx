import { useState } from 'react'
import * as Popover from '@radix-ui/react-popover'
import * as Slider from '@radix-ui/react-slider'
import * as Tabs from '@radix-ui/react-tabs'
import Dialog from './components/Dialog'
import RadioGroupDemo from './components/RadioGroup'
import './index.css'

const App = () => {
  const [open, setOpen] = useState(false) // Popover 用
  const [slideValues, setSlideValues] = useState([0]) // Slider 用

  const handleSlideValueFull = () => {
    if (slideValues[0] === 100) {
      alert('完了！')
    }
  }

  return (
    <div className='flex flex-col gap-8 p-8'>
      <section>
        <h2 className='text-2xl font-bold'>Tab</h2>
        <Tabs.Root className='TabsRoot max-w-lg rounded-lg border shadow' defaultValue='tab1'>
          <Tabs.List
            className='TabsList border-b-2 border-gray-200'
            aria-label='Manage your account'
          >
            <Tabs.Trigger
              className='TabsTrigger h-[45px] rounded-tl-lg bg-white px-6 font-bold hover:text-primary-500 data-[state=active]:bg-primary-50 data-[state=active]:text-primary-500'
              value='tab1'
            >
              タブ１
            </Tabs.Trigger>
            <Tabs.Trigger
              className='TabsTrigger h-[45px] bg-white px-6 font-bold hover:text-primary-500 data-[state=active]:bg-primary-50 data-[state=active]:text-primary-500'
              value='tab2'
            >
              タブ２
            </Tabs.Trigger>
            <Tabs.Trigger
              className='TabsTrigger h-[45px] rounded-tr-lg bg-white px-6 font-bold hover:text-primary-500 data-[state=active]:bg-primary-50 data-[state=active]:text-primary-500'
              value='tab3'
            >
              タブ３
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content className='TabsContent rounded-b-lg bg-white p-6' value='tab1'>
            <p>タブ１のコンテンツ</p>
            <ul className='mt-4 list-inside list-disc'>
              <li>コンポーネントの基本部分は index.css、装飾的な指定は Tailwind クラスで</li>
              <li>
                <a
                  href='https://www.radix-ui.com/docs/primitives/components/tabs'
                  className='underline'
                >
                  Tabs – Radix UI
                </a>
              </li>
            </ul>
          </Tabs.Content>
          <Tabs.Content className='TabsContent rounded-b-lg bg-white p-6' value='tab2'>
            <p>タブ２のコンテンツ</p>
          </Tabs.Content>
          <Tabs.Content className='TabsContent rounded-b-lg bg-white p-6' value='tab3'>
            <p>タブ３のコンテンツ</p>
          </Tabs.Content>
        </Tabs.Root>
      </section>

      <section>
        <h2 className='text-2xl font-bold'>Popover</h2>
        <h3 className='font-bold'>ステートと分岐処理で実装</h3>
        <Popover.Root open={open} onOpenChange={setOpen}>
          <Popover.Trigger
            className={`${open ? 'bg-primary-200' : 'bg-primary-100'} rounded px-2 py-1 shadow`}
          >
            More info
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content className='max-w-sm rounded-xl bg-gray-100 px-2 py-4'>
              Some more info… Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut 500 labore et dolore magna aliqua. Ut enim ad minim
              veniam
              <Popover.Arrow className='fill-gray-100' />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>

        <h3 className='mt-4 font-bold'>クラスで実装</h3>
        <Popover.Root>
          <Popover.Trigger className='rounded bg-primary-100 px-2 py-1 shadow data-[state=open]:bg-primary-200'>
            More info
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content className='max-w-sm rounded-xl bg-gray-100 px-2 py-4'>
              Some more info… Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut 500 labore et dolore magna aliqua. Ut enim ad minim
              veniam
              <Popover.Arrow className='fill-gray-100' />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </section>

      <section>
        <h2 className='text-2xl font-bold'>Slider</h2>
        <form className='flex gap-2'>
          <Slider.Root
            value={slideValues}
            onValueChange={setSlideValues}
            onValueCommit={handleSlideValueFull}
            max={100}
            step={10}
            aria-label='Progress'
            className='relative flex w-[200px] touch-none select-none items-center data-[orientation=horizontal]:h-[20px] data-[orientation=vertical]:h-[100px] data-[orientation=vertical]:w-[20px]'
          >
            <Slider.Track className='relative flex-grow rounded-full bg-gray-300  data-[orientation=horizontal]:h-[3px] data-[orientation=vertical]:w-[3px]'>
              <Slider.Range className='absolute h-full rounded-full bg-primary-400' />
            </Slider.Track>
            <Slider.Thumb className='block h-[20px] w-[20px] rounded-[10px] bg-primary-600 shadow-sm hover:bg-primary-500 focus:shadow-lg focus:outline-0' />
          </Slider.Root>
          <b>
            <span className='text-2xl'>{slideValues}</span>%
          </b>
        </form>
        <ul>
          <li>方向キーで増減できる</li>
        </ul>
      </section>

      <section>
        <h2 className='text-2xl font-bold'>Dialog</h2>
        <Dialog />
      </section>

      <section>
        <h2 className='text-2xl font-bold'>Radio Group</h2>
        <RadioGroupDemo />
      </section>
    </div>
  )
}

export default App
