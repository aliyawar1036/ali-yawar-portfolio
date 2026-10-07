import React, { useState } from 'react';
import { PERSONAL_BRAND } from '../data/portfolioData';

const PROFILE_PHOTO_PATHS = [
  PERSONAL_BRAND.profilePhotoUrl,
  `${import.meta.env.BASE_URL}1791286708098.jpg`,
  `${import.meta.env.BASE_URL}assets/1791286708098.jpg`,
  `${import.meta.env.BASE_URL}profile.jpg`,
];

interface ProfilePhotoProps {
  variant: 'hero-circle' | 'about-portrait';
}

export const ProfilePhoto: React.FC<ProfilePhotoProps> = ({ variant }) => {
  const [pathIndex, setPathIndex] = useState<number>(0);

  const handleImageError = () => {
    if (pathIndex < PROFILE_PHOTO_PATHS.length - 1) {
      setPathIndex((prev) => prev + 1);
    }
  };

  const activeSrc = PROFILE_PHOTO_PATHS[pathIndex];

  if (variant === 'hero-circle') {
    return (
      <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6">
        {/* Prominent Circular Profile Photo */}
        <div className="relative shrink-0 w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36">
          {/* Subtle ambient glow matching dark theme */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-2 rounded-full bg-[#2563EB]/25 blur-xl"
          />
          <div
            style={{ borderRadius: '50%' }}
            className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#2563EB]/70 bg-[#10131C] shadow-[0_0_28px_rgba(37,99,235,0.22)]"
          >
            <img
              src={activeSrc}
              alt={`${PERSONAL_BRAND.name} — ${PERSONAL_BRAND.title}`}
              referrerPolicy="no-referrer"
              onError={handleImageError}
              style={{
                borderRadius: '50%',
                objectFit: 'cover',
                objectPosition: 'center 18%',
              }}
              className="w-full h-full block"
            />
          </div>
        </div>

        {/* Name & Professional Title Lockup */}
        <div className="space-y-1.5">
          <p className="font-display text-2xl sm:text-3xl font-bold text-[#F4F4F6] tracking-tight">
            {PERSONAL_BRAND.name}
          </p>
          <p className="text-sm sm:text-base font-medium text-[#60A5FA] tracking-wide">
            {PERSONAL_BRAND.title}
          </p>
        </div>
      </div>
    );
  }

  // About Section Portrait (Rounded / Contained Rectangle)
  return (
    <div className="relative mx-auto w-full max-w-[400px] lg:max-w-none">
      {/* Subtle ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#2563EB]/15 via-transparent to-transparent blur-xl"
      />

      <div className="relative bg-[#0D0F14] border border-[#222631] rounded-2xl p-4 sm:p-5">
        <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-[#10131C] border border-[#1E222D]">
          <img
            src={activeSrc}
            alt={`${PERSONAL_BRAND.name} — ${PERSONAL_BRAND.title}`}
            referrerPolicy="no-referrer"
            onError={handleImageError}
            style={{
              objectFit: 'cover',
              objectPosition: 'center top',
            }}
            className="w-full h-full block"
          />

          {/* Subtle bottom caption bar */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5">
            <p className="font-display text-lg font-bold text-white">
              {PERSONAL_BRAND.name}
            </p>
            <p className="text-xs font-medium text-[#93C5FD] mt-0.5">
              {PERSONAL_BRAND.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
