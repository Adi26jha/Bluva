import LiquidChrome from './LiquidChrome';

const WaterHero = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <LiquidChrome
        baseColor={[0.039, 0.086, 0.157]}
        speed={0.5}
        amplitude={0.4}
        interactive={true}
      />
    </div>
  );
};

export default WaterHero;
