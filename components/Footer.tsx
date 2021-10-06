const Footer = () => {
  return (
    <footer className="w-full text-center bg-gray-800 text-gray-400 p-4">
      <div className="container mx-auto">
        <div>
          Powered by{' '}
          <a className="hover:text-white" href="https://nextjs.org/">
            Next.js
          </a>
          ,{' '}
          <a className="hover:text-white" href="https://tailwindcss.com/">
            Tailwind CSS
          </a>{' '}
          and{' '}
          <a
            className="hover:text-white"
            href="https://www.typescriptlang.org/"
          >
            TypeScript.
          </a>
        </div>
        <div>Hsins © Since 2021</div>
      </div>
    </footer>
  );
};

export default Footer;
