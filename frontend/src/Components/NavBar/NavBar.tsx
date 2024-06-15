"use client"
/* eslint-disable @next/next/no-img-element */
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Transition,
} from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ButtosProfileMenu } from '@/Components';
import { menuClient, menuProfile } from "@/ts";


function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export const NavBar = () => {
    const current = usePathname();

    const session = false

    const menu = [
        ...(session ? menuClient.filter(item => item.id !== "login") : menuClient),
    ]

    return (
        <Disclosure as="nav" className="bg-gray-800 min-w-64" >
            {({ open, close }) => (
                <>
                    <article className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <nav className="relative flex h-12 items-center justify-between">
                            {/* Button menu sm */}

                            <section className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>

                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}

                                </DisclosureButton>
                            </section>

                            {/* Navbar */}
                            <section className="flex flex-1 items-center w-full justify-center">
                                <div className="flex flex-shrink-0 items-center">

                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4 justify-center">
                                        {menu.map((item) => (
                                            <Link
                                                key={item.title}
                                                href={item.href}
                                                className={classNames(
                                                    current === item.href ? 'bg-gray-900 text-white rounded-xl' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={current === item.href ? 'page' : undefined}
                                            >
                                                {item.title}
                                            </Link>
                                        ))
                                        }
                                    </div>
                                </div>
                            </section>

                            {
                                session &&
                                <section className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-10">
                                    {/* Notifications */}
                                    <button
                                        type="button"
                                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    >
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">View notifications</span>
                                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>

                                    {/* Navbar Perfil */}
                                    <Menu as="div" className="relative ml-3">
                                        <div>
                                            <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                <span className="absolute -inset-1.5" />
                                                <span className="sr-only">Open user menu</span>

                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt="Image User Profile"
                                                    width={30}
                                                    height={30}
                                                />
                                            </MenuButton>
                                        </div>
                                        <Transition
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >

                                            <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <MenuItem >
                                                    <>
                                                        {menuProfile.map((item) => (
                                                            <ButtosProfileMenu
                                                                key={item.id}
                                                                id={item.id}
                                                                href={item.href}
                                                                title={item.title}
                                                                classNameStyle={'bg-gray-100 block px-4 py-2 text-sm text-gray-700'}
                                                            />
                                                        ))}

                                                        <ButtonAuth
                                                            classStyle={classNames(
                                                                'block px-4 py-2 text-sm text-gray-700'
                                                            )} />
                                                    </>
                                                </MenuItem>

                                            </MenuItems>
                                        </Transition>
                                    </Menu>
                                </section>
                            }
                        </nav>
                    </article>

                    {/* Navbar mobile */}
                    <DisclosurePanel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {menu.map((item) => (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    className={classNames(
                                        current === item.href ? 'bg-gray-900 text-white rounded-xl' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={current === item.href ? 'page' : undefined}
                                    onClick={() => close()}

                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    )
}
