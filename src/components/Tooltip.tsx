import { useState } from "react";

type TooltipProps = {
  text: string;
  children: React.ReactNode;
  className: string;
};

const Tooltip = ({ text, children, className }: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
     
        <div className={`${visible ? 'opacity-100' : 'opacity-0'} transition duration-300 ease-in-out absolute left-1/2 top-2/3 z-10 -translate-x-1/2 -translate-y-1/2 transform rounded bg-primary px-2 py-1 text-sm text-secondary`}>
          {text}
        </div>
      
    </div>
  );
};

export default Tooltip;
