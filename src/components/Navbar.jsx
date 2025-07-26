import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between">
      <h1 className="text-xl font-bold">21 Stack'em</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/rules">Rules</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/store">Store</Link>
        <Link to="/roadmap">Roadmap</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}