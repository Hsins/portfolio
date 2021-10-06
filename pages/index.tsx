import Image from 'next/image';
import {
  FingerPrintIcon,
  UserCircleIcon,
  PuzzleIcon,
} from '@heroicons/react/outline';
import {
  FaGithub,
  FaTwitter,
  FaTelegram,
  FaLine,
  FaSoundcloud,
} from 'react-icons/fa';
import Layout from '@components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="lg:px-12 my-12 flex flex-wrap items-center">
        <div className="flex-initial mx-auto px-6 my-12">
          <div className="shadow-lg rounded-full">
            <Image
              className="rounded-full"
              src="/avatar.jpg"
              alt="avatar"
              width="256"
              height="256"
            />
          </div>
        </div>
        <div className="flex-1 mx-4">
          <div className="text-3xl font-bold flex items-center">
            <div>Peng, Hsin-Hsiang</div>
          </div>
          <div className="leading-relaxed mt-4">
            Hello! My name is{' '}
            <ruby lang="zh-Hant">
              彭<rt>péng</rt>新<rt>xīn</rt>翔<rt>xiáng</rt>
            </ruby>
            , a software engineer from{' '}
            <ruby lang="zh-Hant">
              臺<rt>tái</rt>灣<rt>wān</rt>
            </ruby>{' '}
            (Taiwan) who has a passion for learning new stuffs and sharing
            knowledge with others. Experienced in <em>DevOps</em>,{' '}
            <em>Cloud Computing</em>, <em>Web Development</em> and{' '}
            <em>Data Engineering</em>. When I'm not in front of a screen, I'm
            probably playing the guitar, reading books, swimming, or clicking
            photos.
          </div>
          <div className="leading-relaxed mt-4">
            You can just call me by my English name, Sean. Feel free to get in
            touch with me at{' '}
            <a
              className="font-mono text-red-700 hover:text-red-500 underline"
              href="mailto:hsinspeng@gmail.com"
            >
              hsinspeng@gmail.com
            </a>
            .
          </div>
          <div className="leading-relaxed mt-4 flex space-x-3">
            <a
              href="https://github.com/Hsins"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center pb-1 border-b-2 border-black hover:text-gray-600 dark:border-white dark:hover:text-gray-400"
            >
              <FaGithub className="mr-1 w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href="https://twitter.com/hsins_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center pb-1 border-b-2 border-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <FaTwitter className="mr-1 w-4 h-4" />
              <span>Twitter</span>
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center pb-1 border-b-2 border-green-500 hover:text-green-600 dark:hover:text-blue-400"
            >
              <FaLine className="mr-1 w-4 h-4" />
              <span>Line</span>
            </a>

            <a
              href="https://soundcloud.com/hsins"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center pb-1 border-b-2 border-red-500 hover:text-red-600 dark:hover:text-blue-400"
            >
              <FaSoundcloud className="mr-1 w-4 h-4" />
              <span>Soundcloud</span>
            </a>

            <a
              href="https://t.me/Hsins"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center pb-1 border-b-2 border-indigo-500 hover:text-indigo-600 dark:hover:text-blue-400"
            >
              <FaTelegram className="mr-1 w-4 h-4" />
              <span>Telegram</span>
            </a>
          </div>
        </div>
      </div>
      <div className="lg:pl-2 my-12">
        <div className="text-2xl font-bold flex items-center">
          <UserCircleIcon className="mr-4 w-6 h-6" />
          <div>About</div>
        </div>
        <div className="leading-relaxed mt-4">
          I grew up in small-town{' '}
          <ruby lang="zh-Hant">
            竹<rt>zhú</rt>南<rt>nán</rt>
          </ruby>{' '}
          and went to school at{' '}
          <ruby lang="zh-Hant">
            臺<rt>zhú</rt>北<rt>nán</rt>
          </ruby>{' '}
          (Taipei), graduating with a master degree in Industrial & System
          Engineering. Spending my free time playing the guitar, covering songs,
          reading books, and enjoying time with friends.
        </div>
        <div className="leading-relaxed mt-4">
          In a far 2017, I've started my professional career on the position of
          "Backend Software Engineer". At present, I have advanced knowledge of
          5+ programming languages including C/C++, Java, JavaScript, Perl,
          Python, and related fields (Linux, Bash scripting, HTML, CSS, MySQL,
          MongoDB, Docker, Redis, GraphQL, RabbitMQ, Git, Nginx, Apache, etc.).
          Websites creation, OpenSource projects deployments, applications
          development, building, testing and improvement - these are the number
          of skills every day I'm work with and in what I'm improving my
          abilities constantly.
        </div>
      </div>

      <div className="lg:pl-2 my-12">
        <div className="text-2xl font-bold flex items-center">
          <PuzzleIcon className="mr-4 w-6 h-6" />
          <div>Habits</div>
        </div>
        <div className="leading-relaxed mt-4">
          Most developers have varied lives outside of work and and I'm no
          exception.
        </div>
        <div className="leading-relaxed mt-4">
          I spend most of my free time doing photography, playing the guitar,
          traveling, and enjoying time with friends and family. Besides, I'm
          actually a old-school guy who is still playing <dfn>MUDs</dfn>{' '}
          (Multi-User Dungeons) like{' '}
          <q lang="en">
            <ruby lang="zh-Hant">
              四<rt>sì</rt>度<rt>dù</rt>空<rt>kōng</rt>間<rt>jiān</rt>
            </ruby>
          </q>{' '}
          and{' '}
          <q lang="en">
            <ruby lang="zh-Hant">
              三<rt>sān</rt>國<rt>guó</rt>歪<rt>wāi</rt>傳<rt>zuàn</rt>
            </ruby>
          </q>{' '}
          in Taiwan. The MUDs are interactive, text-based online games that
          players need to enter text commands such as{' '}
          <code className="border-solid border-2 border-light-blue-500 px-1">
            kill dragon
          </code>{' '}
          or{' '}
          <code className="border-solid border-2 border-light-blue-500 px-1">
            get sword
          </code>{' '}
          to play.
        </div>
      </div>

      <div className="lg:pl-2 my-12">
        <div className="text-2xl font-bold flex items-center">
          <FingerPrintIcon className="mr-4 w-6 h-6" />
          <div>GPG</div>
        </div>

        <div className="leading-relaxed mt-4">
          I have verified my identity with a GPG signature, proving my ownership
          of this domain. View the cryptography proof here:{' '}
          <a
            className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            href="http://keybase.io/spencerwoo/sigchain#abb6f40f8c804e7411e91544b7cdb8e011df8e6f84dcd0b709f848f85dc6248d0f"
            target="_blank"
            rel="noopener noreferrer"
          >
            Keybase domain ownership
          </a>
          . Pull my GPG public key hosted at{' '}
          <a
            className="text-yellow-600 hover:text-yellow-500 dark:text-yellow-400 dark:hover:text-yellow-300"
            href="http://keybase.io/hsins"
            target="_blank"
            rel="noopener noreferrer"
          >
            Keybase
          </a>{' '}
          with:
          <pre className="font-mono p-2 mt-4 border-2 border-gray-100 rounded overflow-auto">
            $ curl https://keybase.io/hsins/pgp_keys.asc
          </pre>
          <div className="leading-relaxed mt-4">
            Everybody loves a bit of crypto now and then.
          </div>
        </div>
      </div>
    </Layout>
  );
}
