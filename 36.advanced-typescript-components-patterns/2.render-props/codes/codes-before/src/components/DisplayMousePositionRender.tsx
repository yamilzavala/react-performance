import "./style.css";

export type DisplayMousePositionProps = {
  x: number;
  y: number;
};

export const DisplayMousePositionRender = ({
  x,
  y,
}: DisplayMousePositionProps) => {
  return (   
      <section className="absolute-section">
        <p>
          <span className="bold-span">X</span>: {x}
        </p>
        <p>
          <span className="bold-span">Y</span>: {y}
        </p>
      </section>    
  );
};