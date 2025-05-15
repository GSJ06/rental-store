import { Rental } from "../types";
import { Calendar, Package } from "lucide-react";

interface RentalHistoryProps {
  rentals: Rental[];
}

export function RentalHistory({ rentals }: RentalHistoryProps) {
  const getStatusColor = (status: Rental["status"]) => {
    switch (status) {
      case "Confirmed":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200";
      case "Completed":
        return "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200";
      case "Cancelled":
        return "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700/50 dark:text-gray-200";
    }
  };

  return (
    <div className="glass-effect rounded-xl shadow-lg p-6 transition-all duration-300">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Rental History
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rentals.map((rental) => (
          <div
            key={rental.order_id}
            className="glass-effect rounded-xl p-6 transition-all duration-300 hover:shadow-xl 
                     transform hover:scale-[1.02] cursor-pointer"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
              <div>
                <h3 className="text-lg font-semibold dark:text-white">
                  Order #{rental.order_id}
                </h3>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mt-1">
                  <Calendar size={16} className="mr-2" />
                  <span>
                    {rental.rental_start_date} - {rental.rental_end_date}
                  </span>
                </div>
              </div>
              <span
                className={`px-4 py-1.5 rounded-full text-sm font-me dium ${getStatusColor(
                  rental.status
                )}`}
              >
                {rental.status}
              </span>
            </div>

            <div className="space-y-3">
              {rental.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-t dark:border-gray-700/50"
                >
                  <div className="flex items-center">
                    <Package
                      size={16}
                      className="mr-2 text-gray-500 dark:text-gray-400"
                    />
                    <span className="dark:text-white font-medium">
                      {item.name}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 ml-2">
                      (₹{item.price_per_unit}x{item.quantity})
                    </span>
                  </div>
                  <span className="dark:text-white font-medium">
                    ₹{item.price_per_unit * item.quantity}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-end mt-4 pt-3 border-t dark:border-gray-700/50">
              <div className="text-right">
                <span className="text-gray-600 dark:text-gray-300">Total:</span>
                <span className="ml-2 text-xl font-semibold dark:text-white">
                  ₹{rental.total_price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
