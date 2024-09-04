import { Link } from 'react-router-dom';

const NavFooter = () => {
  // const currentDate = new Date().toLocaleDateString();

  return (
    <footer className="p-6 bg-gray-900 text-green-500 text-sm bottom-0 w-full">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="flex flex-col space-y-2">
      <h4 className="font-semibold text-white">About Us</h4>
      <ul className="space-y-1">
        <li><Link to={'/about-us'} className="hover:text-white">Our Story</Link></li>
        <li><Link to={'/team'} className="hover:text-white">Team</Link></li>
        <li><Link to={'/careers'} className="hover:text-white">Careers</Link></li>
      </ul>
    </div>

    <div className="flex flex-col space-y-2">
      <h4 className="font-semibold text-white">Support</h4>
      <ul className="space-y-1">
        <li><Link to={'/faq'} className="hover:text-white">FAQ</Link></li>
        <li><Link to={'/contact'} className="hover:text-white">Contact Us</Link></li>
        <li><Link to={'/terms'} className="hover:text-white">Terms of Service</Link></li>
      </ul>
    </div>

    <div className="flex flex-col space-y-2">
      <h4 className="font-semibold text-white">Find a Mentor</h4>
      <ul className="space-y-1">
        <li><Link to={'/find-mentor'} className="hover:text-white">Search Mentors</Link></li>
        <li><Link to={'/become-mentor'} className="hover:text-white">Become a Mentor</Link></li>
      </ul>
    </div>
  </div>
  <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-center">

    <p className="text-xs text-blue-500 mt-2 md:mt-0">Powered by JLABS</p>
    <p className="text-xs text-green-500">© {new Date().getFullYear()} ChemCoach. All rights reserved.</p>
    <p className="text-xs text-red-500 mt-2 md:mt-0">Site under construction</p>
  </div>

  
</footer>

  );
};

export default NavFooter;
