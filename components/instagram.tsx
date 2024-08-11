import Link from "next/link";

interface Props {
  color: string;
  className: string;
}

function Instagram({ color, className }: Props) {
  return (
    <Link href="https://www.instagram.com/waxio.jwlr?igsh=MXVubGV1bWZmdjVkOA==" target="_blank" rel="noopener noreferrer">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 82.32 82.32"
        className={className}
      >
        <path 
          className="cls-1" 
          d="M57.12,82.32h-31.92c-13.9,0-25.2-11.31-25.2-25.2v-31.92C0,11.31,11.31,0,25.2,0h31.92c13.9,0,25.2,11.31,25.2,25.2v31.92c0,13.9-11.31,25.2-25.2,25.2ZM25.2,6.16C14.71,6.16,6.16,14.71,6.16,25.2v31.92c0,10.5,8.54,19.04,19.04,19.04h31.92c10.5,0,19.04-8.54,19.04-19.04v-31.92c0-10.5-8.54-19.04-19.04-19.04h-31.92Z" 
          fill={color}
        />
        <path 
          className="cls-1" 
          d="M41.16,61.99c-11.48,0-20.82-9.34-20.82-20.82s9.34-20.82,20.82-20.82,20.82,9.34,20.82,20.82-9.34,20.82-20.82,20.82ZM41.16,26.65c-8,0-14.51,6.51-14.51,14.51s6.51,14.51,14.51,14.51,14.51-6.51,14.51-14.51-6.51-14.51-14.51-14.51Z" 
          fill={color}
        />
        <path 
          className="cls-1" 
          d="M69.67,18.07c0,2.99-2.43,5.42-5.42,5.42s-5.42-2.43-5.42-5.42,2.43-5.42,5.42-5.42,5.42,2.43,5.42,5.42Z" 
          fill={color}
        />
      </svg>
    </Link>
  );
}

export default Instagram;