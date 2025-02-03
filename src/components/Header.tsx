import { Center } from "./Center";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useUser } from '@/context/UserContext';

export const Header = () => {
    const router = useRouter();
    const [ isOpenMenu, setIsOpenMenu ] = useState(false);
    const { userData } = useUser();

    async function logout() {
        await router.push('/');
        await signOut();
    }

  return (
    <aside className="bg-black h-20">
      <Center>
        <div className="flex flex-row items-center h-20">
          <Link href={'/'} className="text-white ml-2 lg:ml-0">Hola, {userData?.name}</Link>
          <nav className="ml-auto relative">

          <button onClick={() => setIsOpenMenu(!isOpenMenu)} type="button">
            {userData?.avatar === "default.png" ? (
              <img src={'default.png'} alt="User default" className="size-10 rounded-full mr-5 lg:mr-0"/>
            ) : (
              <img src={`/avatars/${userData?.avatar}`} alt="User default" className="size-10 rounded-full mr-2 lg:mr-0" />
            )}
          </button>

          { isOpenMenu && (
            <div className="submenu absolute bg-gray-500 z-10 mt-3 w-28 md:w-32 rounded-lg shadow-lg">
              <ul className="py-2 text-sm text-white">
                <li className="px-2 md:px-4 py-2 hover:bg-gray-600"><Link href={'/settings'} onClick={() => setIsOpenMenu(!isOpenMenu)}>Ajustes</Link></li>
                <li className="px-2 md:px-4 py-2 hover:bg-gray-600"><button onClick={logout}>Cerrar sesión</button></li>
              </ul>
            </div>
          )}
          </nav>
        </div>
      </Center>
    </aside>
  )
}
