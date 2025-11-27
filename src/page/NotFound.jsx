import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-green-100 text-center px-4">


      <h1 className="text-9xl font-extrabold text-green-600 drop-shadow-lg">
        404
      </h1>


      <h2 className="mt-4 text-3xl font-bold text-gray-800">
        الصفحة غير موجودة
      </h2>

      <p className="mt-2 text-gray-600 max-w-md">
        يبدو أنك وصلت إلى صفحة غير موجودة. ربما تم نقلها أو حذفها،
        أو ربما كتبت الرابط بشكل غير صحيح.
      </p>

     
      <Link
        to="/"
        className="mt-6 bg-gradient-to-r from-green-600 to-green-400 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 hover:scale-105 transition-all duration-300"
      >
        <FaArrowLeft /> العودة إلى الرئيسية
      </Link>


      <div className="absolute bottom-10 opacity-20 text-8xl select-none">
        🌿
      </div>
    </div>
  );
}
