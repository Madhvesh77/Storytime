import Image from 'next/image';

export function NavBar() {
  return (
    <nav className="bg-black p-4">
      {/* Display a single version of the logo */}
      <Image
        src="/logo_dark.jpg" 
        alt="Logo"
        width={150}
        height={40}
      />
    </nav>
  );
}