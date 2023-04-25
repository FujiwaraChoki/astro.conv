import Navbar from '@/components/Header/Navbar';
import UploadArea from '@/components/UploadArea';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <UploadArea />
      </div>
    </div>
  );
};

export default Home;
