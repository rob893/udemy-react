function Backdrop({ onClick }: { onClick?: () => void }) {
  return <div className="backdrop" onClick={onClick} />;
}

export default Backdrop;
