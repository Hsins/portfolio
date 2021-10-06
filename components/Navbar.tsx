import Link from 'next/link';
import {
  MenuIcon,
  BeakerIcon,
  ChipIcon,
  AdjustmentsIcon,
  CameraIcon,
  CubeIcon,
  FingerPrintIcon,
  AcademicCapIcon,
  DotsVerticalIcon,
} from '@heroicons/react/outline';

const Navbar = () => {
  return (
    <nav className="mt-4 flex flex-row justify-between">
      <Link href="/">
        <a className="flex lg:p-2 py-2 rounded items-center lg:hover:bg-gray-100 lg:hover:dark:bg-gray-800">
          <ChipIcon className="mr-2 w-5 h-5" />
          <span>Home</span>
        </a>
      </Link>

      {/* Navigation on desktop devices */}
      <div className="hidden md:flex">
        <Link href="/project">
          <a className="text-blue-700 dark:text-yellow-400 p-2 mr-2 rounded hover:bg-blue-50 hover:dark:bg-gray-800">
            <AcademicCapIcon className="mx-1 w-5 h-5" />
          </a>
        </Link>

        <Link href="/project">
          <a className="text-blue-700 dark:text-yellow-400 p-2 mr-2 rounded hover:bg-blue-50 hover:dark:bg-gray-800">
            <BeakerIcon className="mx-1 w-5 h-5" />
          </a>
        </Link>

        <Link href="/uses">
          <a className="text-blue-700 dark:text-yellow-400 p-2 mr-2 rounded hover:bg-blue-50 hover:dark:bg-gray-800">
            <CubeIcon className="mx-1 w-5 h-5" />
          </a>
        </Link>

        <Link href="/uses">
          <a className="text-red-700 dark:text-blue-400 p-2 mr-2 rounded hover:bg-red-50 hover:dark:bg-gray-800">
            <CameraIcon className="mx-1 w-5 h-5" />
          </a>
        </Link>
      </div>

      {/* Navigation on mobile devices (dropdown menu) */}
      {/* <button
        className="md:hidden p-2"
        // ref={buttonRef}
        onClick={() => {
          setShowMenu(true);
        }}
      >
        <MenuIcon className="w-5 h-5" />
      </button> */}
    </nav>
  );
};

export default Navbar;
