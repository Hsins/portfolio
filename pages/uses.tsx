import Image from 'next/image';
import { CubeIcon } from '@heroicons/react/outline';
import { GrPersonalComputer } from 'react-icons/gr';
import { FiMonitor, FiTerminal } from 'react-icons/fi';
import { GiGuitarHead } from 'react-icons/gi';
import { IoMdMicrophone } from 'react-icons/io';
import { ImMobile } from 'react-icons/im';
import Layout from '../components/Layout';

const Uses = () => {
  return (
    <Layout>
      <div className="lg:pl-2 my-12">
        <div className="text-3xl font-bold flex items-center">
          <CubeIcon className="mr-4 w-8 h-8" />
          <div>Uses</div>
        </div>
        <div className="leading-relaxed mt-4">
          Here's the devices I'm currently using for coding, videos, and music.
          Most of these have been accumulated over the past few years, with a
          recent office upgrade in 2021.
        </div>
      </div>

      <div className="lg:pl-2 my-12">
        <div className="text-2xl font-bold flex items-center">
          <GrPersonalComputer className="mr-4 w-6 h-6" />
          <div>Computers</div>
        </div>
        <div className="leading-relaxed mt-4">
          <div className="flex flex-wrap -m-4">
            <div className="w-1/2 p-4">
              <div className="bg-white p-6 rounded-lg">
                <Image
                  className="rounded w-full object-cover object-center mb-6"
                  src="/macbook.jpg"
                  alt=""
                  width="400"
                  height="250"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Apple
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Macbook Pro 13" 2018
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div className="w-1/2 p-4">
              <div className="bg-white p-6 rounded-lg">
                <Image
                  className="rounded w-full object-cover object-center mb-6"
                  src="/thinkpad-x280.jpg"
                  alt=""
                  width="400"
                  height="250"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Lenovo
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  ThinkPad x280
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:pl-2 my-12">
        <div className="text-2xl font-bold flex items-center">
          <FiMonitor className="mr-4 w-6 h-6" />
          <div>Monitors</div>
        </div>
        <div className="leading-relaxed mt-4">
          <div className="flex flex-wrap -m-4">
            <div className="w-1/2 p-4">
              <div className="bg-white p-6 rounded-lg">
                <Image
                  className="rounded w-full object-cover object-center mb-6"
                  src="/43PUT6002.jpg"
                  alt=""
                  width="400"
                  height="250"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Philips
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  43PUH6082/96
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:pl-2 my-12">
        <div className="text-2xl font-bold flex items-center">
          <ImMobile className="mr-4 w-6 h-6" />
          <div>Mobile Devices</div>
        </div>
        <div className="leading-relaxed mt-4">
          Here's what tech I'm currently using for coding, videos, and music.
          Most of these have been accumulated over the past few years, with a
          recent office upgrade in 2020.
        </div>
      </div>

      <div className="lg:pl-2 my-12">
        <div className="text-2xl font-bold flex items-center">
          <GiGuitarHead className="mr-4 w-6 h-6" />
          <div>Guitars</div>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="w-1/2 p-4">
            <div className="bg-white p-6 rounded-lg">
              <Image
                className="rounded w-full object-cover object-center mb-6"
                src="/BSG-J31CF.jpg"
                alt=""
                width="400"
                height="250"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                BSG
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                J31CF
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div className="w-1/2 p-4">
            <div className="bg-white p-6 rounded-lg">
              <Image
                className="rounded w-full object-cover object-center mb-6"
                src="/Ayers-Deluxe.jpg"
                alt=""
                width="400"
                height="250"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                Ayers
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                PASSION SJCX Deluxe
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:pl-2 my-12">
        <div className="text-2xl font-bold flex items-center">
          <IoMdMicrophone className="mr-4 w-6 h-6" />
          <div>Microphones</div>
        </div>
        <div className="leading-relaxed mt-4">
        <div className="flex flex-wrap -m-4">
            <div className="w-1/2 p-4">
              <div className="bg-white p-6 rounded-lg">
                <Image
                  className="rounded w-full object-cover object-center mb-6"
                  src="/fox-usb.jpg"
                  alt=""
                  width="400"
                  height="250"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                Beyerdynamic
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  FOX USB
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div className="w-1/2 p-4">
              <div className="bg-white p-6 rounded-lg">
                <Image
                  className="rounded w-full object-cover object-center mb-6"
                  src="/ATR2100x.png"
                  alt=""
                  width="400"
                  height="250"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                Audio-Technica
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  ATR 2100X
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="lg:pl-2 my-12">
        <div className="text-2xl font-bold flex items-center">
          <FiTerminal className="mr-4 w-6 h-6" />
          <div>Developing Tools</div>
        </div>
        <div className="leading-relaxed mt-4"></div>
      </div>
    </Layout>
  );
};

export default Uses;
