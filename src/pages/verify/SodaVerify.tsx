import ManufacturingPage from '../ManufacturingPage';
import type { ManufacturingData } from '../ManufacturingPage';
import { useParams, Navigate } from 'react-router-dom';

const SECRET_TOKEN = 's6p3k8m2t5w9r7q4';

const data: ManufacturingData = {
  productName: 'BLUVA Soda',
  productCategory: 'Carbonated Soft Drink',
  productSize: 'As marked on bottle',
  accentColor: '#E63946',
  manufacturerName: 'Flake Food & Beverages',
  manufacturerAddress: '837, Opp. Huda Market, Sector-38, Gurugram - 122001 (HR), India',
  fssaiLicNo: '10013063000290',
  marketedBy: 'DS Industries',
  marketedByAddress: '18 Arihant Nagar Basement, Punjabi Bagh West, New Delhi',
  netQuantity: 'As marked on bottle',
  storageConditions: 'Best served chilled. Keep away from direct sunlight and heat.',
};

const SodaVerify = () => {
  const { token } = useParams<{ token: string }>();
  if (token !== SECRET_TOKEN) return <Navigate to="/" replace />;
  return <ManufacturingPage data={data} />;
};

export default SodaVerify;
