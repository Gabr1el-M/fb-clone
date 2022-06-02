import { FaFacebook, FaSearch, FaAlignJustify } from 'react-icons/fa';

export default function Header() {
   return (
      <div className='header'>
         <div className='header-Left'>
            <div className='logo-fb'>
               <FaFacebook />
            </div>
            <div className='search-fb'>
               <FaSearch />
            </div>
            <div className='menu-fb'>
               <FaAlignJustify />
            </div>
         </div>
         <div className='header-Rigth'>
            <div className='plus-btn'>
               +
            </div>
         </div>
      </div>
   );
}