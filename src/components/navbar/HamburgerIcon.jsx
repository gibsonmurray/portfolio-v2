import './HamburgerIcon.css';

const HamburgerIcon = ({ isOpen, setIsOpen }) => {
  const handleClick = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <button 
      onClick={handleClick}
      className={`hamburger hamburger--squeeze ${isOpen ? "is-active" : ""}`}
      type="button"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
}

export default HamburgerIcon;
