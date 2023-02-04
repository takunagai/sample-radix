import * as Dialog from '@radix-ui/react-dialog'

const DialogDemo = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className='rounded bg-primary-100 px-2 py-1 shadow data-[state=open]:bg-primary-200'>
        Open Dialog
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className='DialogOverlay bg-black/50' />
      <Dialog.Content className='DialogContent max-h-[85vh] w-11/12 max-w-xl rounded-xl bg-white p-6'>
        <Dialog.Title className='DialogTitle text-xl font-bold'>Edit profile</Dialog.Title>
        <Dialog.Description className='DialogDescription mt-2 mb-4'>
          Make changes to your profile here. Click save when youre done.
        </Dialog.Description>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut 500 labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum. nisi ut aliquip ex ea codo consequat. Duis autei.
        </p>
        <div className='mt-6 flex justify-end'>
          <Dialog.Close asChild>
            <button className='rounded bg-primary-100 px-2 py-1 shadow data-[state=open]:bg-primary-200'>
              Save Changes
            </button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button
            className='IconButton right-[10px] top-[10px] inline-flex h-[25px] w-[25px] items-center justify-center rounded-full hover:bg-gray-100 focus:shadow'
            aria-label='Close'
          >
            ×
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)

export default DialogDemo
