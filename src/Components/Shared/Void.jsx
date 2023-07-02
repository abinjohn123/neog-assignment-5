import voidSvg from '../../assets/illustrations/void.svg';

const VoidSVG = ({ content }) => {
  return (
    <div className="void-svg">
      <div className="img-container">
        <img src={voidSvg} alt="no-data-found" />
      </div>
      <p>{content}</p>
    </div>
  );
};

export default VoidSVG;
