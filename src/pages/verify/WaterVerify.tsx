import ManufacturingPage from '../ManufacturingPage';
import type { ManufacturingData } from '../ManufacturingPage';
import { useParams, Navigate } from 'react-router-dom';

const SECRET_TOKEN = 'w8k2m9p4q7r3b1n5';

const data: ManufacturingData = {
  productName: 'BLUVA Packaged Drinking Water',
  productCategory: 'Packaged Drinking Water',
  productSize: 'As marked on bottle',
  accentColor: '#00B4D8',
  manufacturerName: 'M/S Punj Aab Aqua Lip',
  manufacturerAddress: 'Khasara No-162/2, Khatano-165/2, Patli Hajipur, Gurgaon - 122506 (HR), India',
  fssaiLicNo: '10826005000980',
  marketedBy: 'DS Industries',
  marketedByAddress: '18 Arihant Nagar Basement, Punjabi Bagh West, New Delhi',
  netQuantity: 'As marked on bottle',
  storageConditions: 'Store in a cool and dry place. Keep away from direct sunlight.',
};

const WaterVerify = () => {
  const { token } = useParams<{ token: string }>();
  if (token !== SECRET_TOKEN) return <Navigate to="/" replace />;
  return <ManufacturingPage data={data} />;
};

export default WaterVerify;
