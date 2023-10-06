import Link from 'next/link';
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'



const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
    { id: 1, name: "Jordan", doc_count: 11 },
    { id: 2, name: "Sneakers", doc_count: 8 },
    { id: 3, name: "Running shoes", doc_count: 64 },
    { id: 4, name: "Football shoes", doc_count: 107 },
];



const MenuMobile = ({ showCatMenu, setShowCatMenu, setMobileMenu }) => {

    return (
        <ul className='flex flex-col md:hidden font-bold px-5 py-5 absolute top-[50px] left-0 w-full h-[calc(100vh - 50px)] bg-white border-t
        text-black'>
            {data.map((item) => {
                return (
                    <React.Fragment key={item.id}>
                        {!!item?.subMenu ? (

                            <li className='border-b flex flex-col relative'
                                onClick={() => {
                                    setShowCatMenu(!showCatMenu)
                                }}>

                                <div className='flex justify-between py-4 px-5 items-center'>
                                    {item.name}
                                    <BsChevronDown size={12} />
                                </div>

                                {showCatMenu &&
                                    <ul className='bg-black/[0.05] px-5 -mx-5'>
                                        {subMenuData.map((submenu) => {
                                            return (
                                                <Link key={submenu.id} href="/" onClick={() => {
                                                    setShowCatMenu(false)
                                                    setMobileMenu(false)
                                                }}>
                                                    <li className="py-4 px-8 border-t flex justify-between">
                                                        {submenu.name}
                                                        <span className='opacity-50 text-sm'>{78}</span>
                                                    </li>
                                                </Link>
                                            )
                                        })}
                                    </ul>
                                }
                            </li>

                        ) : (

                            <li className='py-4 px-5 border-b'>
                                <Link href={item?.url} onClick={() => setMobileMenu(false)}>{item.name}</Link>
                            </li>

                        )}
                    </React.Fragment>
                )
            })}
        </ul>
    )
}

export default MenuMobile