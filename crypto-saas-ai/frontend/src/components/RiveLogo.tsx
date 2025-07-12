'use client';
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';

export default function RiveLogo() {
  const { RiveComponent } = useRive({
    src: '/rive/hero-animation.riv',
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  return (
    <div className="w-64 h-64">
      <RiveComponent />
    </div>
  );
}
