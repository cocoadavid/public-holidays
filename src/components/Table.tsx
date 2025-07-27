import type { Holiday } from "../types/holiday";

type TableProps = {
  holidays: Holiday[];
  title?: string;
};

const Table = ({ holidays, title }: TableProps) => {
  return (
    <div className="rounded-xl bg-white shadow-md p-5">
      {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-gray-700">
          <thead className="border-b bg-gray-50 text-gray-600">
            <tr>
              <th className="px-5 py-3 font-medium">Date</th>
              <th className="px-5 py-3 font-medium">Name</th>
            </tr>
          </thead>
          <tbody>
            {holidays.map((holiday, idx) => (
              <tr
                key={`${holiday.date}-${idx}`}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-5 py-3 border-b">
                  {new Date(holiday.date).toLocaleDateString("hu-HU")}
                </td>
                <td className="px-5 py-3 border-b">
                  <span className="font-medium">{holiday.localName}</span>
                  <div className="text-sm text-gray-500">{holiday.name}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
