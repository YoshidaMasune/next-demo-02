import React from 'react';

interface link {
  children: any;
  to: string;
}

const Link = ({ children, to }: link) => {
  return (
    <li>
      <a href={to}>{children}</a>
    </li>
  );
};

function Navbar() {
  return (
    <nav className="shadow-md">
      <div className="container mx-auto flex items-center p-4 justify-between ">
        <div className="flex items-center ">
          <section>
            <img className="w-16" src="/logo/logo.png" alt="" />
          </section>
          {/* navigation list */}
          <section>
            <ul className="flex gap-5 ml-4">
              <Link to="/">หน้าเเรก</Link>
              <Link to="/blog">บทความ</Link>
            </ul>
          </section>
        </div>

        {/* search buttom */}

        <div>
          <form>
            <input
              type="text"
              placeholder="ค้นหา"
              className="border rounded-full focus:outline-none px-3 py-2"
            />
            <span>
              <button type="submit"></button>
            </span>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
