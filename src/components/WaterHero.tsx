import LiquidChrome from './LiquidChrome';

const WaterHero = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <LiquidChrome
        baseColor={[0.973, 0.980, 0.988]}
        speed={0.5}
        amplitude={0.4}
        interactive={true}
      />
    </div>
  );
};

export default WaterHero;
