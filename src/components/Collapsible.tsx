import { useState } from 'react'
import * as Collapsible from '@radix-ui/react-collapsible'

const CollapsibleDemo = () => {
  const [open, setOpen] = useState(false)
  return (
    <Collapsible.Root className='CollapsibleRoot' open={open} onOpenChange={setOpen}>
      <div className='flex items-center justify-between'>
        <span className='Text inline-block'>学習履歴</span>
        <Collapsible.Trigger asChild>
          <button className='CollapseTriggerButton'>
            <span>◎</span>
            <span>{open ? '閉じる' : '開く'}</span>
          </button>
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content className='CollapsibleContent text-sm'>
        <p className='CollapsibleItem'>
          <small>
            <b>2023-02-05</b> / <b>25分</b>
          </small>
          <br />
          ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝たしはでまた箱のダミーコピーです。
        </p>
        <p className='CollapsibleItem'>
          <small>
            <b>2023-02-03</b> / <b>40分</b>
          </small>
          <br />
          おっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝たしはでまた箱のダミーコピーです。
        </p>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}

export default CollapsibleDemo
