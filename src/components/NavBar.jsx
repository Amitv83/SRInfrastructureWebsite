import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../assets/logo.png';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About Us', href: '/About', current: true },
  { name: 'Contact Us', href: '/Contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  return (
    
    <Disclosure as="nav" className="flex-no-wrap fixed top-0 z-10 flex w-full items-center justify-between bg-[#ffedcf] shadow-2xl shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-between py-1">
      <div class="logo h-14 pb-20">
          <img src={Logo} alt="ram" class="w-72 my-2 px-3" />
        </div>
        <div className="sm:flex sm:justify-end ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"> 
        <div className="relative flex h-16 items-center justify-between">
          <div className=" flex justify-end items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-end">
        
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex lg:space-x-7 sm:space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-[#faa543] text-[#daffda] hover:bg-[#f57c20]' : 'text-black hover:bg-[#f57c20] hover:text-[#daffda]',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
           

          </div>
        </div>
      </div>
      </div>
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-[#faa543] text-[#daffda] hover:bg-[#f57c20]' : 'text-black hover:bg-[#f57c20] hover:text-[#daffda]',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
