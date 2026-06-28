'use client';

interface MobileCallButtonProps {
  phoneNumber: string;
}

export default function MobileCallButton({ phoneNumber }: MobileCallButtonProps) {
  return (
    <a
      href={`tel:${phoneNumber}`}
      className="mobile-sticky-button btn-call py-4 px-4 flex items-center justify-center gap-2 rounded-full shadow-lg"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.7 10.7L19.7 7.7c-.4-.4-1-.4-1.4 0l-2.2 2.2c-.4.4-.4 1 0 1.4l3 3c-.6 1.6-1.6 3.1-2.9 4.4-1.3 1.3-2.8 2.3-4.4 2.9l-3-3c-.4-.4-1-.4-1.4 0l-2.2 2.2c-.4.4-.4 1 0 1.4l3 3C6.9 21.3 9.9 22 13 22c7.7 0 14-6.3 14-14 0-3.1-.7-6.1-2.3-8.3z" />
      </svg>
    </a>
  );
}
