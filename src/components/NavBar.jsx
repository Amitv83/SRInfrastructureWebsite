import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom' // Import Link and useLocation
import Logo from '../assets/logo.png'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/About' },
  { name: 'Contact Us', href: '/Contact' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  const location = useLocation() // Get the current route path

  return (
    <Disclosure as="nav" className="flex-no-wrap fixed top-0 z-10 flex w-full items-center justify-between bg-[#ffedcf] shadow-2xl shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-between py-1">
      <div className="logo h-14 pb-20">
        <img src={Logo} alt="Logo" className="w-72 my-2 px-3" />
      </div>
      <div className="sm:flex sm:justify-end ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"> 
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex justify-end items-center sm:hidden">
              <Disclosure.Button className="group relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="block h-6 w-6 group-data-[open]:hidden" aria-hidden="true" />
                <XMarkIcon className="hidden h-6 w-6 group-data-[open]:block" aria-hidden="true" />
              </Disclosure.Button>
            </div>
            <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-end">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex lg:space-x-7 sm:space-x-4">
                  {navigation.map((item) => {
                    const isCurrent = location.pathname === item.href; // Check if the current path matches the item href

                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        aria-current={isCurrent ? 'page' : undefined}
                        className={classNames(
                          isCurrent ? 'bg-[#faa543] text-[#daffda] hover:bg-[#f57c20]' : 'text-black hover:bg-[#f57c20] hover:text-[#daffda]',
                          'rounded-md px-3 py-2 text-sm font-medium',
                        )}
                      >
                        {item.name}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Disclosure.Panel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => {
            const isCurrent = location.pathname === item.href; // Check if the current path matches the item href

            return (
              <Disclosure.Button
                key={item.name}
                as={Link}
                to={item.href}
                aria-current={isCurrent ? 'page' : undefined}
                className={classNames(
                  isCurrent ? 'bg-[#faa543] text-[#daffda] hover:bg-[#f57c20]' : 'text-black hover:bg-[#f57c20] hover:text-[#daffda]',
                  'block rounded-md px-3 py-2 text-base font-medium',
                )}
              >
                {item.name}
              </Disclosure.Button>
            )
          })}
        </div>
      </Disclosure.Panel>
    </Disclosure>
  )
}
