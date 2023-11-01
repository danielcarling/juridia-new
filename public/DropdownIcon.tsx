interface Props {
  width?: string;
  height?: string;
}

export function DropdownIconSvg({ width="38px", height="auto" }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 38 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="vuesax/linear/arrow-down">
        <g id="arrow-down">
          <path
            id="Vector"
            d="M31.54 16.7812L21.2166 29.0063C19.9975 30.45 18.0025 30.45 16.7833 29.0063L6.45996 16.7812"
            stroke="currentColor"
            stroke-width="3"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
    </svg>
  );
}
