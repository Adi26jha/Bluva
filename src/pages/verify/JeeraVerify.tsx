import ManufacturingPage from '../ManufacturingPage';
import type { ManufacturingData } from '../ManufacturingPage';
import { useParams, Navigate } from 'react-router-dom';

const SECRET_TOKEN = 'j4t7q2r9m5k1n8p6';

const data: ManufacturingData = {
  productName: 'BLUVA Apna Jeera',
  productCategory: 'Jeera Water',
  productSize: '200ml',
  accentColor: '#F4A300',
  manufacturerName: 'Satguru Enterprises',
  manufacturerAddress: 'G-463, 464, 465, 466, 494 & 495, UPSIDC Indl. Area, Phase-II, MG Road, Tehsil Dhaulana, Distt. Hapur - 201015 (U.P.), India',
  fssaiLicNo: '10012051000104',
  marketedBy: 'DS Industries',
  marketedByAddress: '18 Arihant Nagar Basement, Punjabi Bagh West, New Delhi',
  netQuantity: '200ml',
  storageConditions: 'Best served chilled. Store in a cool and dry place away from direct sunlight.',
};

const JeeraVerify = () => {
  const { token } = useParams<{ token: string }>();
  if (token !== SECRET_TOKEN) return <Navigate to="/" replace />;
  return <ManufacturingPage data={data} />;
};

export default JeeraVerify;
