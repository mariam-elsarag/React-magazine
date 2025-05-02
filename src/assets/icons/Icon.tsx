import { React } from "react";
interface iconType {
  width?: string;
  height?: string;
  fill?: string;
}

export const ArrowIcon: React.FC<iconType> = ({
  width = "24",
  height = "24",
  fill = "var(--color-black)",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 18C9.71875 18 9.46875 17.9062 9.28125 17.7188C8.875 17.3438 8.875 16.6875 9.28125 16.3125L13.5625 12L9.28125 7.71875C8.875 7.34375 8.875 6.6875 9.28125 6.3125C9.65625 5.90625 10.3125 5.90625 10.6875 6.3125L15.6875 11.3125C16.0938 11.6875 16.0938 12.3438 15.6875 12.7188L10.6875 17.7188C10.5 17.9062 10.25 18 10 18Z"
        fill={fill}
      />
    </svg>
  );
};
export const BurgerIcon: React.FC<iconType> = ({
  width = "20",
  height = "20",
  fill = "var(--color-black)",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.25 3.75C1.25 3.08594 1.79688 2.5 2.5 2.5H17.5C18.1641 2.5 18.75 3.08594 18.75 3.75C18.75 4.45312 18.1641 5 17.5 5H2.5C1.79688 5 1.25 4.45312 1.25 3.75ZM1.25 10C1.25 9.33594 1.79688 8.75 2.5 8.75H17.5C18.1641 8.75 18.75 9.33594 18.75 10C18.75 10.7031 18.1641 11.25 17.5 11.25H2.5C1.79688 11.25 1.25 10.7031 1.25 10ZM17.5 17.5H2.5C1.79688 17.5 1.25 16.9531 1.25 16.25C1.25 15.5859 1.79688 15 2.5 15H17.5C18.1641 15 18.75 15.5859 18.75 16.25C18.75 16.9531 18.1641 17.5 17.5 17.5Z"
        fill={fill}
      />
    </svg>
  );
};
export const SaveIcon: React.FC<iconType> = ({
  width = "16",
  height = "17",
  fill = "var(--color-black)",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.625 0H4.375C3.32031 0 2.5 0.859375 2.5 1.875V18.75C2.5 19.7266 3.51562 20.3125 4.375 19.8438L10 16.5625L15.5859 19.8438C16.4453 20.3125 17.5 19.7266 17.5 18.75V1.875C17.5 0.859375 16.6406 0 15.625 0ZM15.625 17.6562L10 14.375L4.375 17.6562V2.10938C4.375 1.99219 4.45312 1.875 4.57031 1.875H15.3516C15.5078 1.875 15.625 1.99219 15.625 2.10938V17.6562Z"
        fill={fill}
      />
    </svg>
  );
};
export const CloseIcon: React.FC<iconType> = ({
  width = "14",
  height = "14",
  fill = "var(--color-black)",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.8594 11.1406C13.3672 11.6094 13.3672 12.4297 12.8594 12.8984C12.625 13.1328 12.3125 13.25 12 13.25C11.6484 13.25 11.3359 13.1328 11.1016 12.8984L7 8.79688L2.85938 12.8984C2.625 13.1328 2.3125 13.25 2 13.25C1.64844 13.25 1.33594 13.1328 1.10156 12.8984C0.59375 12.4297 0.59375 11.6094 1.10156 11.1406L5.20312 7L1.10156 2.89844C0.59375 2.42969 0.59375 1.60938 1.10156 1.14062C1.57031 0.632812 2.39062 0.632812 2.85938 1.14062L7 5.24219L11.1016 1.14062C11.5703 0.632812 12.3906 0.632812 12.8594 1.14062C13.3672 1.60938 13.3672 2.42969 12.8594 2.89844L8.75781 7.03906L12.8594 11.1406Z"
        fill={fill}
      />
    </svg>
  );
};
export const LogoutIcon: React.FC<iconType> = ({
  width = "20",
  height = "21",
  fill = "var(--color-black)",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.41602 6.80001C7.67435 3.80001 9.21602 2.57501 12.591 2.57501H12.6993C16.4243 2.57501 17.916 4.06668 17.916 7.79168V13.225C17.916 16.95 16.4243 18.4417 12.6993 18.4417H12.591C9.24102 18.4417 7.69935 17.2333 7.42435 14.2833"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5009 10.5H3.01758"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.87565 7.70834L2.08398 10.5L4.87565 13.2917"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const UserIcon: React.FC<iconType> = ({
  width = "20",
  height = "20",
  fill = "var(--color-black)",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.875 11.875H8.125C4.29688 11.875 1.25 14.9609 1.25 18.75C1.25 19.4531 1.79688 20 2.5 20H17.5C18.1641 20 18.75 19.4531 18.75 18.75C18.75 14.9609 15.6641 11.875 11.875 11.875ZM3.125 18.125C3.4375 15.6641 5.54688 13.75 8.125 13.75H11.875C14.4141 13.75 16.5234 15.6641 16.8359 18.125H3.125ZM10 10C12.7344 10 15 7.77344 15 5C15 2.26562 12.7344 0 10 0C7.22656 0 5 2.26562 5 5C5 7.77344 7.22656 10 10 10ZM10 1.875C11.7188 1.875 13.125 3.28125 13.125 5C13.125 6.75781 11.7188 8.125 10 8.125C8.24219 8.125 6.875 6.75781 6.875 5C6.875 3.28125 8.24219 1.875 10 1.875Z"
        fill={fill}
      />
    </svg>
  );
};
export const EyeOn: React.FC<iconType> = ({
  width = "20",
  height = "20",
  fill = "var(--color-black)",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5799 12C15.5799 13.98 13.9799 15.58 11.9999 15.58C10.0199 15.58 8.41992 13.98 8.41992 12C8.41992 10.02 10.0199 8.41998 11.9999 8.41998C13.9799 8.41998 15.5799 10.02 15.5799 12Z"
        stroke={fill}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.0001 20.27C15.5301 20.27 18.8201 18.19 21.1101 14.59C22.0101 13.18 22.0101 10.81 21.1101 9.39997C18.8201 5.79997 15.5301 3.71997 12.0001 3.71997C8.47009 3.71997 5.18009 5.79997 2.89009 9.39997C1.99009 10.81 1.99009 13.18 2.89009 14.59C5.18009 18.19 8.47009 20.27 12.0001 20.27Z"
        stroke={fill}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const EyeOff: React.FC<iconType> = ({
  width = "20",
  height = "20",
  fill = "var(--color-black)",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5299 9.46998L9.46992 14.53C8.81992 13.88 8.41992 12.99 8.41992 12C8.41992 10.02 10.0199 8.41998 11.9999 8.41998C12.9899 8.41998 13.8799 8.81998 14.5299 9.46998Z"
        stroke={fill}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.8201 5.76998C16.0701 4.44998 14.0701 3.72998 12.0001 3.72998C8.47009 3.72998 5.18009 5.80998 2.89009 9.40998C1.99009 10.82 1.99009 13.19 2.89009 14.6C3.68009 15.84 4.60009 16.91 5.60009 17.77"
        stroke={fill}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.41992 19.53C9.55992 20.01 10.7699 20.27 11.9999 20.27C15.5299 20.27 18.8199 18.19 21.1099 14.59C22.0099 13.18 22.0099 10.81 21.1099 9.39999C20.7799 8.87999 20.4199 8.38999 20.0499 7.92999"
        stroke={fill}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.5099 12.7C15.2499 14.11 14.0999 15.26 12.6899 15.52"
        stroke={fill}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.47 14.53L2 22"
        stroke={fill}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22 2L14.53 9.47"
        stroke={fill}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const GoogleIcon = ({
  width = "20",
  height = "20",
  fill = "#3E3232BF",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.064 7.51C3.89638 5.85353 5.17282 4.46106 6.7508 3.48806C8.32878 2.51507 10.1462 1.99987 12 2C14.695 2 16.959 2.991 18.69 4.605L15.823 7.473C14.786 6.482 13.468 5.977 12 5.977C9.395 5.977 7.19 7.737 6.405 10.1C6.205 10.7 6.091 11.34 6.091 12C6.091 12.66 6.205 13.3 6.405 13.9C7.191 16.264 9.395 18.023 12 18.023C13.345 18.023 14.49 17.668 15.386 17.068C15.9054 16.726 16.3501 16.2822 16.6932 15.7635C17.0363 15.2448 17.2706 14.6619 17.382 14.05H12V10.182H21.418C21.536 10.836 21.6 11.518 21.6 12.227C21.6 15.273 20.51 17.837 18.618 19.577C16.964 21.105 14.7 22 12 22C10.6866 22.0005 9.38604 21.7422 8.17254 21.2399C6.95905 20.7375 5.85645 20.0009 4.92776 19.0722C3.99907 18.1436 3.2625 17.0409 2.76013 15.8275C2.25777 14.614 1.99948 13.3134 2 12C2 10.386 2.386 8.86 3.064 7.51Z"
        fill={fill}
      />
    </svg>
  );
};
